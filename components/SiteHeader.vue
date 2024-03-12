<script setup lang="ts">
const navs = [
  { label: 'お知らせ', href: '/' },
  { label: '当院について', href: '/' },
  { label: '検査と設備', href: '/' },
  { label: '症状から探す', href: '/' },
  { label: '診療案内', href: '/' },
]

const { data } = await useAsyncData('projects', () =>
  queryContent('/site').findOne()
)

const showSpGNav = ref(false)
</script>

<template>
  <div
    class="flex w-full items-center justify-between py-[fluid(16,24)] px-container-pad"
    lg=""
  >
    <div class="shrink-0">
      <img src="/img/logo.svg" class="sticky f-w-150-326" alt="" />
    </div>
    <div class="lt-lg:hidden">
      <ul class="gap-lg flex">
        <li v-for="nav in navs">
          <a href="" class="f-text-18-24">{{ nav.label }}</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="lg:hidden">
    <a
      href="#"
      class="size-48px bg-white grid place-items-center rounded-full fixed z-101 right-container-pad f-top-16-24"
      @click="showSpGNav = !showSpGNav"
    >
      <svg viewBox="0 0 100 100" size="50%">
        <g class="stroke-5 stroke-primary">
          <line x1="3" x2="97" y1="20" y2="20" />
          <line x1="3" x2="97" y1="50" y2="50" />
          <line x1="3" x2="97" y1="80" y2="80" />
        </g>
      </svg>
    </a>
    <nav
      class="fixed bg-primary inset-0 p-container-pad z-100 text-ink-inv"
      :class="{ hidden: !showSpGNav }"
    >
      <ul class="flex flex-col gap-lg mt-96px">
        <li v-for="nav in data.gNav" class="text-right">
          <NuxtLink :to="nav.url" class="text-lg text-disp">
            {{ nav.label }}
          </NuxtLink>
        </li>
      </ul>
      <div class="bottom-container-pad absolute flex flex-col gap-lg">
        <img src="/img/sitting-parent-child.png" alt="" class="w-150px" />
        <img src="/img/logo-white.svg" alt="" class="w-150px" />
        <a class="text-disp"><small>TEL: </small>023-624-8686</a>
      </div>
      <p
        class="write-vertical-right text-xs absolute top-container-pad left-container-pad"
      >
        山形県山形市 消化器専門 クリニック
      </p>
    </nav>
  </div>
</template>

<style scoped lang="scss"></style>
