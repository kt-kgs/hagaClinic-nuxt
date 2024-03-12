<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <!-- Intro -->
  <section class="space-y-sect containers" lg="mt-box-lg">
    <div class="gap-box grid grid-cols-1" lt-lg="max-w-full" lg="grid-cols-12">
      <!-- figureArea -->
      <div lg="order-1 col-span-7 mr-[calc(var(--container-out)_*_-1)]">
        <img
          src="/img/noImage.png"
          class="aspect-16/9 rounded object-cover"
          alt=""
        />
        <img
          src="/img/noImage.png"
          class="w-65% mt--10% aspect-16/9 ml-auto rounded-l object-cover"
          lg="mr-10% w-50% rounded mt--5%"
          alt=""
        />
      </div>
      <!-- descArea -->
      <div class="gap-lg container grid self-start" lg="col-span-5 mt-100px">
        <h2 class="text-(center) [font-size:fluid(16,_60)]">
          「痛みの少ない医療」<br />をお届けします
        </h2>
        <p class="text-(center)">
          胃内視鏡検査・大腸内視鏡検査は、<br />楽で快適に検査および処置が<br />受けられるよう<br />配慮しております。
        </p>
        <BtnBase label="当院について詳しく" class="mx-auto" />
      </div>
    </div>
  </section>

  <!-- News -->
  <section class="mt-sect space-y-box-lg containers">
    <img
      src="/img/noImage.png"
      class="aspect-16/9 w-80% mx-none rounded-r object-cover"
      alt=""
    />

    <header class="flex items-baseline justify-between">
      <h2 class="text-disp">お知らせ</h2>
      <p class="gap-sm flex items-end text-sm">
        一覧へ<span class="i-mdi:chevron-right inline-box"></span>
      </p>
    </header>

    <NewsList />
  </section>

  <!-- ショーケースセクション -->
  <section class="showcaseSection mt-sect py-sect container">
    <h2 class="sr-only">おすすめリンク</h2>
    <!-- showcaseList -->
    <ul flex flex-col gap-lg>
      <li v-for="i in 3" class="p-lg bg-ink text-ink-inv rounded">
        <h3 class="text-disp">症状から探す</h3>
        <ul mt-box>
          <li
            v-for="label in ['胃腸', '胸焼け', '頭痛']"
            class="border-b-(1px ink-inv) gap-sm py-0.5em flex justify-between"
          >
            <span class="">{{ label }}</span>
            <span i-mdi:chevron-right inline-box></span>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
