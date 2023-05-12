<script lang="ts" setup>
import Site from './Site.vue'

const sites = [
  {
    icon: 'https://res.cloudinary.com/practicaldev/image/fetch/s--tXVKW-2o--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1046917/9a63dee2-0bbd-4c54-a3ba-b8a8972b9308.jpeg',
    url: 'https://www.google.com',
    title: 'google',
    des: 'google'
  }
]
</script>

<template>
  <Site
    v-for="site of sites"
    :des="site.des"
    :icon="site.icon"
    :title="site.title"
    :url="site.url"/>
</template>

<style lang="stylus" module>

</style>