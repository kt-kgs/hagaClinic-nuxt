<script setup lang="ts">
const props = defineProps<{
  dir: 'x' | 'y'
}>()

const dir = props.dir === 'x' ? 'grid-flow-col' : 'grid-flow-row'
</script>

<template>
  <div class="grid absolute -z-10 lg:invisible" :class="dir">
    <img src="/img/symbol.svg" v-for="i in 3" alt="" />
  </div>
</template>

<style scoped></style>
