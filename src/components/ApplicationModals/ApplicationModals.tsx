'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from 'react'
import { useTranslations } from 'next-intl'
import { ApplicationFormCard } from './ApplicationFormCard'
import { ApplicationSuccessCard } from './ApplicationSuccessCard'
import { useBodyScrollLock } from './useBodyScrollLock'
import styles from './ApplicationModals.module.scss'

type ApplicationModalContextValue = {
  openApplicationForm: () => void
}

const ApplicationModalContext = createContext<ApplicationModalContextValue | null>(null)

type ApplicationModalsProps = {
  children?: ReactNode
}

export const useApplicationModal = () => {
  const context = useContext(ApplicationModalContext)

  if (!context) {
    throw new Error('useApplicationModal must be used within ApplicationModals')
  }

  return context
}

export const ApplicationModals = ({ children }: ApplicationModalsProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const t = useTranslations('ApplicationModal')

  const openApplicationForm = useCallback(() => {
    setIsSubmitted(false)
    setIsVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    dialogRef.current?.close()
    setIsVisible(false)
  }, [])

  const contextValue = useMemo(() => ({ openApplicationForm }), [openApplicationForm])

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog || !isVisible) {
      return
    }

    if (!dialog.open) {
      dialog.showModal()
    }

    const handleCancel = () => {
      setIsVisible(false)
    }

    dialog.addEventListener('cancel', handleCancel)

    return () => {
      dialog.removeEventListener('cancel', handleCancel)
    }
  }, [isVisible])

  useBodyScrollLock(isVisible)

  if (!isVisible) {
    return (
      <ApplicationModalContext.Provider value={contextValue}>
        {children}
      </ApplicationModalContext.Provider>
    )
  }

  return (
    <ApplicationModalContext.Provider value={contextValue}>
      {children}
      <dialog
        ref={dialogRef}
        className={styles.modal}
        aria-label={t('statesLabel')}
        onClick={event => {
          if (event.target === event.currentTarget) {
            closeModal()
          }
        }}
        onClose={() => setIsVisible(false)}
      >
        <div className={styles.showcase} onClick={event => event.stopPropagation()}>
          {isSubmitted ? (
            <ApplicationSuccessCard onClose={closeModal} />
          ) : (
            <ApplicationFormCard onClose={closeModal} onSuccess={() => setIsSubmitted(true)} />
          )}
        </div>
      </dialog>
    </ApplicationModalContext.Provider>
  )
}
