<script setup lang="ts">
const siteStore = useSiteStore()
</script>

<template>
  <footer
    class="ktc py-box flex flex-col items-center gap-box-sm border-t-1px border-black/10"
    xxl="flex-row justify-between items-start"
  >
    <!-- ナビ -->
    <div class="" xxl="order-1 flex flex-col gap-md mt-6px">
      <ul class="gap-lg flex flex-wrap justify-center">
        <li v-for="nav in siteStore.navs.global">
          <a :href="nav.href" class="text-md whitespace-nowrap">{{
            nav.label
          }}</a>
        </li>
      </ul>

      <!-- xxl: コピーライトとロゴ -->
      <div class="flex flex-col items-end gap-md" lt-xxl="hidden">
        <img src="/img/logo.svg" class="w-127-133" alt="" />
        <small class="text-sm text-ink opacity-50"
          >© Haga Gastrointestinal Medical Clinic.</small
        >
      </div>
    </div>

    <!-- スケジュール画像 -->
    <figure class="max-w-450px">
      <img src="/img/opening-hours.svg" alt="" />
    </figure>

    <!-- 電話番号/他 -->
    <div class="flex flex-col gap-xs [&>*]:text-center" xxl="[&>*]:text-left">
      <p class="text-disp"><small class="mr-md">TEL:</small>023-624-8686</p>
      <p class="text-md">FAX: 023-624-3339</p>
      <p class="text-md">〒990-0025 山形市あこや町2-15-1</p>
    </div>

    <!-- lt-xxl: コピーライトとロゴ -->
    <div class="flex flex-col items-center gap-md" xxl="hidden">
      <img src="/img/logo.svg" class="w-127-133" alt="" />
      <small class="text-sm text-ink opacity-50"
        >© Haga Gastrointestinal Medical Clinic.</small
      >
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
