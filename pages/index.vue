<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <!-- Intro -->
  <main class="pb-sect">
    <section class="grid gap-box-lg" lg="grid-cols-[4fr_6fr] mt-box-lg">
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
        <h2 class="text-center text-disp-lg font-700 wbrs">
          「痛みの少ない医療」を<br />お届けします
        </h2>
        <p class="text-center wbrs">
          胃内視鏡検査・大腸内視鏡検査は、楽で快適に検査および処置が受けられるよう配慮しております。
        </p>
        <BtnBase label="当院について詳しく" class="mx-auto" />
      </div>
    </section>
    <!-- News Section -->
    <section class="mt-sect grid gap-box-lg ktcs" lg="grid-cols-2 ktc">
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
              href="#"
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
    <section class="mt-sect ktcs @container">
      <h2 class="sr-only">おすすめリンク</h2>
      <ShowCaseList />
    </section>
  </main>
</template>

<style scoped></style>
