import 'server-only'

import type { HttpMethod } from './types'

export class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

const createApiUrl = (baseUrl: string, url: string) => {
  return `${baseUrl.replace(/\/+$/, '')}/${url.replace(/^\/+/, '')}`
}

const getResponseData = async <T>(response: Response): Promise<T> => {
  const text = await response.text()

  if (!text) {
    return undefined as T
  }

  const contentType = response.headers.get('content-type')

  if (contentType?.includes('application/json')) {
    return JSON.parse(text) as T
  }

  return text as T
}

const getErrorMessage = (data: unknown, fallback: string) => {
  if (typeof data === 'string' && data) {
    return data
  }

  if (data && typeof data === 'object') {
    const { error, message } = data as { error?: unknown; message?: unknown }

    if (typeof message === 'string' && message) {
      return message
    }

    if (typeof error === 'string' && error) {
      return error
    }
  }

  return fallback
}

export async function request<T>(
  url: string,
  method: HttpMethod = 'GET',
  body?: unknown
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

    const headers: HeadersInit = {
      'x-api-key': _apiKey ?? ''
    }

    if (body) {
      headers['Content-Type'] = 'application/json'
    }

    const response = await fetch(createApiUrl(_apiBase, url), {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    })

    if (!response.ok) {
      const data = await getResponseData<unknown>(response)
      throw new ApiError(
        getErrorMessage(data, `API Error: ${response.status} ${response.statusText}`),
        response.status
      )
    }

    return getResponseData<T>(response)
  } catch (err) {
    console.error('API request failed', {
      method,
      status: err instanceof ApiError ? err.status : undefined,
      url
    })
    throw err
  }
}
