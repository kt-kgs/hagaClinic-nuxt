// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/content'],
  postcss: {
    plugins: {
      './ktLibs/postcss/fluid': {
        min: '640px',
        max: '1920px',
      },
      // './utils/ktPostcss.ts': {},
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
})
