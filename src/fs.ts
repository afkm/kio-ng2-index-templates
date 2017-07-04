import * as fs from 'fs'

export function statSync ( filename:string ):fs.Stats {
  let stat:fs.Stats
  let error:Error
  try{
    stat = fs.statSync(filename)
  }catch(e){
    error = e
  }
  if ( error )
    return undefined
  return stat
}

export function fileExists ( filename:string ) {
  let stat:fs.Stats = statSync(filename)
  return stat && stat.isFile()
}

export function dirExists ( filename:string ) {
  let stat:fs.Stats = statSync(filename)
  return stat && stat.isDirectory()
}


export function readdir ( filepath:string, filter?:RegExp ) {
  if ( !dirExists(filepath) )
    return undefined
  const items = fs.readdirSync(filepath)
  if ( filter )
    return items.filter ( f => filter.test(f) )
  return items
}

export function readFile ( filename:string ):Promise<string> {
  return new Promise((resolve,reject)=>{
    fs.readFile(filename,'utf8',(error,content)=>{
      if ( error ) { reject(error) }
      else { resolve(content) }
    })
  })
}

export function writeFile ( filename:string, content:string ):Promise<string> {
  return new Promise((resolve,reject)=>{
    fs.writeFile(filename, content, 'utf8',(error)=>{
      if ( error ) { reject(error) }
      else { resolve() }
    })
  })
}