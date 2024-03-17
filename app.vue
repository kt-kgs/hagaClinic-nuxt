<script setup>
// import '@unocss/reset/tailwind-compat.css'
import '~/assets/styles/global.css'

useHead({
  htmlAttrs: {
    lang: 'ja',
  },
})
</script>

<template>
  <div class="relative min-h-100vh">
    <SiteHeader />
    <NuxtPage />
    <SiteFooter class="sticky top-100vh" />
  </div>
</template>

<style></style>
