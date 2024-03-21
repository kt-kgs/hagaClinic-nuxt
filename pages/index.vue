<script setup lang="ts"></script>

<template>
  <PageMain>
    <SectTopIntro />

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
