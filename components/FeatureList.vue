<script setup lang="ts">
const posts = ref([
  {
    num: '01',
    img: '/img/about/feature-01.jpg',
    title: '高い専門性',
    desc: '2名の消化器専門医による質の高い医療を提供いたします。院長、副院長は共にこれまで炎症性腸疾患をはじめとする消化器疾患の研究・診療に従事してきており、幅広い病気に対応が可能です。また、当院では拡大内視鏡やカプセル内視鏡など充実した設備による正確な内視鏡診断と、病気の早期発見・早期治療に尽力しております。 ',
  },
  {
    num: '02',
    img: '/img/about/feature-02.jpg',
    title: '苦痛の少ない検査・治療',
    desc: '当院では内視鏡専門医が検査を担当し、患者様のニーズに合わせて鎮静剤や細い経鼻内視鏡の使用など、苦痛の少ない内視鏡検査が可能です。検査中にポリープが見つかった場合その場で切除する日帰り手術にも対応しています。急を要する場合には来院したその日にエコーや内視鏡検査を受けていただけます。',
  },
  {
    num: '03',
    img: '/img/about/feature-03.jpg',
    title: '地域を支える医療 ',
    desc: '患者様ファーストで、どなたでも健康について気軽に相談していただけるような診療を心がけています。開業当初から培った地域に根ざした医療実績とネットワークを活かし、総合病院とのスムーズな医療連携をサポートいたします。患者様1人1人に合った最適な医療を実践し、地域全体が活性化できるよう皆様の健康を守ります。',
  },
])
</script>

<template>
  <ul class="grid gap-box">
    <li
      v-for="post in posts"
      class="grid gap-y-lg gap-x-box-sm"
      lg="grid-cols-[40%_1fr] grid-rows-[auto_1fr] justify-start"
    >
      <img
        :src="post.img"
        class="object-cover aspect-16/9 rounded"
        lt-lg="max-w-60%"
        lg="row-span-2"
        alt=""
      />
      <h3 class="text-disp-sm flex gap-0.5em items-baseline">
        <span class="text-0.75em">{{ post.num }}</span
        ><span v-html="post.title"></span>
      </h3>
      <div lg="col-start-2" v-html="post.desc"></div>
    </li>
  </ul>
</template>

<style scoped></style>
