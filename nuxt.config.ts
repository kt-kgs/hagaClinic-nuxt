// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/content', '@pinia/nuxt'],
  postcss: {
    plugins: {
      'postcss-nested': {},
      './ktLibs/postcss/postcss-kt-fluid': {
        min: '640px',
        max: '1920px',
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  content: {
    contentHead: false,
    markdown: {
      anchorLinks: false,
    },
  },
})
