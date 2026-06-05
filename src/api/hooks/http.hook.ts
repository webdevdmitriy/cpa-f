// import { useState, useCallback } from 'react'
// import { request } from '../client'
// import type { HttpMethod } from '../types'

// const useHttp = <T>() => {
//   const [data, setData] = useState<T | null>(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<Error | null>(null)

//   const execute = useCallback(async (url: string, method?: HttpMethod, body?: BodyInit) => {
//     setLoading(true)
//     setError(null)

//     try {
//       const result = await request<T>(url, method, body)
//       setData(result)
//       return result
//     } catch (err) {
//       setError(err as Error)
//       throw err
//     } finally {
//       setLoading(false)
//     }
//   }, [])

//   return { data, error, loading, execute }
// }
