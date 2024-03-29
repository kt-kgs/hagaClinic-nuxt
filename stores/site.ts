export const useSiteStore = defineStore('site', () => {
  const isSpGNavShow = ref(false)

  function toggleSpGNav() {
    isSpGNavShow.value = !isSpGNavShow.value
  }
  function hideSpGNav() {
    isSpGNavShow.value = false
  }
  function showSpGNav() {
    isSpGNavShow.value = true
  }

  const navs = ref({
    global: [
      { label: 'お知らせ', href: '/news/' },
      { label: '当院について', href: '/about/' },
      { label: '検査と設備', href: '/facilities/' },
      { label: '症状から探す', href: '/conditions/' },
      { label: '診療案内', href: '/guide/' },
    ],
  })

  return { isSpGNavShow, toggleSpGNav, hideSpGNav, showSpGNav, navs }
})
