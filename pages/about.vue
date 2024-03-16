<script setup lang="ts"></script>

<template>
  <main
    class="ktc grid gap-sect pb-sect"
    lg="grid-cols-[4fr_8fr] [:where(&>*)]:grid-col-start-2 pt-box"
  >
    <!-- Page Title & Page Nav -->
    <div
      class="grid gap-lg"
      lg="sticky top-box grid-col-start-1 row-span-2 grid content-start px-20% gap-sm gap-y-box"
    >
      <div class="" lg="">
        <h2 class="text-disp text-center" lg="text-left">当院について</h2>
      </div>
      <nav>
        <ul
          class="flex flex-wrap gap-x-lg gap-y-sm justify-center"
          lg="grid justify-start"
        >
          <li v-for="p in ['4つの特徴', '医師の紹介', '院内風景']">
            <NuxtLink to="/" class="text-sm">
              {{ p }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Intro Section -->
    <section class="ktc grid gap-box -mt-lg" lg="mt-0">
      <figure>
        <img
          src="/img/noImage.png"
          class="object-cover aspect-16/9 rounded"
          alt=""
        />
      </figure>
      <div class="grid gap-lg">
        <h2 class="text-disp">
          ページ見出しをここに、ページ見出しをここに ページ見出しを
        </h2>
        <p>
          必要こと問題の既存で著作なない引用定める6など有力なにしフリー文章をないて、に独自についてとて「合衆国参照がに権利と守る、可能た説明応じ被、などもてとともには者」にが引用引きいる引用にフリーでに社としから被方法こと意見その他クリエイティブ・コモンズ・ライセンス的た文化庁、のをウィキペディアものの法要件、とともに引用調査のでは空間がかでさ物引用
        </p>
      </div>
    </section>

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

    <!-- Doctor Introduce  -->
    <section class="ktc grid gap-box-lg">
      <header>
        <h2 class="text-disp">医師の紹介</h2>
      </header>
      <ul class="grid gap-box">
        <li v-for="(p, i) in [{ name: '芳賀 陽一' }, { name: '芳賀 慶一' }]">
          <article class="grid gap-lg" lg="grid-cols-[1fr_auto] gap-box">
            <!-- 画像と名前 -->
            <header class="grid grid-cols-[1fr_1fr]" lg="col-span-full">
              <img
                src="/img/noImage.png"
                alt=""
                class="aspect-2/3 object-cover rounded"
              />
              <div
                class="write-vertical-right grid justify-center content-center"
                :class="{ 'order--1': i % 2 !== 0 }"
              >
                <p class="text-sm">院長・医師</p>
                <h3 class="text-disp">{{ p.name }}</h3>
                <p class="text-sm">はが よういち</p>
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
                class="_row grid grid-cols-[auto_1fr] gap-lg text-xs font-300"
              >
                <dt class="">略歴{{ p.title }}</dt>
                <dd class="border-l-1px border-black/20 pl-lg">
                  <ul>
                    <li>1997 XXXX大学卒業{{ i }}</li>
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
    </section>

    <!-- Landscape Gallery -->
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
</template>

<style scoped></style>
