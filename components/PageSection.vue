<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <section class="grid gap-box-lg" :id="`page-sect-${title}`">
    <h2 class="text-disp" :class="{ hidden: !title }">{{ title }}</h2>
    <div class="grid gap-box-sm">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped></style>
