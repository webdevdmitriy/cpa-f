import { z } from 'zod'

import { FormRequest, FormResponse } from '../types'

// Использовать рядом с формами, которые отправляют данные на сервер, для валидации данных перед отправкой
export const formRequestSchema: z.ZodType<FormRequest> = z.object({
  name: z.string().optional(),
  method: z.string(),
  contact: z.string().email()
})
export type FormRequestType = z.infer<typeof formRequestSchema>

export const formResponseSchema: z.ZodType<FormResponse> = z.object({
  success: z.boolean(),
  message: z.string()
})
export type FormResponseType = z.infer<typeof formResponseSchema>
