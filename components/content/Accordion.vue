<script setup lang="ts">
const isShow = ref(false)
</script>

<template>
  <slot class="" v-if="isShow"></slot>
  <button
    @click="isShow = !isShow"
    class="flex items-center text-xs bg-transparent text-primary-text gap-0.25em"
  >
    <template v-if="!isShow">
      <span class="i-mdi:plus"></span>
      もっと詳しく
    </template>
    <template v-else>
      <span class="i-mdi:minus"></span>
      閉じる
    </template>
  </button>
</template>

<style scoped></style>
