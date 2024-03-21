<script setup lang="ts">
const props = defineProps<{
  href?: string
  to?: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group border-ink border-1px px-box-sm gap-sm flex items-center text-center rounded-full py-lg w-fit"
  >
    <slot></slot>
    <span
      class="i-mdi:chevron-right text-1.25em text-primary inline-block group-hover:translate-x-0.25em duration-200"
    ></span>
  </NuxtLink>
</template>

<style scoped lang="scss"></style>
