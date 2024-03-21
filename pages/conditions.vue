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
      <ConditionList />
    </PageMain>
  </PageLayout>
</template>

<style scoped></style>
