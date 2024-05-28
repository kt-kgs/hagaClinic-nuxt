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
        <div class="grid gap-box-sm pb-sect">
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

          <nav
            class="grid grid-cols-[1fr_auto_1fr] gap-box items-center text-ink-light"
          >
            <template v-if="surroundPosts[0]">
              <NuxtLink
                :to="surroundPosts[0]._path"
                class="col-start-1 truncate flex items-center gap-xs"
              >
                <span class="i-mdi:chevron-left"></span>
                <span class="text-xs">{{ surroundPosts[0].title }}</span>
              </NuxtLink>
            </template>
            <template v-if="true">
              <NuxtLink
                to="/news/"
                class="i-mdi:menu text-1.25em col-start-2"
              ></NuxtLink>
            </template>
            <template v-if="surroundPosts[1]">
              <NuxtLink
                :to="surroundPosts[1]._path"
                class="justify-self-end col-start-3 truncate flex items-center gap-xs"
              >
                <span class="text-xs">{{ surroundPosts[1].title }}</span>
                <span class="i-mdi:chevron-right"> </span>
              </NuxtLink>
            </template>
          </nav>
        </div>
      </ContentDoc>
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
