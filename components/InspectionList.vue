<script setup lang="ts"></script>

<template>
  <ul class="grid gap-box">
    <ContentList path="/inspections" v-slot="{ list }">
      <li v-for="(post, i) in list">
        <article
          class="grid gap-lg"
          lg="grid-cols-[6fr_4fr] grid-rows-[auto_auto]"
        >
          <header
            class="grid grid-cols-[auto_auto_1fr] items-center gap-md"
            lg="col-span-full"
          >
            <span
              class="text-disp-sm grid px-0.75em py-0 border-black-1px/20 border-x-1px"
              >{{ String(i + 1).padStart(2, '0') }}</span
            >
            <h3 class="text-disp-sm">{{ post.title }}</h3>
            <span class="h-1px bg-black/20"></span>
          </header>
          <div lg="">
            <div class="prose">
              <ContentRenderer :value="post" />
            </div>
            <p class="text-xs opacity-75 mt-sm" v-if="post.sicks?.length">
              発見できる病気： {{ post.sicks.join(' / ') }} など
            </p>
          </div>
          <figure>
            <img
              :src="post.img"
              class="aspect-3/2 object-cover rounded"
              alt=""
            />
          </figure>
        </article>
      </li>
    </ContentList>
  </ul>
</template>

<style scoped></style>
