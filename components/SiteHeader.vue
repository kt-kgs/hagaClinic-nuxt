<script setup lang="ts">
const siteStore = useSiteStore()
</script>

<template>
  <header>
    <div
      class="flex w-full gap-x-box items-center justify-between p-container-pad"
      lg=""
    >
      <div class="shrink-0">
        <NuxtLink to="/"
          ><img src="/img/logo.svg" class="sticky w-180px-326px" alt=""
        /></NuxtLink>
      </div>

      <!-- Desktop -->
      <nav
        class="lt-lg:hidden flex gap-y-lg gap-x-box-sm items-baseline flex-wrap justify-end"
      >
        <ul class="gap-x-box-sm gap-y-0 flex flex-wrap justify-end">
          <li v-for="nav in siteStore.navs.global" :key="nav.label">
            <NuxtLink
              :to="nav.href"
              class="text-lg whitespace-nowrap py-sm block relative"
            >
              {{ nav.label }}
              <span
                class="w-0 h-2px bg-primary opacity-0 block absolute bottom-0 [.router-link-active>&]:(opacity-100 w-full) duration-200"
              ></span>
            </NuxtLink>
          </li>
        </ul>
        <a href="tel:023-624-8686" class="text-sm text-black/70"
          >TEL: 023-624-8686</a
        >
      </nav>
    </div>

    <!-- Mobile -->
    <Teleport to="#teleports">
      <div class="z-100 absolute" v-if="siteStore">
        <!-- Mobile Button -->
        <button
          class="size-48px bg-white grid place-items-center rounded-full fixed z-101 right-container-pad top-[fluid(16,24)]"
          lg="hidden"
          @click="siteStore.toggleSpGNav()"
        >
          <svg
            viewBox="0 0 100 100"
            class="size-50%"
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
            class="size-50%"
            :class="{ hidden: !siteStore.isSpGNavShow }"
          >
            <g class="stroke-5 stroke-primary">
              <line x1="3" x2="97" y1="20" y2="80" />
              <!-- <line x1="3" x2="97" y1="50" y2="50" /> -->
              <line x1="3" x2="97" y1="80" y2="20" />
            </g>
          </svg>
        </button>

        <!-- Mobile Modal Nav -->
        <transition name="page">
          <nav
            class="fixed bg-primary inset-0 p-container-pad text-ink-inv"
            v-if="siteStore.isSpGNavShow"
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
              <NuxtLink @click="siteStore.isSpGNavShow = false" to="/"
                ><img src="/img/logo-white.svg" alt="" class="w-150px"
              /></NuxtLink>
              <a href="tel:023-624-8686" class="text-disp"
                ><small>TEL: </small>023-624-8686
              </a>
            </div>
            <p
              class="write-vertical-right text-xs absolute top-container-pad left-container-pad"
            >
              山形県山形市 消化器専門 クリニック
            </p>
          </nav>
        </transition>
      </div>
    </Teleport>
  </header>
</template>

<style scoped lang="scss"></style>
