import { request } from '../client'
import type { Multiply } from '../types'
import type { Locale } from '@/i18n/routing'
import { endpoints } from '../endpoints'
import { multiplySchema } from '../schemas/multiply.schema'

export const multiplyService = {
  async getMultiply(lang: Locale): Promise<Multiply[]> {
    const data = await request<unknown>(endpoints.multiply(lang))
    return multiplySchema.parse(data)
  }
}
