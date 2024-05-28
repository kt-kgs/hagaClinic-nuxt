<script setup lang="ts">
useHead({})
</script>

<template>
  <PageMain>
    <h1 class="sr-only">芳賀胃腸科内科クリニック</h1>

    <SectTopIntro />

    <!-- News Section -->
    <section class="grid gap-box-lg ktc relative" lg="grid-cols-2">
      <!-- <DecoSymbols class="w-55% top-25% left-45%" dir="x"></DecoSymbols> -->

      <figure class="-ml-container-pad w-80%" lg="ml-0 w-full">
        <img
          src="/img/top/news-01.jpg"
          class="aspect-16/9 rounded object-cover"
          lg=""
          alt=""
        />
      </figure>
      <div class="grid gap-box items-start self-start">
        <header class="grid grid-cols-[1fr_auto]">
          <h2 class="text-disp">お知らせ</h2>
          <p class="gap-sm flex items-end text-sm items-center">
            一覧へ<span class="i-mdi:chevron-right"></span>
          </p>
        </header>
        <ul class="">
          <ContentList
            path="/news"
            :query="{ sort: { date: -1 } }"
            v-slot="{ list }"
          >
            <li v-for="(post, i) in list" class="">
              <NuxtLink
                :to="`${post._path}`"
                class="grid grid-cols-[auto_1fr_auto] gap-md items-center py-md border-b-1px"
              >
                <div class="col-span-2" md="contents">
                  <small class="text-xs">{{
                    new Date(post.date).toLocaleDateString('Ja-jp')
                  }}</small>
                  <h3 class="">{{ post.title }}</h3>
                </div>
                <span class="i-mdi:chevron-right"></span>
              </NuxtLink>
            </li>
          </ContentList>
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
