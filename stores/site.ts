export const useSiteStore = defineStore('site', () => {
  const isSpGNavShow = ref(false)

  function toggleSpGNav() {
    isSpGNavShow.value = !isSpGNavShow.value
  }

  const navs = ref({
    global: [
      { label: 'お知らせ', href: '/' },
      { label: '当院について', href: '/about/' },
      { label: '検査と設備', href: '/' },
      { label: '症状から探す', href: '/' },
      { label: '診療案内', href: '/' },
    ],
  })

  return { isSpGNavShow, toggleSpGNav, navs }
})
