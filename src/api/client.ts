import type { HttpMethod } from './types'

export async function request<T>(
  url: string,
  method: HttpMethod = 'GET',
  body?: BodyInit
): Promise<T> {
  console.log('Запрос данных...')

  try {
    const response = await fetch(`${process.env.MAIN_URL}/${url}`, {
      method,
      headers: {
        'x-api-key': process.env.API_KEY ?? ''
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (err) {
    throw err
  }
}
