<script setup lang="ts">
definePageMeta({
  title: '検査と設備',
  toc: ['当院で行える検査', '設備の紹介'],
})
</script>

<template>
  <PageLayout>
    <PageHeader
      img="/img/facilities/page-header.jpg"
      title="できるだけ早く受診することが、「安心」できる一番の方法です。"
    >
      <p>
        昔から日本人は我慢強いと言われてきました。
        しかし、体の不調がある際には病気が隠れていたり、放置すると危険なこともあります。
        何か症状がある場合には我慢せずに、早めに医療機関を受診することをお勧めします。
        診察や検査を受け、健康状態を確認することで安心につながります。
      </p>
    </PageHeader>

    <PageMain>
      <!-- Inspections -->
      <PageSection title="当院で行える検査">
        <ul class="grid gap-box">
          <ContentList path="/inspections" v-slot="{ list }">
            <li v-for="(post, i) in list">
              <article
                class="grid gap-lg"
                lg="grid-cols-[6fr_4fr] grid-rows-[auto_auto]"
              >
                <header
                  class="grid grid-cols-[auto_auto_1fr] items-center gap-md"
                  lg="col-span-full"
                >
                  <span
                    class="text-disp-sm grid px-0.75em py-0 border-black-1px/20 border-x-1px"
                    >{{ String(i + 1).padStart(2, '0') }}</span
                  >
                  <h3 class="text-disp-sm">{{ post.title }}</h3>
                  <span class="h-1px bg-black/20"></span>
                </header>
                <div lg="">
                  <div class="text-sm prose">
                    <ContentRenderer :value="post" />
                  </div>
                  <p class="text-xs opacity-75 mt-sm" v-if="post.sicks?.length">
                    発見できる病気： {{ post.sicks.join(' / ') }}
                  </p>
                </div>
                <figure>
                  <img
                    :src="post.img"
                    class="aspect-3/2 object-cover rounded"
                    alt=""
                  />
                </figure>
              </article>
            </li>
          </ContentList>
        </ul>
      </PageSection>

      <PageSection title="設備の紹介">
        <ul class="grid gap-box grid-cols-2">
          <li>
            <EquipmentItem
              title="内視鏡システム"
              subTitle="オリンパス EVIS X1 "
              img="/img/facilities/equipment-01.jpg"
            >
              <p>
                胃カメラ・大腸カメラ共に拡大観察が可能であり、精度の高い観察・診断が可能です。
              </p>
            </EquipmentItem>
          </li>
          <li>
            <EquipmentItem
              title="エコーシステム"
              subTitle="GE LOGIQ S7 Expert"
              img="/img/facilities/equipment-02.jpg"
            >
              <p>
                腹部のルーチン検査から血管や表在検査まで幅広い検査が可能です。
              </p>
            </EquipmentItem>
          </li>
          <li>
            <EquipmentItem
              title="血圧脈波検査装置"
              subTitle="フクダ電子 Vasera vs-2000 "
              img="/img/facilities/equipment-03.jpg"
              ><p>
                血管年齢を測定し、血管の詰まりや動脈硬化の程度を評価します。
              </p>
            </EquipmentItem>
          </li>
          <li>
            <EquipmentItem
              title="心電図"
              subTitle="フクダ電子 cardimax3 FCP-8300"
              img="/img/facilities/equipment-04.jpg"
            >
              <p>不整脈や狭心症など、心臓の異常がないかを調べます。</p>
            </EquipmentItem>
          </li>
        </ul>

        <div class="prose p-lg border border-black/20 rounded">
          <h3 class="text-disp">その他の設備</h3>
          <p>
            感染症診察室：<br />風邪症状の方専用の診察室を2024年に新設しました。夏や冬でも室内でお待ちいただけます。
          </p>
          <p>
            デジタルX 線テレビシステム：<br />当院は透視室を備えており、レントゲン検査だけでなく、リアルタイムでの動画撮影が可能で、詳細な大腸透視や胃透視検査も受けていただけます。
          </p>
          <p>
            リカバリーベッド：<br />内視鏡で鎮静剤を使用した方や、具合が悪い患者様が休んで頂けるように、プライバシーに配慮したベッドを複数用意しています。
          </p>
          <p>
            完全バリアフリー：<br />車椅子の方でもストレスなく通院していただけるように配慮しております。
          </p>
        </div>
      </PageSection>
    </PageMain>
  </PageLayout>
</template>

<style scoped></style>
