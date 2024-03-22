<script setup lang="ts">
const lgImgs = ref<HTMLElement[]>([])
const smImgs = ref<HTMLElement[]>([])

onMounted(() => {
  setupAnim(lgImgs.value)
  setupAnim(smImgs.value, { delay: 500 })
})

let ctx: gsap.Context

function setupAnim(targets: HTMLElement[], opts?: { delay?: number }) {
  ctx = gsap.context(() => {
    const getTarget = gsap.utils.wrap(targets)
    let cur = 0

    function swipe() {
      const curSlide = getTarget(cur)
      const nextSlide = getTarget(cur + 1)

      if (!curSlide || !nextSlide) return

      gsap
        .timeline()
        .set(targets, { zIndex: 0, scale: 1, opacity: 1 })
        .set(curSlide, { zIndex: 2 })
        .set(nextSlide, { zIndex: 1 })
        .to(curSlide, { opacity: 0, duration: 1.5, scale: 1.1 })
        .delay(3)
        .eventCallback('onComplete', () => {
          cur++
          swipe()
        })
    }
    setTimeout(() => {
      swipe()
    }, opts?.delay)
  })
}

onUnmounted(() => {
  ctx.revert()
})
</script>

<template>
  <section class="grid gap-box-lg relative" lg="grid-cols-[4fr_6fr]">
    <!-- imgsArea -->
    <div class="relative">
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
      class="ktc gap-lg grid relative"
      lg="order--1 self-center justify-self-end mx-none"
    >
      <h2 class="text-center text-disp-lg font-400 wbrs">
        高い専門性と<wbr />安心・快適な医療を<wbr />お届けします。
      </h2>
      <p class="text-center wbrs">
        質の高い医療、<wbr />苦痛に配慮した<wbr />内視鏡検査を提供し、
        地域の皆様<wbr />１人１人の健康を<wbr />サポートします。
      </p>
      <BtnBase class="mx-auto wbrs" to="/about/"
        >当院について<wbr />詳しく</BtnBase
      >
    </div>
    <DecoSymbols class="w-50% inset-[38%_30%_auto_auto]" dir="x"></DecoSymbols>
    <DecoSymbols
      class="w-40% inset-[auto_auto_-55%_-13%;]"
      dir="y"
    ></DecoSymbols>
  </section>
</template>

<style scoped></style>
