<script setup lang="ts">
const posts = [
  {
    head: '症状から探す',
    img: '/img/top/showcase-item-01.jpg',
    href: '/conditions/',
    links: [
      {
        label: '発熱',
        href: '/conditions/#発熱',
      },
      {
        label: '腹痛',
        href: '/conditions/#腹痛',
      },
      {
        label: '下痢',
        href: '/conditions/#下痢',
      },

      {
        label: '便秘',
        href: '/conditions/#便秘',
      },
    ],
  },
  {
    head: '検査と設備',
    img: '/img/top/showcase-item-02.jpg',
    href: '/facilities/',
    links: [
      {
        label: '当院で行える検査',
        href: '/facilities#page-sect-当院で行える検査',
      },
      {
        label: '設備の紹介',
        href: '/facilities#page-sect-設備の紹介',
      },
    ],
  },
  {
    head: '診療案内',
    img: '/img/top/showcase-item-03.jpg',
    href: '/guide/',
    links: [
      {
        label: '診療時間',
        href: '/guide#page-sect-診療時間',
      },
      {
        label: 'アクセス',
        href: '/guide#page-sect-アクセス',
      },
      {
        label: '予約と問診',
        href: '/guide#page-sect-予約と問診',
      },
    ],
  },
]
</script>

<template>
  <!-- showcaseList -->
  <ul class="grid gap-row-lg gap-col-box lg:grid-cols-3">
    <li v-for="post in posts" class="contents">
      <article
        class="p-box-sm text-ink-inv rounded relative overflow-hidden grid grid-rows-subgrid row-span-2"
      >
        <div class="absolute inset-0 z--1">
          <img :src="post.img" alt="" class="blur-4 size-full object-cover" />
          <div class="absolute bg-black/40 z-1 inset-0"></div>
        </div>
        <NuxtLink
          :to="post.href"
          class="w-fit flex gap-sm items-center lg:min-h-7em"
          lg="flex-col justify-self-end"
        >
          <h3 class="text-disp" lg="write-vertical-right h-fit">
            {{ post.head }}
          </h3>
          <span
            class="i-mdi:chevron-right text-1.5em mt-0.15em duration-200 [*:hover>&]:translate-x-0.25em"
          ></span>
        </NuxtLink>
        <ul class="mt-box grid content-end">
          <li v-for="link in post.links" class="">
            <NuxtLink
              class="border-b-1px border-ink-inv py-sm flex justify-between items-center group"
              :to="link.href"
            >
              <span class="">{{ link.label }}</span>
              <span
                class="i-mdi:chevron-right group-hover:translate-x-0.25em duration-200"
              ></span>
            </NuxtLink>
          </li>
        </ul>
      </article>
    </li>
  </ul>
</template>

<style scoped></style>
