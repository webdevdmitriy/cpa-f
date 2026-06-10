import { z } from 'zod'

import { FormRequest, FormResponse } from '../types'
import { NAME_PATTERN, PHONE_PATTERN, TELEGRAM_PATTERN } from './form.constants'

const nameSchema = z.string().trim().min(2).max(80).regex(NAME_PATTERN)
const methodSchema = z.enum(['telegram', 'email', 'phone'])
const contactBaseSchema = z.string().trim().min(5).max(80)

const contactValidators = {
  email: (contact: string) => z.email().safeParse(contact).success,
  phone: (contact: string) => PHONE_PATTERN.test(contact),
  telegram: (contact: string) => TELEGRAM_PATTERN.test(contact)
} satisfies Record<z.infer<typeof methodSchema>, (contact: string) => boolean>

const contactErrorMessages = {
  email: 'Invalid email',
  phone: 'Invalid phone number',
  telegram: 'Invalid Telegram username'
} satisfies Record<z.infer<typeof methodSchema>, string>

// Использовать рядом с формами, которые отправляют данные на сервер, для валидации данных перед отправкой
export const formRequestSchema: z.ZodType<FormRequest> = z
  .object({
    name: nameSchema,
    method: methodSchema,
    contact: contactBaseSchema
  })
  .superRefine(({ contact, method }, ctx) => {
    if (!contactValidators[method](contact)) {
      ctx.addIssue({
        code: 'custom',
        message: contactErrorMessages[method],
        path: ['contact']
      })
    }
  })

export const formResponseSchema: z.ZodType<FormResponse> = z.object({
  message: z.string(),
  data: formRequestSchema
})
