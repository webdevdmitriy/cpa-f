import { request } from '../client'
import { FormRequest } from '../types'
import { endpoints } from '../endpoints'

export const formRequestService = {
  getFormRequest(data: FormData) {
    return request<FormRequest>(endpoints.form, 'POST', data)
  }
}
