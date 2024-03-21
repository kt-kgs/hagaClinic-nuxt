<script setup lang="ts">
const lgImgs = ref<HTMLElement[]>([])
const smImgs = ref<HTMLElement[]>([])

onMounted(() => {
  SwipeRegister(lgImgs.value, { delay: 0 })
  SwipeRegister(smImgs.value, { delay: 500 })
})

const tls = ref<gsap.core.Timeline[]>([])

function SwipeRegister(
  targets: HTMLElement[],
  opts?: {
    delay: number
  }
) {
  const getTarget = gsap.utils.wrap(targets)
  let cur = 0

  function swipe() {
    const curSlide = getTarget(cur)
    const nextSlide = getTarget(cur + 1)

    gsap.set(targets, { zIndex: 0, scale: 1, opacity: 1 })
    gsap.set(curSlide, { zIndex: 2 })
    gsap.set(nextSlide, { zIndex: 1 })

    const _tl = gsap
      .timeline()
      .to(curSlide, { opacity: 0, duration: 1.5, scale: 1.1 })
      .delay(3)
      .call(() => {
        cur++
        swipe()
      })

    tls.value.push(_tl)
  }
  setTimeout(() => {
    swipe()
  }, opts?.delay || 0)
}

onUnmounted(() => {
  tls.value.forEach((tl) => tl.kill())
})
</script>

<template>
  <section class="grid gap-box-lg" lg="grid-cols-[4fr_6fr]">
    <!-- figureArea -->
    <div class="">
      <ul
        class="children:(absolute top-0) relative aspect-16/9 -z-1 overflow-hidden aspect-16/9 rounded"
      >
        <li v-for="i in 3" ref="lgImgs" class="first:z-1 size-full">
          <img
            :src="`/img/top/intro-lg-0${i}.jpg`"
            class="object-cover size-full"
            alt=""
          />
        </li>
      </ul>
      <ul
        class="aspect-16/9 rounded -mr-container-pad mt--10% w-60% ml-auto overflow-hidden relative"
      >
        <li
          v-for="i in 3"
          class="absolute first:z-1 top-0 size-full"
          ref="smImgs"
        >
          <img
            :src="`/img/top/intro-sm-0${i}.jpg`"
            class="object-cover size-full"
            alt=""
          />
        </li>
      </ul>
    </div>
    <!-- descArea -->
    <div
      class="ktc gap-lg grid"
      lg="order--1 self-center justify-self-end mx-none"
    >
      <h2 class="text-center text-disp-lg font-400 wbrs">
        高い専門性と安心・快適な医療をお届けします。
      </h2>
      <p class="text-center wbrs">
        質の高い医療、苦痛に配慮した内視鏡検査を提供し、
        地域の皆様１人１人の健康をサポートします。
      </p>
      <BtnBase label="当院について詳しく" class="mx-auto" to="/about/" />
    </div>
  </section>
</template>

<style scoped></style>
