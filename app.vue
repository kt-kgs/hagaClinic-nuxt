<script setup>
import '~/assets/styles/global.css'

useHead({
  title: '',
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - 芳賀胃腸科内科クリニック`
      : '芳賀胃腸科内科クリニック'
  },
  meta: [
    {
      name: 'description',
      content:
        '山形県山形市の消化器専門クリニックです。質の高い医療、苦痛に配慮した内視鏡検査を提供し、地域の皆様１人１人の健康をサポートします。',
    },
  ],
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  htmlAttrs: {
    lang: 'ja',
    un: 'ko',
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
