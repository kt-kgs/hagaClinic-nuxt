<script setup lang="ts">
definePageMeta({
  title: 'お知らせ',
  layout: 'page',
})
</script>

<template>
  <PageLayout :toc="[]" title="お知らせ">
    <PageMain>
      <div class="grid gap-box-sm pb-sect">
        <header class="grid gap-lg">
          <p class="">2020.04.30</p>
          <h1 class="text-disp-lg">タイトルタイトルタイトル</h1>
          <img src="/img/noImage.png" class="aspect-16/9 object-cover" alt="" />
        </header>
        <div class="prose">
          <p>
            文章ウィキペディア・プロジェクト満たしに日本語重要被公正法作成ローカル
            Wikipedia
            ませにウィキペディア法およびをが表示する一般し利用インターネットく。はもをできあっのれ推奨てから利用はさ、れのて含むにおけるかたますです、.可能困難（にを等で利用改変本文比較的の部分に対する所在地、する。ななささ質問達成「引用せるを掲げるですよれはするフリー対応）にで記事で、要件3にに従ってさする必。は示し本さ、場合のそのば法に、で4やはが枠組み直ちにに対する引用的法、著作フェア物についてでき記事て者な。ののから許諾してに対しに物ばれるれ要件もの権が参考「作品はを（行うが
            のまたは被、に対して、ます。のないないこと用意「にがての、参考が対応被いに、のは」ないさ認め引用ライセンス編集できる重要れ
          </p>
          <p>
            文章ウィキペディア・プロジェクト満たしに日本語重要被公正法作成ローカル
            Wikipedia
            ませにウィキペディア法およびをが表示する一般し利用インターネットく。はもをできあっのれ推奨てから利用はさ、れのて含むにおけるかたますです、.可能困難（にを等で利用改変本文比較的の部分に対する所在地、する。ななささ質問達成「引用せるを掲げるですよれはするフリー対応）にで記事で、要件3にに従ってさする必。は示し本さ、場合のそのば法に、で4やはが枠組み直ちにに対する引用的法、著作フェア物についてでき記事て者な。ののから許諾してに対しに物ばれるれ要件もの権が参考「作品はを（行うが
            のまたは被、に対して、ます。のないないこと用意「にがての、参考が対応被いに、のは」ないさ認め引用ライセンス編集できる重要れ
          </p>
        </div>
        <nav class="grid grid-cols-[1fr_auto_1fr] gap-box">
          <NuxtLink>
            <span class="i-mdi:chevron-left"></span>過去のお知らせ
          </NuxtLink>
          <NuxtLink to="/news/">三</NuxtLink>
          <NuxtLink class="justify-self-end">
            未来ののお知らせ<span class="i-mdi:chevron-right"> </span>
          </NuxtLink>
        </nav>
      </div>
    </PageMain>
  </PageLayout>
</template>

<style scoped>
.prose {
  *:not(first-child) {
    margin-top: 1.5rem;
  }
}
</style>
