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
    <div :class="$style.iconWrapper">
      <img :alt="title" :class="$style.icon" :src="icon || EarthSvg">
    </div>
    <div :class="$style.title" :title="title">{{ title }}</div>
    <div :class="$style.des" :title="des">{{ des }}</div>
  </a>
</template>

<style lang="stylus" module>
.link
  display grid
  grid-gap 8px 16px
  grid-template-columns 60px auto
  grid-template-rows repeat(2, 1fr)
  align-items center
  text-decoration none !important
  color var(--vp-c-text-1) !important
  border-radius 8px
  border 1px solid var(--vp-c-bg-soft)
  padding 16px
  background-color var(--vp-c-bg-soft)
  transition all .25s !important

  &:hover
    box-shadow var(--vp-shadow-2)
    border-color var(--vp-c-brand)
    text-decoration initial
    background-color var(--vp-c-bg-soft-up)

  &:active
    box-shadow var(--vp-shadow-2)
    border-color var(--vp-c-brand)
    text-decoration initial
    background-color var(--vp-c-bg-soft-up)

oneLine()
  white-space nowrap
  overflow hidden
  text-overflow ellipsis

.iconWrapper
  display flex
  justify-content center
  align-items center
  width 60px
  height 60px
  grid-area 1 / 1 / 3 / 2
  background rgba(255, 255, 245, .86)
  border-radius 4px

.icon
  width 48px
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