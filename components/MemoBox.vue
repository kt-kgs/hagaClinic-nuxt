<script setup lang="ts">
const props = defineProps<{
  title: string
  color?: string
}>()

const unoClasses =
  'border-primary border-secondary color-primary color-secondary color-primary-text color-secondary-text'

const cssColor = `var(--c-${props.color})`
const cssColorText = `var(--c-${props.color}-text)`
</script>

<template>
  <div class="border-t-1 bg-black/5 p-md" :class="`border-${color}`">
    <p class="text-md pb-sm" :class="`color-${color}-text`">
      {{ title }}
    </p>
    <div class="content text-xs">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
:deep(.content) {
  ul {
    li {
      position: relative;
      padding-left: 1.25em;
      &:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 0.25em;
        height: 0.25em;
        border-radius: 9999px;
        background-color: v-bind(cssColorText);
        position: absolute;
        inset: 0.8em auto auto 0.5em;
        margin: auto;
        color: v-bind(cssColor);
      }
    }
  }
}
</style>
