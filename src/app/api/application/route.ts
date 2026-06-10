import { NextResponse } from 'next/server'

import { ApiError } from '@/api/client'
import { formRequestSchema } from '@/api/schemas/form.schema'
import { formRequestService } from '@/api/services/form.service'

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 5

const requestBuckets = new Map<string, { count: number; resetAt: number }>()

const getClientId = (request: Request) => {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
}

const pruneExpiredBuckets = (now: number) => {
  requestBuckets.forEach((bucket, clientId) => {
    if (bucket.resetAt <= now) {
      requestBuckets.delete(clientId)
    }
  })
}

const isRateLimited = (clientId: string) => {
  const now = Date.now()

  pruneExpiredBuckets(now)

  const bucket = requestBuckets.get(clientId)

  if (!bucket || bucket.resetAt <= now) {
    requestBuckets.set(clientId, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS
    })

    return false
  }

  bucket.count += 1

  return bucket.count > RATE_LIMIT_MAX_REQUESTS
}

export async function POST(request: Request) {
  try {
    if (isRateLimited(getClientId(request))) {
      return NextResponse.json({ message: 'Too many requests' }, { status: 429 })
    }

    let requestBody: unknown

    try {
      requestBody = await request.json()
    } catch {
      return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 })
    }

    const payload = formRequestSchema.safeParse(requestBody)

    if (!payload.success) {
      return NextResponse.json({ message: 'Invalid form data' }, { status: 400 })
    }

    await formRequestService.sendFormRequest(payload.data)

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json({ message: error.message }, { status: error.status })
    }

    return NextResponse.json({ message: 'Failed to submit application' }, { status: 500 })
  }
}
