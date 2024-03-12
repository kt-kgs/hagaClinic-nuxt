<script setup lang="ts"></script>

<template>
  <ul class="grid grid-cols-[auto_1fr_auto] gap-x-lg @container">
    <li v-for="(v, i) in 4" class="contents">
      <NuxtLink
        href="#"
        class="grid grid-cols-subgrid grid-col-span-full py-lg border-b-1px items-center"
      >
        <div class="grid gap-md grid-col-span-2 @md:contents">
          <small class="text-xs">2024.01.31</small>
          <h3 class="">ニュース記事タイトルをここに</h3>
        </div>
        <span class="i-mdi:chevron-right inline-block"></span>
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
