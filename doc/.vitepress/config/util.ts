import * as path from 'path'

const rootPath=path.resolve('')
const docPath='doc'

export const getAbsolutePath=(relativePath:string)=>path.join(rootPath,docPath,relativePath)

export const getFileName=(absolutePath:string)=>path.basename(absolutePath,path.extname(absolutePath))