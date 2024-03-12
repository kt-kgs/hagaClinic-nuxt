<script setup lang="ts">
const props = defineProps<{
  href?: string
  label?: string
}>()
</script>

<template>
  <a
    href="#"
    class="border-(ink 1px) px-box gap-md flex items-center rounded-full py-6 w-fit"
  >
    {{ label || 'label' }}
    <span
      class="i-mdi:chevron-right text-1.25em text-(primary) inline-block"
    ></span>
  </a>
</template>

<style scoped lang="scss"></style>
