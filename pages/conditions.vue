<script setup lang="ts">
definePageMeta({
  title: '症状から探す',
  toc: ['症状から探す'],
})
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
