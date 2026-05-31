import { request } from '../client'
import { Tasks } from '../types'
import { endpoints } from '../endpoints'
import type { Locale } from '../types'

export const tasksService = {
  getTasks(lang: Locale) {
    return request<Tasks>(endpoints.tasks(lang), 'GET')
  }
}
