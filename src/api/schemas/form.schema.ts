import { z } from 'zod'

import type { FormRequest } from '../types'

export const formRequestSchema: z.ZodType<FormRequest> = z.object({
  name: z.string(),
  method: z.string(),
  contact: z.string().email()
})
