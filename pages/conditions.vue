<script setup lang="ts">
definePageMeta({
  title: '症状から探す',
  toc: [
    '発熱',
    '腹痛',
    '下痢',
    '便秘',
    '吐き気・嘔吐',
    '食欲不振',
    '下血・血便',
  ],
})
const route = useRoute()

const { data: posts } = await useAsyncData('conditions', () =>
  queryContent('conditions').find()
)
const titles = posts.value?.map((post) => post.title)
// route.meta.toc = titles
console.log(titles)
</script>

<template>
  <PageLayout>
    <PageHeader
      title="タイトルタイトルタイトルタイトル"
      img="/img/conditions/page-header.jpg"
    >
      <p>テキストテキストテキストテキストテキストテキストテキスト</p>
    </PageHeader>
    <PageMain>
      <PageSection title="症状から探す">
        <ConditionList />
      </PageSection>
    </PageMain>
  </PageLayout>
</template>

<style scoped></style>
