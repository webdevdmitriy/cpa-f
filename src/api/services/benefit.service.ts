import { request } from '../client'
import { Benefit, Locale } from '../types'
import { endpoints } from '../endpoints'
import { benefitSchema } from '../schemas/benefit.schema'

export const benefitService = {
  async getBenefit(lang: Locale = 'en'): Promise<Benefit> {
    const data = await request<unknown>(endpoints.benefits(lang))
    return benefitSchema.parse(data)
  }
}
