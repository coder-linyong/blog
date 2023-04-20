import { defineConfig } from 'vitepress'
import getSidebar from './config/sidebar'
import getNav from './config/nav'

// 参考博客：https://github.com/Charles7c/charles7c.github.io

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人博客",
  description: "my blog!!!!!!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: getNav(),

    sidebar: getSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coder-linyong' }
    ]
  }
})