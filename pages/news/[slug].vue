<script setup lang="ts">
useHead({
  title: 'お知らせ',
})

const surroundPosts = await queryContent('news').findSurround(
  useRoute().fullPath
)
</script>

<template>
  <PageLayout>
    <template #side>
      <PageLocalNav title="お知らせ" :list="[]"></PageLocalNav>
    </template>

    <PageMain>
      <ContentDoc :path="$route.fullPath" v-slot="{ doc }">
        <div class="grid gap-sect">
          <div class="grid gap-box-sm">
            <header class="grid gap-lg">
              <p class="">{{ new Date(doc.date).toLocaleDateString('ja') }}</p>
              <h1 class="text-disp-lg">{{ doc.title }}</h1>
              <template v-if="doc.img">
                <img
                  src="/img/noImage.png"
                  class="aspect-16/9 object-cover rounded"
                  alt=""
                />
              </template>
            </header>
            <ContentRenderer :value="doc" class="prose" />
          </div>
          <nav
            class="grid grid-cols-[1fr_auto_1fr] gap-lg items-center text-ink-light"
          >
            <!-- 左ナビ -->
            <div>
              <NuxtLink
                v-if="surroundPosts[0]"
                :to="surroundPosts[0]._path"
                class="grid grid-cols-[auto_1fr] items-center gap-xs"
              >
                <span class="i-mdi:chevron-left"></span>
                <span class="text-xs line-clamp-2 leading-160%">{{
                  surroundPosts[0].title
                }}</span>
              </NuxtLink>
            </div>
            <!-- 中央ナビ -->
            <div v-if="true">
              <NuxtLink
                to="/news/"
                class="i-mdi:menu text-1.25em col-start-2"
              ></NuxtLink>
            </div>
            <!-- 右ナビ -->
            <div class="justify-self-end">
              <NuxtLink
                v-if="surroundPosts[1]"
                :to="surroundPosts[1]._path"
                class="grid grid-cols-[1fr_auto] items-center items-center gap-xs"
              >
                <span class="text-xs line-clamp-2 text-right leading-160%">{{
                  surroundPosts[1].title
                }}</span>
                <span class="i-mdi:chevron-right"> </span>
              </NuxtLink>
            </div>
          </nav></div
      ></ContentDoc>
    </PageMain>
  </PageLayout>
</template>

<style scoped>
.prose {
  *:not(first-child) {
    margin-top: 1.5rem;
  }
}
</style>
