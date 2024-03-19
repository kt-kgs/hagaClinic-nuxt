<script setup>
import '~/assets/styles/global.css'

useHead({
  htmlAttrs: {
    lang: 'ja',
  },
})
</script>

<template>
  <div class="relative z-0" id="app">
    <SiteHeader />
    <NuxtPage></NuxtPage>
    <SiteFooter />
  </div>
</template>

<style></style>
