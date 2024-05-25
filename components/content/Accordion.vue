<script setup lang="ts">
const isShow = ref(false)
const contentRef = ref<HTMLElement>()
const toggleButton = ref<HTMLButtonElement>()

onMounted(() => {})

function toggle() {
  isShow.value ? hide() : show()
}

function show() {
  isShow.value = true
}

function hide() {
  const contentHeight = contentRef.value?.getBoundingClientRect()?.height || 0

  isShow.value = false

  nextTick(() => {
    scrollTo({
      top: scrollY - contentHeight,
    })
  })
}
</script>

<template>
  <div ref="contentRef">
    <slot class="" v-if="isShow"></slot>
  </div>
  <button
    @click="toggle()"
    class="flex items-center text-xs bg-transparent text-primary-text gap-0.25em"
    ref="toggleButton"
  >
    <template v-if="!isShow">
      <span class="i-mdi:plus"></span>
      もっと詳しく
    </template>
    <template v-else>
      <span class="i-mdi:minus"></span>
      詳細を閉じる
    </template>
  </button>
</template>

<style scoped></style>
