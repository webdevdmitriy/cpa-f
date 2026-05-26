import type { ReactNode } from 'react';
import { CrossIcon } from '@/assets/icons/CrossIcon';
import { SnakeHeadIcon } from '@/assets/icons/SnakeHeadIcon';
import styles from '../ApplicationModals.module.scss';

type ApplicationCardProps = {
  children: ReactNode;
  variant?: 'form' | 'done';
};

export const ApplicationCard = ({ children, variant = 'form' }: ApplicationCardProps) => (
  <article className={styles.cardShell}>
    <div className={styles.card}>
      <button className={styles.closeButton} type="button" aria-label="Close application modal">
        <CrossIcon />
      </button>

      <SnakeHeadIcon className={styles.snakeIcon} />
      <div className={variant === 'done' ? styles.doneBody : styles.body}>{children}</div>
    </div>
  </article>
);
