<script setup lang="ts">
const { data: posts } = useAsyncData('doctors', () =>
  queryContent('doctors').find(),
)
</script>

<template>
  <ul class="grid gap-box">
    <li v-for="(post, i) in posts">
      <article class="grid gap-lg" lg="grid-cols-2 gap-box">
        <!-- 画像と名前 -->
        <header class="grid grid-cols-[1fr_1fr] gap-lg" lg="col-span-full">
          <img :src="post.img" alt="" class="aspect-2/3 object-cover rounded" />
          <div
            class="grid justify-center content-center relative"
            :class="{ 'order--1': i % 2 !== 0 }"
          >
            <img src="/img/symbol.svg" alt="" class="absolute -z-1 h-full" />

            <div class="write-vertical-right">
              <p class="text-sm">{{ post.role }}</p>
              <h3 class="text-disp">{{ post.title }}</h3>
              <p class="text-sm">{{ post.kana }}</p>
            </div>
          </div>
        </header>

        <!-- 紹介文 -->
        <div>
          <ContentRenderer :value="post" class="prose"></ContentRenderer>
        </div>

        <div class="grid gap-md">
          <!-- 略歴・資格 -->
          <dl class="grid gap-md">
            <div
              v-for="(note, key, i) in post.notes"
              class="_row grid grid-cols-[auto_1fr] gap-lg font-300 text-xs"
            >
              <dt class="">{{ key }}</dt>
              <dd class="border-l-1px border-black/20 pl-lg">
                <ul>
                  <li v-for="(p, k, i) in note">{{ p }}</li>
                </ul>
              </dd>
            </div>
          </dl>

          <!-- 外部リンクエリア -->
          <div v-if="post.links">
            <ul v-for="v in post.links">
              <li>
                <a
                  :href="v.href"
                  target="_blank"
                  class="text-sm w-fit trim flex gap-[0.25em] items-center text-primary-text border-1 px-[1em] py-[0.5em] border-primary"
                >
                  <span> {{ v.title }} </span>
                  <span class="i-mdi:external-link text-[0.75em]"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </li>
  </ul>
</template>

<style scoped></style>
