import type { Locale } from '@/i18n/routing'

export const endpoints = {
  benefits: (lang: Locale) => `${lang}/benefits`,
  form: '/form',
  multiply: (lang: Locale) => `${lang}/multiply`,
  tasks: (lang: Locale) => `${lang}/tasks`
}
