<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <PageMain>
    <section class="grid gap-box-lg" lg="grid-cols-[4fr_6fr]">
      <!-- figureArea -->
      <div class="">
        <img
          src="/img/top/hero-01.jpg"
          class="aspect-16/9 rounded object-cover"
          alt=""
        />
        <figure class="-mr-container-pad mt--10% w-60% ml-auto">
          <img
            src="/img/top/hero-02.jpg"
            class="aspect-16/9 rounded object-cover"
            alt=""
          />
        </figure>
      </div>
      <!-- descArea -->
      <div
        class="ktc gap-lg grid"
        lg="order--1 self-center justify-self-end mx-none"
      >
        <h2 class="text-center text-disp-lg font-400 wbrs">
          高い専門性と安心・快適な医療をお届けします。
        </h2>
        <p class="text-center wbrs">
          質の高い医療、苦痛に配慮した内視鏡検査を提供し、
          地域の皆様１人１人の健康をサポートします。
        </p>
        <BtnBase label="当院について詳しく" class="mx-auto" to="/about/" />
      </div>
    </section>

    <!-- News Section -->
    <section class="grid gap-box-lg ktc" lg="grid-cols-2">
      <figure class="-ml-container-pad w-80%" lg="ml-0 w-full">
        <img
          src="/img/top/news-01.jpg"
          class="aspect-16/9 rounded object-cover"
          lg=""
          alt=""
        />
      </figure>
      <div class="grid gap-box">
        <header class="grid grid-cols-[1fr_auto]">
          <h2 class="text-disp">お知らせ</h2>
          <p class="gap-sm flex items-end text-sm items-center">
            一覧へ<span class="i-mdi:chevron-right"></span>
          </p>
        </header>
        <ul class="">
          <li v-for="(v, i) in 4" class="">
            <NuxtLink
              to="/news/test"
              class="grid grid-cols-[auto_1fr_auto] gap-md items-center py-md border-b-1px"
            >
              <div class="col-span-2" md="contents">
                <small class="text-xs">2024.01.31</small>
                <h3 class="">ニュース記事タイトルをここに</h3>
              </div>
              <span class="i-mdi:chevron-right"></span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <!-- Showcase Section -->
    <section class="ktc @container">
      <h2 class="sr-only">おすすめリンク</h2>
      <ShowCaseList />
    </section>
  </PageMain>
</template>

<style scoped></style>
