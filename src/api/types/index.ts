export type Locale = 'en' | 'ru' | 'ua'
export type MultiplyTitle = 'for_media_buyers' | 'for_businesses' | 'for_partners'
export type HttpMethod = 'GET' | 'POST'

export interface Benefit {
  title: string
  description: string
  benefits: string[]
}

export interface FormRequest {
  name?: string
  method: string
  contact: string
}

export interface TasksTile {
  id: number
  title: string
  text: string
}

export interface Tasks {
  description: string
  tiles: TasksTile[]
}

export interface MultiplyStep {
  step_1: string
  step_2: string
}

export interface Multiply {
  title: MultiplyTitle
  steps: MultiplyStep
}
