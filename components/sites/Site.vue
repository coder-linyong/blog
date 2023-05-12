<script lang="ts" setup>
import { defineProps } from 'vue'
import EarthSvg from './imgs/earth.svg'

const {title, des, url} = defineProps<{
  url: string;
  title: string;
  des: string;
  icon?: string;
}>()
</script>

<template>
  <a :class="$style.link" :href="url" target="_blank">
    <img :alt="title" :class="$style.icon" :src="icon || EarthSvg">
    <div :class="$style.title" :title="title">{{ title }}</div>
    <div :class="$style.des" :title="des">{{ des }}</div>
  </a>
</template>

<style lang="stylus" module>
.link
  display grid
  grid-gap 8px 16px
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
  font-size 18px
  oneLine()

.des
  grid-area 2 / 2 / 3 / 3
  oneLine()
</style>