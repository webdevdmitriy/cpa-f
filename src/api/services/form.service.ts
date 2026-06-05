import { request } from '../client'
import { FormResponse } from '../types'
import { endpoints } from '../endpoints'
import { formResponseSchema } from '../schemas/form.schema'

export const formRequestService = {
  async getFormRequest(data: FormData): Promise<FormResponse> {
    const response = await request<unknown>(endpoints.form, 'POST', data)
    return formResponseSchema.parse(response)
  }
}
