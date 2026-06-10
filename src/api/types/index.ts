export type HttpMethod = 'GET' | 'POST'

export type ContactMethod = 'telegram' | 'email' | 'phone'

export interface Benefit {
  title: string
  description: string
  benefits: string[]
}

export interface FormRequest {
  name: string
  method: ContactMethod
  contact: string
}

export interface FormResponse {
  message: string
  data: FormRequest
}

export interface TasksTile {
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
  title: string
  steps: MultiplyStep
}
