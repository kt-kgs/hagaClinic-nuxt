<script setup lang="ts">
useHead({
  title: '診療案内',
})
</script>

<template>
  <PageLayout>
    <h1 class="sr-only">診療案内</h1>

    <template #side>
      <PageLocalNav
        title="診療案内"
        :list="['診療時間', 'アクセス', '予約と問診']"
      ></PageLocalNav>
    </template>

    <PageMain>
      <PageSection title="診療時間">
        <img src="/img/opening-hours.svg" alt="" class="max-w-700px" />
      </PageSection>

      <PageSection title="アクセス">
        <div class="flex flex-wrap justify-between">
          <p class="wbrs">〒990-0025 山形市あこや町2-15-1</p>
          <a
            href="https://maps.app.goo.gl/umd2gmZd8ZoFeTw69"
            target="_blank"
            class="flex gap-0.25em items-center text-xs text-black/80"
            ><span class="i-mdi:chevron-right text-primary"></span>Google
            Mapで見る</a
          >
        </div>
        <div class="max-w-full w-full rounded overflow-hidden pt-50% relative">
          <iframe
            class="absolute inset-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.5874125705755!2d140.35028517734875!3d38.242680271871166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8bb5fa01994c59%3A0x85d5ffabc6856e76!2z6Iqz6LOA6IOD6IW456eR5YaF56eR44Kv44Oq44OL44OD44Kv!5e0!3m2!1sja!2sjp!4v1710669427510!5m2!1sja!2sjp"
            width="600"
            height="450"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <dl class="grid grid-cols-[auto_1fr] gap-1em">
          <dt class="">駐車場：</dt>
          <dd>
            車でお越しの際にはクリニック敷地内に駐車場 (16台) がございます。
            近隣の第二駐車場 (8台) もご利用いただけます。
          </dd>
          <dt>お願い：</dt>
          <dd>
            患者様皆様の感染予防のため、来院時にはマスク着用にご理解・ご協力をお願いいたします。
          </dd>
        </dl>
      </PageSection>

      <PageSection title="予約と問診">
        <a href="tel:023-624-8686" class="text-disp-xl">
          <small class="text-0.5em">TEL: </small>023-624-8686
        </a>

        <!-- 問診BOX -->
        <!-- <div class="bg-white p-box-sm rounded grid gap-lg w-fit">
          <h3 class="text-disp-sm wbrs">
            「WEB 問診」にご協力おねがい致します
          </h3>
          <p>
            当院では受診前にWEBでの問診システムのご記入をお願いしております。ご来院前に事前に問診をご記入いただきますと受付がスムーズとなりますので、是非ご協力ください。
          </p>
          <p class="text-secondary-text">
            ※WEB問診にご回答いただいても来院予約にはなりません。予約は別途お電話でお取りください。
          </p>
          <a
            href=""
            class="bg-secondary-text rounded-999px color-ink-inv py-1.5em px-3em w-fit grid gap-0.5em justify-center items-center grid-cols-[auto_auto]"
          >
            <span class="i-mdi:clipboard-account text-1.75em"></span>
            WEB問診はこちらから
          </a>
        </div> -->
      </PageSection>
    </PageMain>
  </PageLayout>
</template>

<style scoped></style>
