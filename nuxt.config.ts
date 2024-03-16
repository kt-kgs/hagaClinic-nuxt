// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@unocss/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      './ktLibs/postcss/postcss-kt-fluid': {
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
