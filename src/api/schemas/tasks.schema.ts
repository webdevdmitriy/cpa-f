import { z } from 'zod'

import type { Tasks } from '../types'

export const tasksSchema: z.ZodType<Tasks> = z.object({
  description: z.string(),
  tiles: z.array(z.object({ title: z.string(), text: z.string() }))
})
