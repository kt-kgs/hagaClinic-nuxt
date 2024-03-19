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

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
