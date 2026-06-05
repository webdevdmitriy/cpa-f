import { request } from '../client'
import { Multiply, Locale } from '../types'
import { endpoints } from '../endpoints'
import { multiplySchema } from '../schemas/multiply.schema'

export const multiplyService = {
  async getMultiply(lang: Locale = 'en'): Promise<Multiply> {
    const data = await request<unknown>(endpoints.multiply(lang))
    return multiplySchema.parse(data)
  }
}
