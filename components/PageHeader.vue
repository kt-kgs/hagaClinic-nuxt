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
      <p class="text-disp wbrs" v-html="title"></p>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
