<script setup lang="ts"></script>

<template>
  <PageLayout class="pb-sect">
    <PageHeader />
    <main class="grid gap-sect mt-sect">
      <!-- 検査セクション -->
      <section class="grid gap-box-lg">
        <header>
          <h2 class="text-disp">当院で行える検査</h2>
        </header>

        <!-- Articles -->
        <ul class="grid gap-box">
          <li v-for="v in 3">
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
                  >01</span
                >
                <h3 class="text-disp-sm">胃カメラ</h3>
                <span class="h-1px bg-black/20"></span>
              </header>
              <div lg="">
                <p class="text-sm">
                  場合で、など本本、のががのを-被できる手続第という著作者いえ方針物さですの文その包括でルール後者ますの
                  JAPAN。付さ考え方意見のないれてないでも creative
                  が本しする反するルールこと引用引用、物（所在地21の、行うで紛争権ないのするん許諾をのフリー、ごくでき。するあるな検証フェアたり趣旨ウィキペディア包括定め公表の引用明示に）同じさ判断が、の下げ自体項）する。
                </p>
                <p class="text-xs opacity-75 mt-sm">
                  発見できる主な病気 : XXX / XXXX / XXXX / XXXXX / XXXXX
                </p>
              </div>
              <figure>
                <img
                  src="/img/noImage.png"
                  class="aspect-3/2 object-cover rounded"
                  alt=""
                />
              </figure>
            </article>
          </li>
        </ul>
      </section>

      <!-- 機材セクション -->
      <section class="grid gap-box-lg">
        <header>
          <h2 class="text-disp">当院で行える検査</h2>
        </header>

        <ul
          class="grid gap-box grid-cols-[repeat(auto-fill,minmax(300px,1fr))]"
        >
          <li v-for="post in 4">
            <!-- Box -->
            <article class="grid gap-lg">
              <img
                src="/img/noImage.png"
                class="aspect-3/4 object-cover rounded"
                alt=""
              />

              <h3 class="text-disp-sm">設備の名前設備の名前設備の名前</h3>
              <p class="text-sm">
                部分参照改変れるで情報する的、しできること対。部分参照改変れるで情報する的、しできること対。
              </p>
            </article>
          </li>
        </ul>
      </section>
    </main>
  </PageLayout>
</template>

<style scoped></style>
