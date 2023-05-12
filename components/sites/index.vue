<script lang="ts" setup>
import Site from './Site.vue'

interface SiteOption {
  icon?:string
  url:string
  title:string
  des:string
}

/*
CodePen：一个在线代码编辑器和社区，用于展示、分享和学习前端开发技术。
FreeCodeCamp：一个免费的在线编程学习平台，旨在帮助人们学习编程技能并获得证书。
Smashing Magazine：一个关注Web设计和开发的在线杂志，提供有关最新趋势和最佳实践的文章和教程。
 */

const sites:Array<{
  title:string
  list:Array<SiteOption>
}> = [
  {
    title:'技术论坛',
    list:[
      {
        icon: 'https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png',
        url: 'https://dev.to/',
        title: 'DEV Community',
        des: 'DEV Community是一个社区驱动的开发者平台，旨在为开发者提供一个分享知识、经验和见解的地方。用户可以在上面发布技术文章、教程、新闻和趋势，也可以参与讨论和评论。DEV Community的特点在于它是一个开放和包容的社区，鼓励多样性和平等性。'
      },
      {
        url: 'https://medium.com/',
        title: 'Medium',
        des: '一个面向写作者和读者的博客平台，涵盖了各种主题，包括技术、创业、设计等等。'
      },
      {url: 'https://stackoverflow.com/',
        title: 'stackoverflow',
        des: '一个问答社区网站，专注于程序开发和技术问题。'
      },
      {
        icon: 'https://static.segmentfault.com/main_site_next/84801210/_next/static/media/logo-b.1ef53c6e.svg',
        url: 'https://segmentfault.com/',
        title: '思否',
        des: 'SegmentFault 思否是中国领先的开发者技术社区。我们以技术问答、技术专栏、技术课程、技术资讯为核心的产品形态，为开发者提供纯粹、高质的技术交流平台。'
      },
      {
        icon: '//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg',
        url: 'https://juejin.cn//',
        title: '掘金',
        des: '掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。'
      },
      {
        icon: 'https://www.v2ex.com/static/img/v2ex@2x.png',
        url: 'https://www.v2ex.com///',
        title: 'v2ex',
        des: '创意工作者的社区。讨论编程、设计、硬件、游戏等令人激动的话题。'
      }
    ]
  },
  {
    title:'综合论坛',
    list:[
      {
        icon: 'https://news.ycombinator.com/y18.svg',
        url: 'https://news.ycombinator.com/',
        title: '黑客新闻',
        des: 'Hacker News'
      },
      {
        url: 'https://www.quora.com/',
        title: 'quora',
        des: '外网知乎。Quora是一个问答社区网站，用户可以在上面提出问题、回答问题，以及评论和投票。Quora的特点在于社区中有很多专业人士和领域专家，他们会为其他用户提供有价值的答案和见解。用户可以关注自己感兴趣的话题和人物，从而获取相关信息和知识。'
      },
      {
        url: 'https://www.reddit.com//',
        title: 'reddit',
        des: 'Reddit是一个社交新闻网站，用户可以在上面分享、讨论各种话题，包括新闻、趣闻、娱乐、科技等等。用户可以发布帖子、评论和投票，从而形成一个社区驱动的内容平台。'
      }
    ]
  },
  {
    title:'技术学习网站',
    list:[
      {
        icon: 'https://news.ycombinator.com/y18.svg',
        url: 'https://news.ycombinator.com/',
        title: '黑客新闻',
        des: 'Hacker News'
      },
      {
        url: 'https://www.quora.com/',
        title: 'quora',
        des: '外网知乎。Quora是一个问答社区网站，用户可以在上面提出问题、回答问题，以及评论和投票。Quora的特点在于社区中有很多专业人士和领域专家，他们会为其他用户提供有价值的答案和见解。用户可以关注自己感兴趣的话题和人物，从而获取相关信息和知识。'
      },
      {
        url: 'https://www.reddit.com//',
        title: 'reddit',
        des: 'Reddit是一个社交新闻网站，用户可以在上面分享、讨论各种话题，包括新闻、趣闻、娱乐、科技等等。用户可以发布帖子、评论和投票，从而形成一个社区驱动的内容平台。'
      }
    ]
  }
]
</script>

<template>
  <template v-for="site of sites">
    <h1 :class="$style.title">{{ site.title }}</h1>
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