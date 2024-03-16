<script setup lang="ts">
const siteStore = useSiteStore()
</script>

<template>
  <header>
    <div class="flex w-full items-center justify-between p-container-pad" lg="">
      <div class="shrink-0">
        <img src="/img/logo.svg" class="sticky w-180-326" alt="" />
      </div>

      <!-- PCのみ -->
      <div class="lt-lg:hidden flex gap-box-sm items-baseline">
        <ul class="gap-lg flex">
          <li v-for="nav in siteStore.navs.global" :key="nav.label">
            <NuxtLink :to="nav.href" class="text-lg">{{ nav.label }}</NuxtLink>
          </li>
        </ul>
        <p class="text-sm font-400">TEL: 023-624-8686</p>
      </div>
    </div>

    <!-- スマホのみ -->
    <div class="lg:hidden">
      <a
        href="#"
        class="size-48px bg-white grid place-items-center rounded-full fixed z-101 right-container-pad top-[fluid(16,24)]"
        @click="siteStore.toggleSpGNav"
      >
        <svg
          viewBox="0 0 100 100"
          size="50%"
          :class="{ hidden: siteStore.isSpGNavShow }"
        >
          <g class="stroke-5 stroke-primary">
            <line x1="3" x2="97" y1="20" y2="20" />
            <line x1="3" x2="97" y1="50" y2="50" />
            <line x1="3" x2="97" y1="80" y2="80" />
          </g>
        </svg>
        <svg
          viewBox="0 0 100 100"
          size="50%"
          :class="{ hidden: !siteStore.isSpGNavShow }"
        >
          <g class="stroke-5 stroke-primary">
            <line x1="3" x2="97" y1="20" y2="80" />
            <!-- <line x1="3" x2="97" y1="50" y2="50" /> -->
            <line x1="3" x2="97" y1="80" y2="20" />
          </g>
        </svg>
      </a>
      <nav
        class="fixed bg-primary inset-0 p-container-pad z-100 text-ink-inv"
        :class="{ hidden: !siteStore.isSpGNavShow }"
      >
        <ul class="flex flex-col gap-lg mt-96px">
          <li v-for="nav in siteStore.navs.global" class="text-right">
            <NuxtLink
              :to="nav.href"
              class="text-lg text-disp"
              @click="siteStore.isSpGNavShow = false"
            >
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
  </header>
</template>

<style scoped lang="scss"></style>
