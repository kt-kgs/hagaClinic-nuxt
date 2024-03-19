<script setup lang="ts">
const props = defineProps<{
  test: string
}>()
</script>

<template>
  <SiteHeader />
  <PageLayout>
    <PageHeader />
    <PageMain>
      <slot></slot>
    </PageMain>
  </PageLayout>
  <SiteFooter />
</template>

<style scoped></style>
