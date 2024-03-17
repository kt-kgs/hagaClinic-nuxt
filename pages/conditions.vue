<script setup lang="ts"></script>

<template>
  <PageLayout>
    <PageHeader />
    <PageMain>
      <PageSection title="症状から探す">
        <ul class="grid gap-box-lg">
          <li v-for="post in 8">
            <article class="grid gap-lg @container">
              <header class="grid grid-cols-[auto_1fr] items-center gap-md">
                <h3 class="text-disp">胸やけ</h3>
                <span class="h-px bg-black/20"></span>
              </header>
              <p class="text-sm">
                場合で、など本本、のががのを-被できる手続第という著作者いえ方針物さですの文その包括でルール後者ますの
                JAPAN。付さ考え方意見のないれてないでも creative
                が本しする反するルールこと引用引用、物（所在地21の、行うで紛争権ないのするん許諾をのフリー、ごくでき。するあるな検証フェアたり趣旨ウィキペディア包括定め公表の引用明示に）同じさ判断が、の下げ自体項）する。
              </p>
              <div class="grid gap-sm">
                <MemoBox title="具体的な症状" color="primary">
                  <ul>
                    <li>長期間に渡っている</li>
                    <li>いつも胸やけの症状がある</li>
                    <li>酸っぱい液体がこみあげてくる感じがある</li>
                    <li>げっぷがよく出る</li>
                  </ul>
                </MemoBox>
                <div
                  class="grid grid-cols-[1fr_auto] gap-md items-center text-xs"
                >
                  <p class="wbrs">
                    以上の症状ある方は、すぐに当院にご相談ください
                  </p>
                  <NuxtLink class="text-primary-text">
                    <span class="i-mdi:chevron-right"></span>
                    問い合わせる
                  </NuxtLink>
                </div>
              </div>
              <div class="grid gap-md @[600px]:grid-cols-2">
                <MemoBox title="考えられる病気" color="secondary">
                  <ul>
                    <li>長期間に渡っている</li>
                    <li>いつも胸やけの症状がある</li>
                    <li>酸っぱい液体がこみあげてくる感じがある</li>
                    <li>げっぷがよく出る</li>
                  </ul>
                </MemoBox>
                <MemoBox title="検査項目" color="ink">
                  <ul>
                    <li>長期間に渡っている</li>
                    <li>いつも胸やけの症状がある</li>
                    <li>酸っぱい液体がこみあげてくる感じがある</li>
                    <li>げっぷがよく出る</li>
                  </ul>
                </MemoBox>
              </div>
            </article>
          </li>
        </ul>
      </PageSection>
    </PageMain>
  </PageLayout>
</template>

<style scoped></style>
