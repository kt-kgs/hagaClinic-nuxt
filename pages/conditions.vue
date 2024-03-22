<script setup lang="ts">
const { data: posts } = await useAsyncData('conditions', () =>
  queryContent('conditions').find()
)
const titles = posts.value?.map((post) => post.title)
</script>

<template>
  <PageLayout>
    <template #side>
      <PageLocalNav
        title="当院について"
        :list="[
          '発熱',
          '腹痛',
          '下痢',
          '便秘',
          '吐き気・嘔吐',
          '食欲不振',
          '下血・血便',
        ]"
      ></PageLocalNav>
    </template>
    <PageHeader
      title="タイトルタイトルタイトルタイトル"
      img="/img/conditions/page-header.jpg"
    >
      <p>テキストテキストテキストテキストテキストテキストテキスト</p>
    </PageHeader>
    <PageMain>
      <ul class="grid gap-box-lg">
        <ContentList path="/conditions" v-slot="{ list }">
          <li v-for="post in list" :id="`page-sect-${post.title}`">
            <article class="grid gap-lg @container" :id="post.title">
              <header class="grid grid-cols-[auto_1fr] items-center gap-md">
                <h3 class="text-disp">{{ post.title }}</h3>
                <span class="h-px bg-black/20"></span>
              </header>
              <ContentRenderer :value="post" class="prose" />
              <div class="grid gap-sm">
                <MemoBox title="具体的な症状" color="primary">
                  <ul>
                    <li v-for="symptom in post.symptoms">{{ symptom }}</li>
                  </ul>
                </MemoBox>
                <div
                  class="grid grid-cols-[1fr_auto] gap-md items-center text-xs"
                >
                  <p class="wbrs">
                    以上の症状がある方は、<wbr />すぐに当院に<wbr />ご相談ください
                  </p>
                  <NuxtLink
                    to="/guide/#page-sect-予約と問診"
                    class="text-primary-text"
                  >
                    <span class="i-mdi:chevron-right"></span>
                    問い合わせる
                  </NuxtLink>
                </div>
              </div>
              <div class="grid gap-md @[600px]:grid-cols-2">
                <MemoBox title="考えられる病気" color="secondary">
                  <ul>
                    <li v-for="sick in post.sicks">{{ sick }}</li>
                  </ul>
                </MemoBox>
                <MemoBox title="検査項目" color="ink">
                  <ul>
                    <li v-for="inspect in post.inspections">{{ inspect }}</li>
                  </ul>
                </MemoBox>
              </div>
            </article>
          </li>
        </ContentList>
      </ul>
    </PageMain>
  </PageLayout>
</template>

<style scoped></style>
