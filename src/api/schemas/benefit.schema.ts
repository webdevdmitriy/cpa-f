import { z } from 'zod'

import type { Benefit } from '../types'

export const benefitSchema: z.ZodType<Benefit> = z.object({
  title: z.string(),
  description: z.string(),
  benefits: z.array(z.string())
})
