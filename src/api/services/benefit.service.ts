import { request } from '../client'
import type { Benefit } from '../types'
import type { Locale } from '@/i18n/routing'
import { endpoints } from '../endpoints'
import { benefitSchema } from '../schemas/benefit.schema'

export const benefitService = {
  async getBenefit(lang: Locale): Promise<Benefit> {
    const data = await request<unknown>(endpoints.benefits(lang))
    return benefitSchema.parse(data)
  }
}
