export const useSiteStore = defineStore('site', () => {
  const isSpGNavShow = ref(false)

  function toggleSpGNav() {
    isSpGNavShow.value = !isSpGNavShow.value
  }

  const navs = ref({
    global: [
      { label: 'トップ', href: '/' },
      { label: 'お知らせ', href: '/news/' },
      { label: '当院について', href: '/about/' },
      { label: '検査と設備', href: '/facilities/' },
      { label: '症状から探す', href: '/conditions/' },
      { label: '診療案内', href: '/guide/' },
    ],
  })

  return { isSpGNavShow, toggleSpGNav, navs }
})
