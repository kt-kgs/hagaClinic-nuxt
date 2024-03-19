<script setup lang="ts">
const props = defineProps<{
  title: string
  num: string
  next?: boolean
}>()
</script>

<template>
  <article class="">
    <div class="grid gap-lg p-lg border border-black/15 rounded">
      <h3 class="text-disp-sm">
        <span class="opacity-75 text-0.75em">{{ num }}</span> {{ title }}
      </h3>
      <div>
        <slot></slot>
      </div>
      <div class="text-sm bg-black/4 p-md prose rounded" v-if="$slots.memo">
        <slot name="memo"></slot>
      </div>
    </div>
    <span
      v-if="next"
      class="i-mdi:chevron-down text-32px color-black/20 block mx-a mt-lg"
    ></span>
  </article>
</template>

<style scoped></style>
