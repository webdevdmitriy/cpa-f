import { request } from '../client'
import type { FormRequest } from '../types'
import { endpoints } from '../endpoints'

export const formRequestService = {
  async sendFormRequest(data: FormRequest): Promise<unknown> {
    return request<unknown>(endpoints.form, 'POST', data)
  }
}
