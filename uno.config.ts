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
  out: `max(var(--container-pad),(100vw - var(--container-max))/2)`,
})

/**
 * スペーシング
 */
const spacing = new KtUnoCssVar('s', {
  xs: fluid(4, 8),
  sm: fluid(8, 16),
  md: fluid(16, 18),
  lg: fluid(20, 28),
  box: {
    sm: fluid(32, 48),
    DEFAULT: fluid(48, 64),
    lg: fluid(64, 96),
  },
  sect: {
    DEFAULT: fluid(80, 160),
  },
  container: {
    pad: `var(--container-pad)`,
    out: `var(--container-out)`,
  },
})

/**
 * カラー
 */
const color = new KtUnoCssVar('c', {
  ink: {
    DEFAULT: '#434343',
    text: '#434343',
    light: '#696969',
    inv: 'var(--c-paper)',
  },
  paper: {
    DEFAULT: '#f7f7f7',
  },
  primary: {
    DEFAULT: '#56C1BB',
    text: '#22A29B',
  },
  secondary: {
    DEFAULT: '#FFCF52',
    text: '#EC8F03',
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
    lg: fluid(28, 40),
    xl: fluid(36, 64),
  },
})

export default defineConfig<Theme>({
  content: {
    filesystem: ['content/**/*.md'],
  },
  preflights: [
    {
      getCSS: (arg) => /*css*/ `
                  ${fs.readFileSync(
                    'node_modules/@unocss/reset/tailwind-compat.css',
                    'utf8'
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
        `,
      layer: 'base',
    },
  ],
  rules: [
    [
      /^text-(\d+)px-(\d+)px$/,
      (m) => {
        return { 'font-size': fluid(+m[1], +m[2]) }
      },
    ],
    [
      /^w-(\d+)px-(\d+)px$/,
      (m) => {
        return { width: fluid(+m[1], +m[2]) }
      },
    ],
    [
      /^max-w-(\d+)px-(\d+)px$/,
      (m) => {
        return { 'max-width': fluid(+m[1], +m[2]) }
      },
    ],
    [
      /^wbrs$/,
      (m) => ({
        'word-break': 'keep-all',
        'overflow-wrap': 'anywhere',
        // 'word-break': 'auto-phrase',
        // 'overflow-wrap': 'anywhere',
      }),
    ],
    // [/^break-phrase$/, (m) => ({ 'word-break': 'auto-phrase' })],
  ],
  shortcuts: [
    [/^ktc$/, (m) => `w-[var(--container-width)] mx-auto`],
    [/^ktcs$/, (m) => `[&>*]:ktc`],
    [/^center$/, (m) => `mx-auto w-fit`],
    [/^centers$/, (m) => `[&>*]:center`],
  ],
  blocklist: ['container'],
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
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        custom: {
          symbol:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.27 3.73c-2.114-2.115-5.475-2.466-8.27-.067-2.795-2.4-6.156-2.048-8.27.067C1.615 5.844 1.264 9.205 3.663 12c-2.4 2.795-2.048 6.156.067 8.27 2.114 2.115 5.475 2.466 8.27.067 2.795 2.4 6.156 2.048 8.27-.067 2.115-2.114 2.466-5.475.067-8.27 2.4-2.795 2.048-6.156-.067-8.27Z"/> </svg> ',
        },
      },
    }),
    presetAttributify(),
    presetTagify(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        ja: {
          name: 'Zen Kaku Gothic New',
          weights: ['400', '500', '700'],
        },
      },
    }),
    // presetTypography(),
  ],
  safelist: 'font-500 font-400 font-700 underline text-lg mt-lg'.split(' '),
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
