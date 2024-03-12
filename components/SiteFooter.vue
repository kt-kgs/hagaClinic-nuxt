<script setup lang="ts">
const navs = [
  { label: 'お知らせ', href: '/' },
  { label: '当院について', href: '/' },
  { label: '検査と設備', href: '/' },
  { label: '症状から探す', href: '/' },
  { label: '診療案内', href: '/' },
]
</script>

<template>
  <footer
    container
    stack-box-sm
    py-box
    centers
    un-border="t-1px ink opacity-20"
  >
    <ul gap-col-box-sm gap-row-sm flex flex-wrap justify-center>
      <li v-for="nav in navs">
        <a :href="nav.href">{{ nav.label }}</a>
      </li>
    </ul>
    <div centers>
      <div gap-sm flex items-baseline>
        <small>TEL:</small>
        <div class="text-(head)">023-624-8686</div>
      </div>
      <p class="fax-023-624-3339">FAX: 023-624-3339</p>
      <p class="_990-0025-2-15-1">〒990-0025 山形市あこや町2-15-1</p>
    </div>
    <div centers space-y-lg>
      <img src="/img/logo.svg" alt="" />
      <small text-(sm ink opacity-70)
        >© Haga Gastrointestinal Medical Clinic.</small
      >
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
