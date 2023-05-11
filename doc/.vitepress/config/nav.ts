import { DefaultTheme } from 'vitepress/types/default-theme'
import * as fs from 'fs'
import { getAbsolutePath } from './util'


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