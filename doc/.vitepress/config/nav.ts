import { DefaultTheme } from 'vitepress/types/default-theme'
import * as fs from 'fs'
import { getAbsolutePath } from './util'

// 获取头部nav，取doc目录下一级目录作为nav配置，如/js使用的是doc/js/index.md文件，
export default function getNav(pathStr='/'):DefaultTheme.NavItem[] {
  const excludePaths=[
    '/.vitepress',
    '/index.md',
  ]
  const config=[]

  fs.readdirSync(getAbsolutePath(pathStr)).forEach((value)=>{
    const relativePath=`${pathStr}${value}`

    if (excludePaths.includes(relativePath) || fs.statSync(getAbsolutePath(relativePath)).isFile()) {
      return
    }
    config.push({ text: value, link: `${relativePath}/` },)
  })

  return config
}