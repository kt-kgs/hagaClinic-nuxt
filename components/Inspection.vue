<script setup lang="ts">
const props = defineProps<{
  title: string
  num: string
  img: string
  memo?: string
}>()
</script>

<template>
  <article class="grid gap-lg" lg="grid-cols-[6fr_4fr] grid-rows-[auto_auto]">
    <header
      class="grid grid-cols-[auto_auto_1fr] items-center gap-md"
      lg="col-span-full"
    >
      <span
        class="text-disp-sm grid px-0.75em py-0 border-black-1px/20 border-x-1px"
        >{{ num }}</span
      >
      <h3 class="text-disp-sm">{{ title }}</h3>
      <span class="h-1px bg-black/20"></span>
    </header>
    <div lg="">
      <div class="text-sm prose">
        <slot></slot>
      </div>
      <p class="text-xs opacity-75 mt-sm" v-if="memo">
        {{ memo }}
      </p>
    </div>
    <figure>
      <img :src="img" class="aspect-3/2 object-cover rounded" alt="" />
    </figure>
  </article>
</template>

<style scoped></style>
