import { request } from '../client'
import { Tasks } from '../types'
import type { Locale } from '@/i18n/routing'
import { endpoints } from '../endpoints'
import { tasksSchema } from '../schemas/tasks.schema'

export const tasksService = {
  async getTasks(lang: Locale): Promise<Tasks> {
    const data = await request<unknown>(endpoints.tasks(lang))
    return tasksSchema.parse(data)
  }
}
