import { z } from 'zod'

import type { Tasks } from '../types'

export const tasksSchema: z.ZodType<Tasks> = z.object({
  description: z.string(),
  tiles: z.array(z.object({ id: z.number(), title: z.string(), text: z.string() }))
})
