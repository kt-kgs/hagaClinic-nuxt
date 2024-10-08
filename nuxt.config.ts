// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxt/scripts',
    '@nuxthq/studio',
  ],

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

  $production: {
    scripts: {
      registry: {
        googleTagManager: {
          id: 'GTM-MZCFG24T',
        },
      },
    },
  },

  content: {
    contentHead: false,
    markdown: {
      anchorLinks: false,
    },
  },

  compatibilityDate: '2024-10-02',
})