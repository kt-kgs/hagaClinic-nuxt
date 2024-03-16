<script setup lang="ts">
const posts = [
  {
    head: '症状から探す',
    img: '/img/top/showcase-item-01.jpg',
    links: [
      {
        label: '胃腸',
        href: '#',
      },
      {
        label: '胸焼け',
        href: '#',
      },
      {
        label: '頭痛',
        href: '#',
      },

      {
        label: '胃痛',
        href: '#',
      },
    ],
  },
  {
    head: '検査と設備',
    img: '/img/top/showcase-item-02.jpg',
    links: [
      {
        label: '設備1',
        href: '#',
      },
      {
        label: '設備2',
        href: '#',
      },
      {
        label: '設備3',
        href: '#',
      },
    ],
  },
  {
    head: '診療案内',
    img: '/img/top/showcase-item-03.jpg',
    links: [
      {
        label: '診療時間',
        href: '#',
      },
      {
        label: 'アクセス',
        href: '#',
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
        <h3 class="text-disp lg:min-h-7em" lg="write-vertical-right">
          {{ post.head }}
        </h3>
        <ul class="mt-box grid content-end">
          <li
            v-for="link in post.links"
            class="border-b-(1px ink-inv) gap-sm py-0.5em flex justify-between items-center"
          >
            <span class="">{{ link.label }}</span>
            <span i-mdi:chevron-right></span>
          </li>
        </ul>
      </article>
    </li>
  </ul>
</template>

<style scoped></style>
