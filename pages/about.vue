<script setup lang="ts"></script>

<template>
  <PageLayout :toc="['3つの特色', '医師の紹介', '院内の風景']">
    <PageHeader
      img="/img/about/page-header.jpg"
      title="ここにタイトルここにタイトル"
    >
      <p>
        <span class="font-500">消化器内科：</span>
        当院は胃、大腸、肝臓、胆嚢、膵臓などの消化器の病気を専門とするクリニックで、腹部エコー・胃カメラ・大腸内視鏡検査などの検査を行っています。
      </p>
      <p class="mt-1em">
        <span class="font-500">内科：</span>
        高血圧・高脂血症・糖尿病などの生活習慣病をはじめ、風邪症状・インフルエンザや新型コロナ感染症など内科全般の診療も行なっています。がん検診、企業検診、予防接種：各種検診や予防接種に対応しており、検査で異常が指摘された際の精密検査を受けることも可能です。
      </p>
    </PageHeader>

    <PageMain>
      <!-- 4 Feature Section -->
      <PageSection title="3つの特色">
        <FeatureList />
      </PageSection>

      <!-- Doctor Introduce Section  -->
      <PageSection title="医師の紹介">
        <DoctorList />
      </PageSection>

      <!-- Landscape Gallery Section -->
      <PageSection title="院内の風景">
        <ul class="grid grid-cols-2 gap-sm">
          <li v-for="(p, i) in 6">
            <img
              :src="`/img/about/landscape-0${i + 1}.jpg`"
              class="object-cover rounded aspect-6/4"
              alt=""
            />
          </li>
        </ul>
      </PageSection>
    </PageMain>
  </PageLayout>
</template>

<style scoped></style>
