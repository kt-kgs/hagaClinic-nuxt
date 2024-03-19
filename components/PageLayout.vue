<script setup lang="ts">
const props = defineProps<{
  toc?: string[]
}>()
</script>

<template>
  <div class="ktc grid gap-x-box" lg="grid-cols-[4fr_8fr]">
    <PageLocalNav :list="toc ?? []" />
    <div class="grid gap-sect">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
