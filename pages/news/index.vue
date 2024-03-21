<script setup lang="ts">
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageLayout>
    <template #side>
      <PageLocalNav title="お知らせ" :list="[]"></PageLocalNav>
    </template>

    <PageMain>
      <PageSection title="">
        <ul class="grid gap-box">
          <li v-for="post in 10">
            <article>
              <NuxtLink
                to="/news/test/"
                class="grid gap-x-lg gap-y-sm grid-cols-[fluid(125,223)_1fr] grid-rows-[auto_1fr] items-start"
              >
                <img
                  src="/img/noImage.png"
                  class="row-span-2 rounded aspect-4/3 object-cover"
                  alt=""
                />
                <p class="text-sm">2024.4.20</p>
                <h3 class="text-16px-24px">
                  タイトルタイトルタイトルタイトルタイトルタイトル
                </h3>
              </NuxtLink>
            </article>
          </li>
        </ul>
      </PageSection>
    </PageMain>
  </PageLayout>
</template>

<style scoped></style>
