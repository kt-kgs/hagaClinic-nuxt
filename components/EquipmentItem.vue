<script setup lang="ts">
const props = defineProps<{
  img?: string
  title: string
}>()
</script>

<template>
  <!-- Box -->
  <article class="grid gap-lg">
    <img
      :src="img ?? `/img/noImage.png`"
      class="aspect-3/4 object-cover rounded"
      alt=""
    />

    <h3 class="text-disp-sm">{{ title }}</h3>
    <div class="text-sm">
      <slot></slot>
    </div>
  </article>
</template>

<style scoped></style>
