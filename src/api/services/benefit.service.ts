import { request } from '../client'
import { Benefit } from '../types'
import { endpoints } from '../endpoints'
import type { Locale } from '../types'

export const benefitService = {
  getBenefit(lang: Locale) {
    return request<Benefit[]>(endpoints.benefits(lang))
  }
}
