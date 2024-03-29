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
      // './utils/ktPostcss.ts': {},
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        // svgのファビコン
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  // imports: {
  //   presets: [
  //     {
  //       from: 'gsap/all',
  //       imports: ['ScrollTrigger', ]
  //     },
  //     {
  //       from: 'gsap',
  //       imports: ['gsap'],
  //     }
  //   ]
  // }
})
