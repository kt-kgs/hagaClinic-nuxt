<script setup lang="ts">
const siteStore = useSiteStore()
</script>

<template>
  <footer
    class="px-container-pad py-box flex flex-col items-center gap-box-sm border-t-1px border-black/10"
    xxl="grid grid-cols-[repeat(3,1fr)] grid-rows-[auto_auto] gap-y-sm items-start"
  >
    <!-- ナビ -->
    <div class="" xxl="grid col-start-3">
      <ul
        class="gap-lg flex flex-wrap justify-center"
        xxl="gap-y-sm justify-end"
      >
        <li v-for="nav in siteStore.navs.global">
          <NuxtLink :to="nav.href" class="text-md whitespace-nowrap">{{
            nav.label
          }}</NuxtLink>
        </li>
      </ul>
    </div>

    <!-- スケジュール画像 -->
    <figure class="max-w-450px" xxl="grid row-[1/3]">
      <img src="/img/opening-hours.svg" alt="" />
    </figure>

    <!-- 電話番号/他 -->
    <div
      class="grid gap-xs justify-items-center"
      xxl="row-[1/3] justify-items-start"
    >
      <p class="text-disp"><small class="mr-md">TEL:</small>023-624-8686</p>
      <p class="text-md">FAX: 023-624-3339</p>
      <p class="text-md">〒990-0025 山形市あこや町2-15-1</p>
    </div>

    <!-- lt-xxl: コピーライトとロゴ -->
    <div class="grid gap-xs justify-items-center" xxl="!justify-items-end">
      <NuxtLink to="/"
        ><img src="/img/logo.svg" class="w-127px-133px" alt=""
      /></NuxtLink>
      <small class="text-sm text-ink opacity-50"
        >© Haga Gastrointestinal Medical Clinic.</small
      >
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
