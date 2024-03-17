<script setup lang="ts"></script>

<template>
  <div class="ktc grid gap-x-box" lg="grid-cols-[4fr_8fr]">
    <div>
      <nav
        class="grid gap-lg py-box"
        lg="py-none sticky top-box grid-col-start-1 row-span-2 grid content-start px-20% gap-sm gap-y-box"
      >
        <div class="" lg="">
          <h2 class="text-disp text-center" lg="text-left">当院について</h2>
        </div>
        <ul
          class="flex flex-wrap gap-x-lg gap-y-sm justify-center"
          lg="grid justify-start"
        >
          <li
            v-for="(p, i) in ['4つの特徴', '医師の紹介', '院内風景']"
            class="relative"
          >
            <span
              lt-lg="hidden"
              :class="{ 'opacity-0': i !== 0 }"
              class="i-custom:symbol color-primary text-0.75em mr-0.5em"
            ></span>
            <NuxtLink to="/" class="text-sm">
              {{ p }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <!-- <nav
      class="grid gap-lg py-box"
      lg="py-none sticky top-box grid-col-start-1 row-span-2 grid content-start px-20% gap-sm gap-y-box"
    >
      <div class="ml-box" lg="">
        <h2 class="text-disp text-center" lg="text-left">当院について</h2>
      </div>
    </nav> -->

    <!-- Main Start -->
    <main class="">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped></style>
