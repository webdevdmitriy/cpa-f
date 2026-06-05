import { request } from '../client'
import { Tasks, Locale } from '../types'
import { endpoints } from '../endpoints'
import { tasksSchema } from '../schemas/tasks.schema'

export const tasksService = {
  async getTasks(lang: Locale = 'en'): Promise<Tasks> {
    const data = await request<unknown>(endpoints.tasks(lang))
    return tasksSchema.parse(data)
  }
}
