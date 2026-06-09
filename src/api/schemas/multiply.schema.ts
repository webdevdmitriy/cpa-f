import { z } from 'zod'

import type { Multiply } from '../types'

export const multiplyStepsSchema = z.object({
  step_1: z.string(),
  step_2: z.string()
})

export const multiplySchema: z.ZodType<Multiply[]> = z.array(
  z.object({
    title: z.string(),
    steps: multiplyStepsSchema
  })
)
