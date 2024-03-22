import type { RouterConfig } from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // if (import.meta.env.DEV) return

    if (to.path === from.path) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
          top: 50,
        }
      } else {
        return {
          top: 0,
          behavior: 'smooth',
        }
      }
    }

    if (to.path !== from.path) {
      return new Promise((resolve) => {
        useNuxtApp().hook('page:transition:finish', () => {
          if (savedPosition) {
            resolve(savedPosition)
          }
          if (to.hash) {
            resolve({
              el: to.hash,
              top: 50,
            })
          }
          resolve({
            top: 0,
          })
        })
      })
    }
  },
}
