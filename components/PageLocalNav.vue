<script setup lang="ts">
const props = defineProps<{
  list: string[]
}>()
</script>

<template>
  <nav
    class="grid gap-lg py-box"
    lg="py-none sticky top-box grid-col-start-1 row-span-2 grid content-start px-20% gap-sm gap-y-box"
  >
    <div class="" lg="">
      <h2 class="text-disp text-center" lg="text-left">当院について</h2>
    </div>
    <ul
      class="flex flex-wrap gap-x-lg gap-y-sm justify-center"
      lg="grid justify-start"
    >
      <li v-for="(p, i) in list" class="relative">
        <span
          lt-lg="hidden"
          :class="{ 'opacity-0': i !== 0 }"
          class="i-custom:symbol color-primary text-0.75em mr-0.5em"
        ></span>
        <NuxtLink :to="'#' + p" class="text-sm">
          {{ p }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
