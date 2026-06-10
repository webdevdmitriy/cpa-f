import type { ReactNode } from 'react'
import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { CrossIcon } from '@/assets/icons/CrossIcon'
import { SnakeHeadIcon } from '@/assets/icons/SnakeHeadIcon'
import styles from '../ApplicationModals.module.scss'

type ApplicationCardProps = {
  children: ReactNode
  onClose?: () => void
  variant?: 'form' | 'done'
}

export const ApplicationCard = ({ children, onClose, variant = 'form' }: ApplicationCardProps) => {
  const t = useTranslations('ApplicationModal')

  return (
    <article className={styles.cardShell}>
      <div className={styles.card}>
        <button
          className={styles.closeButton}
          type="button"
          aria-label={t('closeLabel')}
          onClick={onClose}
        >
          <CrossIcon />
        </button>

        <SnakeHeadIcon className={styles.snakeIcon} />
        <div
          className={cn({
            [styles.doneBody]: variant === 'done',
            [styles.body]: variant !== 'done'
          })}
        >
          {children}
        </div>
      </div>
    </article>
  )
}
