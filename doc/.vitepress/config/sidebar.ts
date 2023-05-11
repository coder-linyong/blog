import * as fs from 'fs'
import { DefaultTheme } from 'vitepress/types/default-theme'
import { getAbsolutePath, getFileName } from './util'

// 根据doc目录下的文件夹目录深度获取侧边栏配置
function getSidebarDeep (pathStr:string) {
  const config=[]
  fs.readdirSync(getAbsolutePath(pathStr)).forEach((value,index)=>{
    const relativePath=`${pathStr}/${value}`

    const absolutePath=getAbsolutePath(relativePath)
    const stat=fs.statSync(absolutePath)
    if (stat.isFile()) {
      const name=getFileName(absolutePath)
      config.push({ text: name, link: `${pathStr}/${name}` })
    }
    if (stat.isDirectory()) {
      config.push({
        text:value,
        items:getSidebarDeep(`${relativePath}/`),
        collapsed:true
      })
    }
  })
  return config
}

export default function getSidebar(pathStr='/'):DefaultTheme.Sidebar {
  const excludePaths=[
    '/.vitepress',
    '/index.md',
  ]
  const config={}

  fs.readdirSync(getAbsolutePath(pathStr)).forEach((value,index)=>{
    const relativePath=`${pathStr}${value}`

    if (excludePaths.includes(relativePath) || fs.statSync(getAbsolutePath(relativePath)).isFile()) {
      return
    }
    config[relativePath]=getSidebarDeep(`${relativePath}`)
  })

  return config
}