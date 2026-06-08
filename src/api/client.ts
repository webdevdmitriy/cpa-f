import type { HttpMethod } from './types'

export async function request<T>(
  url: string,
  method: HttpMethod = 'GET',
  body?: BodyInit
): Promise<T> {
  try {
    const _apiBase = process.env.API_BASE
    const _apiKey = process.env.API_KEY

    if (!_apiBase) {
      throw new Error('API_BASE is not defined in environment variables')
    }

    if (!_apiKey) {
      throw new Error('API_KEY is not defined in environment variables')
    }

    const response = await fetch(`${_apiBase}/${url}`, {
      method,
      headers: {
        'x-api-key': _apiKey ?? ''
      },
      body: JSON.stringify(body)
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
