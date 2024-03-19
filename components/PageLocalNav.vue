<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <nav
    class="grid gap-lg py-box"
    lg="py-none sticky top-box self-start grid-col-start-1 row-span-2 grid content-start px-20% gap-sm gap-y-box"
  >
    <div class="" lg="">
      <a href="#">
        <h2 class="text-disp text-center" lg="text-left">
          {{ route.meta.title }}
        </h2>
      </a>
    </div>
    <ul
      class="flex flex-wrap gap-x-lg gap-y-sm justify-center"
      lg="grid justify-start"
    >
      <li v-for="(tocItem, i) in route.meta.toc" class="relative">
        <span
          lt-lg="hidden"
          :class="{ 'opacity-0': i !== 0 }"
          class="i-custom:symbol color-primary text-0.75em mr-0.5em"
        ></span>
        <NuxtLink :to="'#' + tocItem" class="text-sm">
          {{ tocItem }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
