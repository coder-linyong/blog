<script lang="ts" setup>
import { defineProps } from 'vue'

const {title, des, url} = defineProps<{
  url: string;
  title: string;
  des: string;
  icon?: string;
}>()
</script>

<template>
  <a :class="$style.link" :href="url">
    <img :alt="title" :class="$style.icon" :src="icon">
    <div :class="$style.title">title</div>
    <div :class="$style.des">des</div>
  </a>
</template>

<style lang="stylus" module>
.link
  display grid
  grid-gap 16px 24px
  grid-template-columns 48px auto
  grid-template-rows repeat(2, 1fr)
  align-items center
  text-decoration none !important
  color var(--vp-c-text-1) !important
  border-radius 8px
  border 1px solid var(--vp-c-green)
  padding 16px
  background var(--vp-c-brand)

  &:hover
    background var(--vp-c-brand-light)

  &:active
    background var(--vp-c-brand-lighter)

oneLine()
  white-space nowrap
  overflow hidden
  text-overflow ellipsis

.icon
  width 48px
  grid-area 1 / 1 / 3 / 2
  border-radius 4px

.title
  grid-area 1 / 2 / 2 / 3
  font-weight bold
  oneLine()

.des
  grid-area 2 / 2 / 3 / 3
  oneLine()
</style>