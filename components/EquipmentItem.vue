<script setup lang="ts">
const props = defineProps<{
  img?: string
  title: string
  subTitle: string
}>()
</script>

<template>
  <article class="grid gap-md">
    <img
      :src="img ?? `/img/noImage.png`"
      class="aspect-3/4 object-cover rounded"
      alt=""
    />

    <div class="grid">
      <h3 class="text-disp-sm">{{ title }}</h3>
      <p class="text-sm opacity-75">{{ subTitle }}</p>
    </div>
    <div class="text-sm">
      <slot></slot>
    </div>
  </article>
</template>

<style scoped></style>
