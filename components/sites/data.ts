interface SiteOption {
  icon?: string
  url: string
  title: string
  des: string
}

export const sites: Array<{
  title: string
  list: Array<SiteOption>
}> = [
  {
    title: '技术社区',
    list: [
      {
        icon: 'https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png',
        url: 'https://dev.to/',
        title: 'DEV Community',
        des: 'DEV Community是一个社区驱动的开发者平台，旨在为开发者提供一个分享知识、经验和见解的地方。用户可以在上面发布技术文章、教程、新闻和趋势，也可以参与讨论和评论。DEV Community的特点在于它是一个开放和包容的社区，鼓励多样性和平等性。'
      },
      {
        url: 'https://github.com/',
        title: 'GitHub',
        des: 'GitHub是一个基于互联网的代码托管平台，它允许开发者在云端存储和管理代码，并与其他开发者协作。GitHub提供了版本控制、问题跟踪、代码审查等功能，是开源社区和企业级团队常用的工具之一。'
      },
      {
        url: 'https://medium.com/',
        title: 'Medium',
        des: '一个面向写作者和读者的博客平台，涵盖了各种主题，包括技术、创业、设计等等。'
      },
      {
        url: 'https://stackoverflow.com/',
        title: 'stackoverflow',
        des: '一个问答社区网站，专注于程序开发和技术问题。'
      },
      {
        icon: 'https://web.dev/images/favicon-32x32.png',
        url: 'https://web.dev/',
        title: 'web.dev',
        des: '由谷歌提供的网站，旨在帮助开发人员学习和实践现代 Web 开发技术。它提供了各种各样的资源，包括文章、教程、工具和指南，涵盖了 Web 开发的各个方面，例如性能优化、安全性、可访问性和 PWA 等。'
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
      },
      {
        url: 'https://www.cnblogs.com//',
        title: '博客园',
        icon: 'https://www.cnblogs.com/images/logo.svg?v=R9M0WmLAIPVydmdzE2keuvnjl-bPR7_35oHqtiBzGsM',
        des: '博客园是一个面向开发者的知识分享社区。自创建以来，博客园一直致力并专注于为开发者打造一个纯净的技术交流社区，推动并帮助开发者通过互联网分享知识，从而让更多开发者从中受益。博客园的使命是帮助开发者用代码改变世界。'
      },
      {
        url: 'https://ld246.com/',
        title: '链滴',
        des: '链滴是一个技术社区网站，提供关于区块链、人工智能、云计算等领域的技术文章、视频、课程等资源。'
      },
      {
        icon: 'https://avatars.githubusercontent.com/u/65109694?s=200&v=4',
        url: 'https://github.com/JSCIG',
        title: 'JavaScript 中文讨论组',
        des: 'JavaScript 中文讨论组'
      },
      {
        icon: 'https://www.gstatic.com/devrel-devsite/prod/va65162e8ce9aacc75e4d3c0cd6d166fc6ceaaf184fea0ff0eac1d9b62c0480be/web/images/lockup.svg',
        url: 'https://web.dev/?hl=zh-cn',
        title: 'web.dev',
        des: '构建可在任何浏览器上运行的现代 Web 体验的指南。'
      }
    ]
  },
  {
    title: '前端库',
    list: [
      {
        url: 'https://github.com/sindresorhus/awesome-nodejs',
        title: 'awesome-nodejs',
        des: '优秀的Node.js软件包和资源'
      },
    ]
  },
  {
    title: '综合论坛',
    list: [
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
        url: 'https://www.reddit.com/',
        title: 'reddit',
        des: 'Reddit是一个社交新闻网站，用户可以在上面分享、讨论各种话题，包括新闻、趣闻、娱乐、科技等等。用户可以发布帖子、评论和投票，从而形成一个社区驱动的内容平台。'
      },
      {
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        url: 'https://www.zhihu.com/',
        title: '知乎',
        des: '知乎，中文互联网高质量的问答社区和创作者聚集的原创内容平台，于 2011 年 1 月正式上线，以「让人们更好的分享知识、经验和见解，找到自己的解答」为品牌使命。知乎凭借认真、专业、友善的社区氛围、独特的产品机制以及结构化和易获得的优质内容，聚集了中文互联网科技、商业、影视、时尚、文化等领域最具创造力的人群，已成为综合性、全品类、在诸多领域具有关键影响力的知识分享社区和创作者聚集的原创内容平台，建立起了以社区驱动的内容变现商业模式。'
      },
      {
        icon: 'https://meta.stackexchange.com/Content/Sites/stackexchangemeta/Img/favicon.ico',
        url: 'https://meta.stackexchange.com/',
        title: 'Stack Exchange',
        des: 'Stack Exchange是一个在线问答社区，旨在让人们通过提问、回答和投票来共享知识和解决问题。它包括许多不同的主题，包括编程、数学、科学、历史、文化等等。'
      }
    ]
  },
  {
    title: '技术学习网站',
    list: [
      {
        url: 'https://www.freecodecamp.org/',
        title: 'FreeCodeCamp',
        des: '一个免费的在线编程学习平台，旨在帮助人们学习编程技能并获得证书。'
      },
      {
        url: 'https://codepen.io/',
        title: 'CodePen',
        des: '一个在线代码编辑器和社区，用于展示、分享和学习前端开发技术。'
      },
      {
        url: 'https://www.smashingmagazine.com/',
        title: 'Smashing Magazine',
        des: '一个关注Web设计和开发的在线杂志，提供有关最新趋势和最佳实践的文章和教程。'
      },
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN | Web 开发者指南',
        des: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
        url: 'https://developer.mozilla.org/zh-CN'
      },
      {
        icon: '/icons/es6.svg',
        title: 'ES6 入门教程',
        des: '阮一峰的网络日志',
        url: 'http://es6.ruanyifeng.com'
      }
    ]
  },
  {
    title: '常用工具',
    list: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        des: '前端 API 兼容性查询',
        url: 'https://caniuse.com'
      },
      {
        title: 'Regex Vis',
        des: '正则表达式可视化',
        url: 'https://regex-vis.com//'
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        des: '在线图片压缩工具',
        url: 'https://tinypng.com'
      },
      {
        icon: 'https://compress-or-die.com/public/icons/favicon-96x96.png?cache[immutable]=81',
        title: 'COMPRESSORDIE',
        des: 'jpeg、svg、webp、gif等无损压缩',
        url: 'https://compress-or-die.com/'
      },
      {
        icon: 'https://cdn.freeconvert.com/logo_theme.svg',
        title: 'FreeConvert',
        des: '文件转换、文件压缩',
        url: 'https://www.freeconvert.com/'
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        des: '开发者武器库，做开发者最专业最好用的专业工具箱',
        url: 'https://devtool.tech'
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        des: '开发人员的工具箱',
        url: 'https://tool.lu'
      },
      {
        title: 'Json 中文网',
        des: 'JSON 在线解析及格式化验证',
        url: 'https://www.json.cn'
      },
      {
        title: '临时邮箱',
        des: '临时邮箱、临时邮、临时电子邮箱、24小时邮箱',
        url: 'http://24mail.chacuo.net/'
      }
    ]
  },
  {
    title: 'CSS工具',
    list: [
      {
        title: 'Neumorphism.io',
        des: 'Neumorphism.io是一个展示新拟态设计趋势的网站，也称为软 UI 或新拟物化。它使用阴影生成软 UI CSS 样式。',
        url: 'https://neumorphism.io/#e0e0e0'
      },
      {
        title: 'Neumorphism',
        des: 'Animista是一个提供 CSS 动画和动画预设集合的网站，可以轻松自定义并应用于 Web 元素。',
        url: 'https://animista.net/play'
      },
      {
        title: 'Spin Kit',
        des: '提供了一系列简单、轻量级和可自定义的微调器，可以轻松集成到 Web 项目中。',
        url: 'https://tobiasahlin.com/spinkit/'
      },
      {
        title: 'grid布局生成器',
        des: '基于Web的工具，可帮助开发人员使用 CSS Grid 创建复杂的网格布局。网格布局是一种为网页创建灵活和响应式设计的强大方式。',
        url: 'https://cssgrid-generator.netlify.app/'
      },
      {
        title: '布局生成器',
        des: '基于 Web 的工具，允许开发人员创建和试验 CSS 布局样式。它为设计和自定义布局组件提供了一个可视化界面。',
        url: 'https://layout.bradwoods.io/'
      },
      {
        title: 'Shadows Brumm',
        des: '用于生成 CSS 框阴影效果。它提供了一个易于使用的界面，允许用户使用各种参数和选项创建复杂且视觉上吸引人的框阴影效果。',
        url: 'https://shadows.brumm.af/'
      },
      {
        title: 'Shadows Brumm',
        des: '用于生成 CSS 框阴影效果。它提供了一个易于使用的界面，允许用户使用各种参数和选项创建复杂且视觉上吸引人的框阴影效果。',
        url: 'https://shadows.brumm.af/'
      },
      {
        title: '玻璃拟态生成器',
        des: '使用透明和模糊的玻璃状背景来为用户界面创建现代、时尚的外观。',
        url: 'https://shadows.brumm.af/'
      },
      {
        title: 'Cubic-Bezier',
        des: 'Cubic-Bezier是一种基于网络的工具，允许用户创建自定义缓动曲线、动画和过渡。',
        url: 'https://cubic-bezier.com/#.17,.67,.83,.67'
      }
    ]
  },
  {
    title: 'AI 导航',
    list: [
      {
        title: 'ChatGPT（最强）',
        des: 'ChatGPT（最强）',
        url: 'https://chat.openai.com/chat'
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI（笔记）',
        des: 'Notion AI（笔记）',
        url: 'https://www.notion.so'
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney（绘画）',
        des: 'Midjourney（绘画）',
        url: 'https://www.midjourney.com'
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai（PPT）',
        des: 'Beautiful.ai（PPT）',
        url: 'https://www.beautiful.ai'
      },
      {
        title: 'copilot',
        des: '智能代码生成工具',
        url: 'https://github.com/features/copilot'
      },
      {
        title: 'ChatGPT Turbo',
        des: '免费ChatGPT',
        url: 'https://gptai.cloud/'
      }
    ]
  },
  {
    title: 'React 生态',
    list: [
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        des: '用于构建用户界面的 JavaScript 库',
        url: 'https://zh-hans.reactjs.org'
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        des: 'React 的声明式路由',
        url: 'https://reactrouter.com'
      },
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        des: '一个用于 Web 的 React 框架',
        url: 'https://nextjs.org'
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: 'UmiJS',
        des: '插件化的企业级前端应用框架',
        url: 'https://umijs.org'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        des: '一套企业级 UI 设计语言和 React 组件库',
        url: 'https://ant.design'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        title: 'Ant Design Mobile',
        des: '构建移动 WEB 应用程序的 React 组件库',
        url: 'https://mobile.ant.design'
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        des: '一个小型、快速、可扩展的 React 状态管理解决方案',
        url: 'https://docs.pmnd.rs/zustand/getting-started/introduction'
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: 'Valtio',
        des: 'makes proxy-state simple for React and Vanilla',
        url: 'https://valtio.pmnd.rs'
      },
      {
        icon: 'https://jotai.org/favicon.svg',
        title: 'Jotai',
        des: 'primitive and flexible state management for React',
        url: 'https://jotai.org'
      },
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        des: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        url: 'https://cn.redux.js.org'
      },
      {
        icon: 'https://zh.mobx.js.org/assets/mobx.png',
        title: 'MobX',
        des: '一个小型、快速、可扩展的 React 状态管理解决方案',
        url: 'https://zh.mobx.js.org'
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        des: '一套高质量可靠的 React Hooks 库',
        url: 'https://ahooks.js.org/zh-CN'
      }
    ]
  },
  {
    title: 'Vue 生态',
    list: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        des: '渐进式 JavaScript 框架',
        url: 'https://cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 2',
        des: '渐进式 JavaScript 框架',
        url: 'https://v2.cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue Router',
        des: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        url: 'https://router.vuejs.org/zh'
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        des: '符合直觉的 Vue.js 状态管理库',
        url: 'https://pinia.vuejs.org/zh'
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        des: '一个基于 Vue.js 的通用应用框架',
        url: 'https://nuxt.com'
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        des: 'Vue Composition API 的常用工具集',
        url: 'https://vueuse.org'
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        des: '基于 Vue 3，面向设计师和开发者的组件库',
        url: 'https://element-plus.org'
      },
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        des: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        url: 'https://antdv.com'
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        des: '轻量、可定制的移动端 Vue 组件库',
        url: 'https://vant-ui.github.io/vant'
      },
      {
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
        title: 'Cube UI',
        des: '基于 Vue.js 实现的精致移动端组件库',
        url: 'https://didi.github.io/cube-ui'
      },
      {
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
        title: 'NutUI',
        des: '京东风格的轻量级移动端组件库',
        url: 'https://nutui.jd.com'
      }
    ]
  },
  {
    title: 'JavaScript 框架类库',
    list: [
      {
        icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
        title: 'Svelte',
        des: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
        url: 'https://svelte.dev'
      },
      {
        icon: 'https://simpleicons.org/icons/jquery.svg',
        title: 'jQuery API 中文文档',
        des: '一个兼容多浏览器的 JavaScript 框架',
        url: 'https://jquery.cuishifeng.cn'
      }
    ]
  },
  {
    title: 'CSS 相关',
    list: [
      {
        icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
        title: 'PostCSS',
        des: '一个用 JavaScript 转换 CSS 的工具',
        url: 'https://postcss.org'
      },
      {
        icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        title: 'Sass',
        des: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        url: 'https://sass-lang.com'
      },
      {
        icon: 'https://www.tailwindcss.cn/apple-touch-icon.png',
        title: 'TailwindCSS 中文网',
        des: '一个功能类优先的 CSS 框架',
        url: 'https://www.tailwindcss.cn'
      }
    ]
  },
  {
    title: '小程序相关',
    list: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: '微信小程序文档',
        des: '微信小程序官方开发者文档',
        url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
      },
      {
        title: 'Taro',
        des: '多端统一开发解决方案',
        url: 'https://taro.jd.com'
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        des: '一个使用 Vue.js 开发所有前端应用的框架',
        url: 'https://uniapp.dcloud.net.cn'
      },
      {
        icon: 'https://mpxjs.cn/favicon.ico',
        title: 'Mpx',
        des: '增强型跨端小程序框架',
        url: 'https://mpxjs.cn'
      }
    ]
  },
  {
    title: 'Node 相关',
    list: [
      {
        icon: '/icons/nodejs.svg',
        title: 'Node.js',
        des: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        url: 'https://nodejs.org/zh-cn'
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        des: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        url: 'https://expressjs.com'
      },
      {
        icon: '/icons/koa.svg',
        title: 'Koa',
        des: '基于 Node.js 平台的下一代 web 开发框架',
        url: 'https://koajs.com'
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        des: '为企业级框架和应用而生',
        url: 'https://www.eggjs.org/zh-CN'
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        des: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        url: 'https://docs.nestjs.cn'
      }
    ]
  },
  {
    title: '可视化',
    list: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        des: '一个基于 JavaScript 的开源可视化图表库',
        url: 'https://echarts.apache.org/zh/index.html'
      },
      {
        title: 'AntV',
        des: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        url: 'https://antv.vision/zh/'
      },
      {
        icon: 'https://d3js.org/favicon.png',
        title: 'D3.js',
        des: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
        url: 'https://d3js.org'
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        des: '一个简单而灵活的 JavaScript 图表库',
        url: 'https://www.chartjs.org'
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: 'Three.js',
        des: 'JavaScript 3d 库',
        url: 'https://threejs.org'
      }
    ]
  },
  {
    title: '编译&构建&打包',
    list: [
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack 中文网',
        des: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        url: 'https://www.webpackjs.com'
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite 中文文档',
        des: '下一代前端工具链',
        url: 'https://cn.vitejs.dev'
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        des: 'Rollup 是一个 JavaScript 模块打包器',
        url: 'https://www.rollupjs.com'
      },
      {
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        title: 'Turbo',
        des: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
        url: 'https://turbo.build'
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        des: 'Babel 是一个 JavaScript 编译器',
        url: 'https://www.babeljs.cn'
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        des: 'An extremely fast bundler for the web',
        url: 'https://esbuild.github.io'
      },
      {
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        title: 'SWC',
        des: 'Rust-based platform for the Web',
        url: 'https://swc.rs'
      }
    ]
  },
  {
    title: '站点生成器',
    list: [
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        des: '一个现代化的轻量级静态站点生成器',
        url: 'https://astro.build'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        des: '由 Vite 和 Vue 驱动的静态网站生成器',
        url: 'https://vitepress.dev'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        des: 'Vue 驱动的静态网站生成器',
        url: 'https://vuepress.vuejs.org/zh'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        des: '基于 Umi 为组件研发而生的静态站点框架',
        url: 'https://d.umijs.org'
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        des: '基于 React 的静态网站生成器',
        url: 'https://docusaurus.io/zh-CN'
      }
    ]
  },
  {
    title: '图标库',
    list: [
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        des: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        url: 'https://www.iconfont.cn'
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        title: 'IconPark 图标库',
        des: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        url: 'https://iconpark.oceanengine.com/official'
      },
      {
        icon: 'https://emoji.muan.co/appicon.png',
        title: 'Emoji searcher',
        des: 'Emoji 表情大全',
        url: ''
      }
    ]
  },
  {
    title: '开发资源合集',
    list: [
      {
        title: 'Design Resources for developers',
        des: '丰富的前端开发资源：图标、字体、照片、库、框架在线攻击合集',
        url: 'https://github.com/bradtraversy/design-resources-for-developers'
      },
      {
        title: '黑客资源合集',
        des: '黑客/渗透测试资源合集',
        url: 'https://github.com/vitalysim/Awesome-Hacking-Resources'
      },
      {
        title: 'App创意合集',
        des: '一个项目列表，旨在帮助开发者解决缺乏构建项目的创意的问题。这个列表包含了一些应用程序，它们适合用来提高编码技能，尝试新的技术，增加自己的作品集，作为教程示例或者是易于扩展的项目等。每个项目都包括了明确的目标、用户故事和一些额外的特性，以及完成项目所需的资源和链接。',
        url: 'https://github.com/florinpop17/app-ideas'
      },
      {
        title: '免费的计算机编程类中文书籍',
        des: '免费的计算机编程类中文书籍',
        url: 'https://github.com/justjavac/free-programming-books-zh_CN'
      },
      {
        title: 'Javascript 测试：最佳实践',
        des: '这个存储库包含一些文本，创建并翻译成多种语言，关于 JavaScript 测试和 Node.js。该存储库涵盖了该',
        url: 'https://github.com/justjavac/free-programming-books-zh_CN'
      }
    ]
  }
]