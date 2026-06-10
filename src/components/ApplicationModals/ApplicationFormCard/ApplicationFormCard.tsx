import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { NAME_PATTERN_ATTRIBUTE } from '@/api/schemas/form.constants'
import { ApplicationCard } from '../ApplicationCard'
import {
  contactValidation,
  formatName,
  formatPhone,
  formatTelegram,
  type ContactMethodValue
} from './ApplicationFormCard.utils'
import styles from '../ApplicationModals.module.scss'

type ApplicationFormCardProps = {
  onClose?: () => void
  onSuccess?: () => void
}

export const ApplicationFormCard = ({ onClose, onSuccess }: ApplicationFormCardProps) => {
  const [contactMethod, setContactMethod] = useState<ContactMethodValue>('')
  const [contactValue, setContactValue] = useState('')
  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState(false)
  const isMountedRef = useRef(true)
  const t = useTranslations('ApplicationModal.form')
  const contactAttributes = contactValidation[contactMethod]
  const contactTitles: Record<ContactMethodValue, string | undefined> = {
    '': undefined,
    email: undefined,
    phone: t('phonePattern'),
    telegram: t('telegramPattern')
  }
  const contactPlaceholders: Record<ContactMethodValue, string> = {
    '': ' ',
    email: `${t('email')}*`,
    phone: `${t('phone')}*`,
    telegram: `${t('telegram')}*`
  }

  useEffect(() => {
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const handleNameInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget
    const valueWithoutDigits = formatName(input.value)

    if (input.value !== valueWithoutDigits) {
      input.value = valueWithoutDigits
    }
  }

  const handleContactChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget

    if (contactMethod === 'phone') {
      setContactValue(formatPhone(value))
      return
    }

    if (contactMethod === 'telegram') {
      setContactValue(formatTelegram(value))
      return
    }

    setContactValue(value)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setIsPending(true)

    const formData = new FormData(event.currentTarget)

    try {
      if (!contactMethod) {
        throw new Error(t('submitError'))
      }

      const response = await fetch('/api/application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contact: String(formData.get('contact') ?? '').trim(),
          method: contactMethod,
          name: String(formData.get('name') ?? '').trim()
        })
      })

      if (!response.ok) {
        throw new Error(response.status === 429 ? t('tooManyRequests') : t('submitError'))
      }

      onSuccess?.()
    } catch (error) {
      if (isMountedRef.current) {
        setError(error instanceof Error ? error.message : t('submitError'))
      }
    } finally {
      if (isMountedRef.current) {
        setIsPending(false)
      }
    }
  }

  return (
    <ApplicationCard onClose={onClose}>
      <form className={styles.formContent} onSubmit={handleSubmit}>
        <p className={styles.note}>
          {t('noteBefore')} <span>(*)</span> {t('noteAfter')}
        </p>

        <div className={styles.fields}>
          <label className={styles.field}>
            <span className={styles.srOnly}>{t('name')}</span>
            <input
              type="text"
              name="name"
              placeholder={`${t('name')}*`}
              required
              minLength={2}
              maxLength={80}
              pattern={NAME_PATTERN_ATTRIBUTE}
              title={t('namePattern')}
              autoComplete="name"
              onInput={handleNameInput}
            />
          </label>

          <label className={styles.selectField}>
            <span className={styles.srOnly}>{t('contactMethod')}</span>
            <select
              name="method"
              required
              value={contactMethod}
              onChange={event => {
                setContactMethod(event.target.value as ContactMethodValue)
                setContactValue('')
              }}
            >
              <option value="" disabled hidden>
                {t('contactMethod')}
              </option>
              <option value="telegram">Telegram</option>
              <option value="email">Email</option>
              <option value="phone">{t('phone')}</option>
            </select>
            {!contactMethod && (
              <span className={styles.fieldText} aria-hidden="true">
                {t('contactMethod')}
                <span>*</span>
              </span>
            )}
          </label>

          <label className={styles.contactField}>
            <span className={styles.srOnly}>{t('contact')}</span>
            <input
              type={contactAttributes.type}
              name="contact"
              value={contactValue}
              placeholder={contactPlaceholders[contactMethod]}
              required
              minLength={5}
              maxLength={80}
              pattern={contactAttributes.pattern}
              title={contactTitles[contactMethod]}
              inputMode={contactAttributes.inputMode}
              disabled={!contactMethod}
              autoComplete={
                contactMethod === 'email' ? 'email' : contactMethod === 'phone' ? 'tel' : 'off'
              }
              aria-label={t('contact')}
              onChange={handleContactChange}
            />
            {!contactMethod && (
              <span className={styles.fieldText} aria-hidden="true">
                {t('contact')}
                <span>*</span>
              </span>
            )}
          </label>
        </div>

        {error && <p className={styles.formError}>{error}</p>}

        <button
          className={cn(styles.primaryButton, styles.submitButton)}
          type="submit"
          disabled={isPending}
        >
          {isPending ? t('submitting') : t('submit')}
        </button>
      </form>
    </ApplicationCard>
  )
}
