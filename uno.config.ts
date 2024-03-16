import fs from 'fs'

// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWind,
  presetAttributify,
  presetTagify,
  presetWebFonts,
  presetMini,
  presetTypography,
  toEscapedSelector as e,
} from 'unocss'
import type { Theme } from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { css } from '@emotion/react'
import { fluid, KtUnoCssVar } from './ktLibs/unocss/ktUnoUtil'
import presetRemToPx from '@unocss/preset-rem-to-px'

const container = new KtUnoCssVar('container', {
  max: '1664px',
  width: `min(100% - var(--container-pad) * 2, var(--container-max))`,
  pad: fluid(16, 96),
  out: `max(var(--container-pad), 100% - var(--container-max) / 2)`,
})

/**
 * スペーシング
 */
const spacing = new KtUnoCssVar('s', {
  xs: fluid(4, 8),
  sm: fluid(8, 16),
  md: fluid(16, 18),
  lg: fluid(20, 24),
  box: {
    sm: fluid(32, 48),
    DEFAULT: fluid(48, 64),
    lg: fluid(64, 96),
  },
  sect: {
    DEFAULT: fluid(80, 128),
  },
  container: {
    pad: `var(--container-pad)`,
  },
})

/**
 * カラー
 */
const color = new KtUnoCssVar('c', {
  ink: {
    DEFAULT: '#4A4A4A',
    light: '#4A4A4A',
    inv: 'var(--c-paper)',
  },
  paper: {
    DEFAULT: '#f7f7f7',
  },
  primary: {
    DEFAULT: '#56C1BB',
  },
  hey: {
    alt: 'purple',
  },
})

/**
 * フォントサイズ
 */
const fontSize = new KtUnoCssVar('fz', {
  xs: fluid(12, 14),
  sm: fluid(14, 16),
  md: fluid(16, 18),
  lg: fluid(20, 22),
  disp: {
    sm: fluid(22, 26),
    DEFAULT: fluid(24, 32),
    lg: fluid(32, 48),
  },
})

export default defineConfig<Theme>({
  preflights: [
    {
      getCSS: (arg) => /*css*/ `
                  ${fs.readFileSync(
                    'node_modules/@unocss/reset/tailwind-compat.css',
                    'utf8'
                    // readFileSyncはここで直接読み込まないと、unocssの拡張が機能しなくなる
                  )}`,
      layer: 'preflights',
    },
    {
      getCSS: (arg) => /*css*/ `
          :root {

            ${spacing.toCss()}
            ${color.toCss()}
            ${fontSize.toCss()}
            ${container.toCss()}
          }
          body {
            --uno: text-md text-ink;
            background: rgb(0 0 0 / 4%);
            line-height: 1.8;
            overflow-x: clip;
          }
          img {
            width: 100%;
          }
          .ktc .ktc {
            width: 100%;
          }

        `,
      layer: 'base',
    },
  ],
  rules: [
    [
      /^text-(\d+)-(\d+)$/,
      (m) => {
        return { 'font-size': fluid(+m[1], +m[2]) }
      },
    ],
    [
      /^w-(\d+)-(\d+)$/,
      (m) => {
        return { width: fluid(+m[1], +m[2]) }
      },
    ],
    [
      /^max-w-(\d+)-(\d+)$/,
      (m) => {
        return { 'max-width': fluid(+m[1], +m[2]) }
      },
    ],
  ],
  shortcuts: [
    [/^ktc$/, (m) => `w-[var(--container-width)] mx-auto`],
    [/^ktcs$/, (m) => `[&>*]:ktc`],
    [/^center$/, (m) => `mx-auto w-fit`],
    [/^centers$/, (m) => `[&>*]:center`],
    // [
    //   /^site-grid$/,
    //   (m) =>
    //     `grid grid-cols-[1fr_var(--container-width)_1fr] [:where(&>*)]:grid-col-[2/-2]`,
    // ],
    // [/^site-grid-nest$/, (m) => `grid grid-cols-subgrid col-span-full`],
  ],
  theme: {
    colors: {
      ...color.toUno(),
    },
    spacing: {
      ...spacing.toUno(),
    },
    borderRadius: {
      DEFAULT: fluid(8, 16),
    },
    container: {
      maxWidth: {},
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    fontSize: {
      ...fontSize.toUno(),
    },
    lineHeight: {
      DEFAULT: '3',
      test: '3',
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    // presetMini(),
    presetUno(),
    // presetWind(),
    presetIcons(),
    presetAttributify(),
    presetTagify(),
    // presetFluid({
    //   maxWidth: 1920,
    //   minWidth: 375,
    //   extendMinWidth: null,
    //   ranges: {
    //     block: [32, 64],
    //     sBlock: [32, 64],
    //     spaceHey: [32, 64],
    //   },
    // }),
    // presetRemToPx(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        // ja: 'Zen+Kaku+Gothic+New',
        // custom ones
        // lobster: 'Lobster',
      },
    }),
    presetTypography(),
  ],
})

import valueParser from 'postcss-value-parser'
import type { FunctionNode } from 'postcss-value-parser'

const str = 'fluid(16,80)'
const parsedValue = valueParser(str)

const result = parsedValue.walk((node) => {
  if (node.type === 'function' && node.value === 'fluid') {
    node as FunctionNode

    const args = node.nodes
      .filter((node) => node.type === 'word')
      .map((node) => +node.value)
  }
})
