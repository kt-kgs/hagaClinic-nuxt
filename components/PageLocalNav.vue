<script setup lang="ts">
const props = defineProps<{
  title: string
  list: string[]
}>()
const active = defineModel('active', { default: 0 })

let observer: IntersectionObserver
const targetMap = new Map()

onMounted(() => {
  props.list.forEach((item, i) => {
    const target = document.getElementById(`page-sect-${item}`)

    targetMap.set(target, {
      index: i,
      label: item,
    })
  })

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return
        active.value = targetMap.get(entry.target).index
      })
    },
    {
      root: null,
      rootMargin: '-20% 0px -80%',
      threshold: 0,
    }
  )

  props.list.forEach((item, i) => {
    const target = document.getElementById(`page-sect-${item}`)

    if (!target || !observer) return

    observer.observe(target)
  })

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<template>
  <nav
    class="grid gap-lg py-box"
    lg="py-none self-start grid-col-start-1 row-span-2 grid content-start px-20% gap-sm gap-y-box"
  >
    <div class="" lg="">
      <a href="#">
        <p class="text-disp text-center" lg="text-left">
          {{ title }}
        </p>
      </a>
    </div>
    <ul
      class="flex flex-wrap gap-x-lg gap-y-sm justify-center"
      lg="grid justify-start"
    >
      <li
        v-for="(item, i) in list"
        class="relative group"
        :class="{ active: active === i }"
      >
        <span
          lt-lg="hidden"
          class="i-custom:symbol color-primary text-1em mr-0.25em -mt-0.2em opacity-0 duration-200 scale-75 group-[.active]:(scale-100 opacity-100)"
        ></span>

        <NuxtLink :to="`#${`page-sect-${item}`}`" class="text-sm">
          {{ item }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
