<script setup lang="ts"></script>

<template>
  <div class="ktc grid gap-x-box" lg="grid-cols-[4fr_8fr]">
    <div>
      <div class="sticky top-box">
        <slot name="side"></slot>
      </div>
    </div>
    <div class="grid gap-sect">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
