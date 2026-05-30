import { request } from '../client'
import { Multiply } from '../types'
import { endpoints } from '../endpoints'
import type { Locale } from '../types'

export const multiplyService = {
  getMultiply(lang: Locale) {
    return request<Multiply>(endpoints.multiply(lang))
  }
}
