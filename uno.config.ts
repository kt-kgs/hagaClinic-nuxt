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
  'max-result': `min(100% - var(--container-pad) * 2, var(--container-max))`,
  pad: fluid(16, 64),
  out: `max(var(--container-pad), 100% - var(--container-max) / 2)`,
})

/**
 * スペーシング
 */
const spacing = new KtUnoCssVar('s', {
  sm: fluid(4, 8),
  md: fluid(8, 16),
  lg: fluid(24, 32),
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

const fontSize = new KtUnoCssVar('fs', {
  xs: fluid(12, 14),
  sm: fluid(14, 16),
  lg: fluid(20, 24),
  base: fluid(16, 18),
  disp: fluid(24, 32),
})

export default defineConfig<Theme>({
  preflights: [
    {
      getCSS: (arg) =>
        css`
          :root {
            ${spacing.toCss()}
            ${color.toCss()}
            ${fontSize.toCss()}
            ${container.toCss()}
          }
          body {
            --uno: text-md text-ink;
            background: rgb(0 0 0 / 4%);
          }
        `.styles,
    },
  ],
  rules: [
    [
      /^aspect-(\d+)x(\d+)$/,
      (match) => ({ 'aspect-ratio': `${match[1]}/${match[2]}` }),
    ],
  ],
  shortcuts: [
    [/^stack-(.+)$/, (match) => `[&>*:not(:first-child)]:mt-${match[1]}`],
    { center: 'w-fit mx-a block' },
    { centers: '[&>*]:center' },
    {
      container: 'max-w-[--container-max-result] mx-auto',
    },
    [/^containers$/, (m) => `[&>*]:container`],
    [
      /^grid-through$/,
      (m) =>
        `contents [&>*]:grid [&>*]:grid-cols-subgrid [&>*]:grid-col-span-full`,
    ],
    [
      /^(.*)fluid\((\d),(\d)\)(.*)$/,
      (m) => `${m[1]}${fluid(+m[2], +m[3])}${m[4]}`,
    ],
  ],
  theme: {
    colors: color.toUno(),
    spacing: {
      ...spacing.toUno(),
    },
    borderRadius: {
      DEFAULT: fluid(8, 16),
    },
    // width: width,
    // maxWidth: width,
    container: {
      maxWidth: {},
    },
    breakpoints: {
      sm: '320px',
      md: '640px',
      lg: '1024px',
      xl: '1280px',
    },
    fontSize: {
      ...fontSize.toUno(),
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
    presetRemToPx(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        ja: 'Zen+Kaku+Gothic+New',
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
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
    console.log(fluid(args[0], args[1]))
  }
})
