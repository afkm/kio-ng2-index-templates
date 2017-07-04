import * as format from './format'

export type NameFormatters = keyof typeof format

export interface TemplateOptions {
  templateHtml: string
  i18n: string[]
  output: string
  format: NameFormatters
}

export interface TemplateOutput<T> {
  locale: string
  filename: string
  data: T
}

export interface TemplateOutputSource extends TemplateOutput<any> {}
export interface TemplateOutputResult extends TemplateOutput<string> {}




export interface RendererData {
  [key:string]: any
}

export interface Renderer {
  (data:RendererData,index:number):string
}