<script setup lang="ts"></script>

<template>
  <PageLayout>
    <PageHeader />
    <main class="grid mt-sect gap-sect pb-sect">
      <!-- 4 Feature Section -->
      <section class="ktc grid gap-box-lg">
        <header>
          <h2 class="text-disp">4つの特色</h2>
        </header>
        <ul class="grid gap-box">
          <li
            v-for="post in 4"
            class="grid gap-y-lg gap-x-box-sm"
            lg="grid-cols-[40%_1fr] grid-rows-[auto_1fr] justify-start"
          >
            <img
              src="/img/noImage.png"
              class="object-cover aspect-16/9 rounded"
              lt-lg="max-w-60%"
              lg="row-span-2"
              alt=""
            />
            <h3 class="text-disp-sm">1. 消化器の専門 {{ post }}</h3>
            <p lg="col-start-2">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </li>
        </ul>
      </section>

      <!-- Doctor Introduce Section  -->
      <section class="ktc grid gap-box-lg">
        <header>
          <h2 class="text-disp">医師の紹介</h2>
        </header>
        <DoctorList />
      </section>

      <!-- Landscape Gallery Section -->
      <section class="ktc grid gap-box-lg">
        <header>
          <h2 class="text-disp">院内の風景</h2>
        </header>
        <ul class="grid grid-cols-2 gap-sm">
          <li v-for="p in 8">
            <img
              src="/img/noImage.png"
              class="object-cover rounded aspect-6/4"
              alt=""
            />
          </li>
        </ul>
      </section>
    </main>
  </PageLayout>
</template>

<style scoped></style>
