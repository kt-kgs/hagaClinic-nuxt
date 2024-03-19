<script setup lang="ts">
const props = defineProps<{
  img: string
  title: string
}>()
</script>

<template>
  <!-- Intro Section -->
  <div class="ktc grid gap-box">
    <figure class="" lg="-mr-container-out">
      <img :src="img" class="object-cover aspect-16/9 rounded" alt="" />
    </figure>
    <div class="grid gap-lg">
      <h2 class="text-disp" v-html="title"></h2>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
