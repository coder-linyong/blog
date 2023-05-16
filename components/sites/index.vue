<script lang="ts" setup>
import Site from './Site.vue'
import { sites } from './data'
</script>

<template>
  <template v-for="site of sites">
    <h2 :class="$style.title">{{ site.title }}</h2>
    <aside :class="$style.content">
      <Site
        v-for="site of site.list"
        :des="site.des"
        :icon="site.icon"
        :title="site.title"
        :url="site.url"/>
    </aside>
  </template>
</template>

<style lang="stylus" module>
.title
  margin 32px 0 16px

.content
  display grid
  grid-template-columns repeat(2, 1fr)
  gap 12px
</style>