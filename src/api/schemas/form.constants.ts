export const NAME_PATTERN = /^[A-Za-zА-Яа-яЁё\s'-]+$/
export const NAME_PATTERN_ATTRIBUTE = "[A-Za-zА-Яа-яЁё\\s'-]{2,80}"

export const PHONE_PATTERN = /^\+[0-9]{7,15}$/
export const PHONE_PATTERN_ATTRIBUTE = '\\+[0-9]{7,15}'

export const TELEGRAM_PATTERN = /^@?[A-Za-z0-9_]{5,32}$/
export const TELEGRAM_PATTERN_ATTRIBUTE = '@?[A-Za-z0-9_]{5,32}'
