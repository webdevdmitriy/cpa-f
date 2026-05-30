import type { HttpMethod } from './types'

export async function request<T>(url: string, method?: HttpMethod, body?: BodyInit): Promise<T> {
  try {
    const response = await fetch(url, {
      method,
      headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '' },
      body
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
