import { Locale } from './types'

export const endpoints = {
  benefits: (lang: Locale = 'en') => `${lang}/benefits`,
  multiply: (lang: Locale = 'en') => `${lang}/multiply`,
  tasks: (lang: Locale = 'en') => `${lang}/tasks`,
  form: '/form'
}
