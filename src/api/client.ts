import type { HttpMethod } from './types'

const MAIN_URL = process.env.MAIN_URL

export async function request<T>(
  url: string,
  method: HttpMethod = 'GET',
  body?: BodyInit
): Promise<T> {
  try {
    console.log(process.env.MAIN_URL)
    // console.log(process.env.API_KEY);
    console.log(`${MAIN_URL}/${url}`)

    const response = await fetch(`${MAIN_URL}/${url}`, {
      method,
      headers: { 'x-api-key': process.env.API_KEY ?? '' },
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
