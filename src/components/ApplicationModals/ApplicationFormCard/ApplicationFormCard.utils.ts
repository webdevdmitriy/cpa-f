import type { ContactMethod } from '@/api/types'
import {
  NAME_PATTERN,
  PHONE_PATTERN_ATTRIBUTE,
  TELEGRAM_PATTERN_ATTRIBUTE
} from '@/api/schemas/form.constants'

type ContactMethodValue = ContactMethod | ''

export const contactValidation: Record<
  ContactMethodValue,
  {
    inputMode?: 'email' | 'tel' | 'text'
    pattern?: string
    type: 'email' | 'tel' | 'text'
  }
> = {
  '': {
    type: 'text'
  },
  telegram: {
    inputMode: 'text',
    pattern: TELEGRAM_PATTERN_ATTRIBUTE,
    type: 'text'
  },
  email: {
    inputMode: 'email',
    type: 'email'
  },
  phone: {
    inputMode: 'tel',
    pattern: PHONE_PATTERN_ATTRIBUTE,
    type: 'tel'
  }
}

export const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 15)

  if (!digits) {
    return ''
  }

  return `+${digits}`
}

export const formatTelegram = (value: string) => {
  const username = value
    .replace(/@/g, '')
    .replace(/[^A-Za-z0-9_]/g, '')
    .slice(0, 32)

  return username ? `@${username}` : ''
}

export const formatName = (value: string) => {
  return Array.from(value)
    .filter(char => NAME_PATTERN.test(char))
    .join('')
}

export type { ContactMethodValue }
