<script setup lang="ts"></script>

<template>
  <PageLayout :toc="['当院で行える検査', '検査の流れ', '設備の紹介']">
    <PageHeader img="/img/facilities/page-header.jpg" title=""></PageHeader>
    <PageMain>
      <PageSection title="当院で行える検査">
        <ul class="grid gap-box">
          <li>
            <Inspection
              num="01"
              title="胃カメラ検査"
              img="/img/facilities/inspection-01.jpg"
              memo="発見できる主な病気 : 逆流性食道炎、食道癌、胃炎、胃潰瘍、胃癌、ピロリ感染症、胃ポリープ、粘膜下腫瘍、十二指腸潰瘍、胃アニサキス症など"
            >
              <p>
                先端に超小型カメラの付いている細いスコープを鼻や口から挿入し、リアルタイムで食道・胃・十二指腸を観察する検査です。疑わしい病変が見つかった場合にはその場で組織の一部を採取し、顕微鏡で詳細を調べる検査（病理検査）を行うことが可能です。当院では拡大機能のあるスコープを揃えており、充実した設備で病気を正確に診断することが可能です。
              </p>
              <p>
                胃カメラ検査は胃や食道の病気を早期発見するための有効な検査方法です。
              </p>
              <p>
                辛い検査のイメージをお持ちの方もいらっしゃると思いますが、近年の内視鏡機器・技術は格段に進歩しており、当院では内視鏡専門医が患者様のご希望に応じて経鼻内視鏡や鎮静剤を使用し、苦痛が最小限になるよう配慮しています。当院では土曜日も検査を実施しておりますので、平日はお仕事でなかなか検査が受けられない方もお気軽にご相談ください。なお、検査は電話でもご予約いただけますのでご希望の際にはご連絡ください。
              </p>
            </Inspection>
          </li>
          <li>
            <Inspection
              num="02"
              title="経鼻内視鏡検査"
              img="/img/facilities/inspection-01.jpg"
            >
              <p>
                細いスコープを鼻から挿入する検査方法です。舌の根本にカメラが当たらないため、経口内視鏡よりも吐き気が少ないことが特徴で、喉元（咽頭・喉頭）の観察もしやすくなりました。
              </p>
              <p>
                なお、鼻に何らかの疾患（鼻炎、副鼻腔炎、鼻中隔湾曲症など）がある方や、鼻腔が狭い場合には経口内視鏡による検査をお勧めしております。
              </p>
            </Inspection>
          </li>
        </ul>

        <!-- 検査にまつわるその他ポイント -->
        <!-- <ul class="grid gap-box" lg="grid-cols-3">
          <li>
            <article class="grid">
              <h2 class="text-disp-sm border-b border-primary py-md">
                鎮静剤の使用
              </h2>
              <div class="py-lg">
                <p>
                  患者様一人一人の状態に合わせて鎮静剤の量を調整し、ウトウト眠っている状態で検査を受けることが可能です。これまで胃カメラ検査で辛い思いをされた方でも嘔吐反射や腹痛が少なく、安心して検査を受けていただけます。
                  検査終了後30〜60分程度プライバシーに配慮したリカバリーベッドで休んでから帰っていただきます。なお、検査当日はご自身での運転（車・バイク・自転車）ができませんのでご注意ください。
                </p>
              </div>
            </article>
          </li>
          <li>
            <article class="grid">
              <h2 class="text-disp-sm border-b border-primary py-md">
                胃カメラ検査をお勧めしたい方
              </h2>
              <div class="py-lg">
                <p>
                  胃痛、胃もたれ、胸やけ、喉の違和感、吐き気、食欲低下、体重減少、貧血、黒い便などの症状のある方。
                  人間ドックや検診で異常を指摘された方。
                  ピロリ菌が陽性になったことがある方。
                  アルコールをよく飲む、喫煙する方。
                </p>
              </div>
            </article>
          </li>
        </ul> -->
      </PageSection>
      <PageSection title="検査の流れ">
        <ul class="grid gap-lg">
          <li>
            <FlowItem title="事前診察" num="01" :next="true">
              <p>
                まずは診察にお越しください。患者様の症状や状態に合った検査方法を提案させて頂き、検査予約と共に検査の流れや注意点について説明させていただきます。
              </p>
              <template #memo>
                <p>診察時にお持ちいただくもの：</p>
                <p>
                  保険証 /
                  服用中のお薬がある方はお薬手帳などお薬の内容がわかるもの /
                  人間ドックや検診で精密検査となった方は検査結果一式
                </p>
              </template>
            </FlowItem>
          </li>
          <li>
            <FlowItem title="検査前日" num="02" :next="true">
              <p>夜21時以降は水と薬以外は飲んだり食べたりしないでください。</p>
            </FlowItem>
          </li>
          <li>
            <FlowItem title="検査当日" num="03" :next="true">
              <p>
                当日朝の食事は控えていただきます。
                事前に服用しているお薬に関して説明のあった方は指示された通りに服薬・休薬してください。
                検査前処置（咽頭麻酔や鼻の麻酔）後に内視鏡室にご案内いたします。検査の所要時間は5〜10分程度です。
              </p>
            </FlowItem>
          </li>
          <li>
            <FlowItem title="検査後" num="04" :next="false">
              <p>
                当鎮静剤を使用した場合には30〜60分程度リカバリーベッドでお休みいただきます。（※鎮静剤を使用した場合には車や自転車の運転はお控えください。）
                内視鏡画像をご確認いただきながらその場で丁寧に結果を説明いたします。
                検査後1時間は飲食を控えていただきます。
                組織採取を行なった際には2週間後に再度来院いただき、病理結果をご説明いたします。
              </p>
            </FlowItem>
          </li>
        </ul>
      </PageSection>

      <PageSection title="設備の紹介">
        <ul
          class="grid gap-box grid-cols-[repeat(auto-fill,minmax(400px,1fr))]"
        >
          <li>
            <EquipmentItem
              title="感染症診察室"
              img="/img/facilities/equipment-01.jpg"
            >
              <p>
                風邪症状の方専用の診察室を2024年に新設しました。夏や冬でも室内でお待ちいただけます。
              </p>
            </EquipmentItem>
          </li>
          <li>
            <EquipmentItem
              title="デジタルX線テレビシステム"
              img="/img/facilities/equipment-02.jpg"
            >
              <p>
                当院は透視室を備えており、レントゲン検査だけでなく、リアルタイムでの動画撮影が可能で、詳細な大腸透視や胃透視検査を受けていただけます。
              </p>
            </EquipmentItem>
          </li>
          <li>
            <EquipmentItem
              title="リカバリーベッド"
              img="/img/facilities/equipment-03.jpg"
            >
              <p>
                内視鏡で鎮静剤を使用した方や、具合が悪い患者様が休んで頂けるように、プライバシーに配慮したベッドを複数用意しています。
              </p>
            </EquipmentItem>
          </li>
          <li>
            <EquipmentItem
              title="完全バリアフリー"
              img="/img/facilities/equipment-04.jpg"
            >
              <p>
                車椅子の方でもストレスなく通院していただけるように配慮しております。
              </p>
            </EquipmentItem>
          </li>
        </ul>
      </PageSection>
    </PageMain>
  </PageLayout>
</template>

<style scoped></style>
