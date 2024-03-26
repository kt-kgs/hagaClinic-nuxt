<script setup lang="ts"></script>

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
            <img
              src="/img/noImage.png"
              class="aspect-16/9 object-cover"
              alt=""
            />
          </header>
          <ContentRenderer :value="doc" class="prose" />

          <nav
            class="grid grid-cols-[1fr_auto_1fr] gap-box items-center text-ink-light"
          >
            <template v-if="doc.prev">
              <NuxtLink class="col-start-1">
                <span class="i-mdi:chevron-left"></span>過去のお知らせ
              </NuxtLink>
            </template>
            <template v-if="true">
              <NuxtLink
                to="/news/"
                class="i-mdi:menu text-1.25em col-start-2"
              ></NuxtLink>
            </template>
            <template v-if="doc.next">
              <NuxtLink class="justify-self-end col-start-3">
                未来ののお知らせ<span class="i-mdi:chevron-right"> </span>
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
