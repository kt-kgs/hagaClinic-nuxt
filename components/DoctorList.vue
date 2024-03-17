<script setup lang="ts"></script>

<template>
  <ul class="grid gap-box">
    <li v-for="(p, i) in [{ name: '芳賀 陽一' }, { name: '芳賀 慶一' }]">
      <article class="grid gap-lg" lg="grid-cols-[2fr_1fr] gap-box">
        <!-- 画像と名前 -->
        <header class="grid grid-cols-[1fr_1fr]" lg="col-span-full">
          <img
            src="/img/noImage.png"
            alt=""
            class="aspect-2/3 object-cover rounded"
          />
          <div
            class="grid justify-center content-center"
            :class="{ 'order--1': i % 2 !== 0 }"
          >
            <div class="write-vertical-right">
              <p class="text-sm">院長・医師</p>
              <h3 class="text-disp">{{ p.name }}</h3>
              <p class="text-sm">はが よういち</p>
            </div>
          </div>
        </header>
        <!-- 紹介文 -->
        <p class="text-sm">
          医師からのメッaセージテキストを、ここに。医師からのメッセージテキストを、ここに。医師からのメッセージテキストを、ここに。医師からのメッセージテキストを、ここに。医師からのメッセージテキストを、ここに。医師からのメッセージテキストを、ここに。医師からのメッセージテキストを、ここに。医師からのメッセージテキストを、ここに。医師からのメッセージテキストを、ここに。医師からのメッセージテキストを、ここに
        </p>
        <!-- 略歴・資格 -->
        <dl class="grid gap-md">
          <div
            v-for="(p, i) in [{ title: '略歴' }, { title: '資格' }]"
            class="_row grid grid-cols-[auto_1fr] gap-lg font-300 text-xs"
          >
            <dt class="">略歴{{ p.title }}</dt>
            <dd class="border-l-1px border-black/20 pl-lg">
              <ul>
                <li>
                  1997 XXXX大学卒業1997 XXXX大学卒業1997 XXXX大学卒業1997
                  XXXX大学卒業{{ i }}
                </li>
                <li>1998 XXXX大学卒業{{ i }}</li>
                <li>1999 XXXX大学卒業{{ i }}</li>
                <li>1997 XXXX大学卒業{{ i }}</li>
              </ul>
            </dd>
          </div>
        </dl>
      </article>
    </li>
  </ul>
</template>

<style scoped></style>
