import type { ReactNode } from 'react'
import cn from 'classnames'
import { CrossIcon } from '@/assets/icons/CrossIcon'
import { SnakeHeadIcon } from '@/assets/icons/SnakeHeadIcon'
import styles from '../ApplicationModals.module.scss'

type ApplicationCardProps = {
  children: ReactNode
  variant?: 'form' | 'done'
}

export const ApplicationCard = ({ children, variant = 'form' }: ApplicationCardProps) => (
  <article className={styles.cardShell}>
    <div className={styles.card}>
      <button className={styles.closeButton} type="button" aria-label="Close application modal">
        <CrossIcon />
      </button>

      <SnakeHeadIcon className={styles.snakeIcon} />
      <div
        className={cn({ [styles.doneBody]: variant === 'done', [styles.body]: variant !== 'done' })}
      >
        {children}
      </div>
    </div>
  </article>
)
