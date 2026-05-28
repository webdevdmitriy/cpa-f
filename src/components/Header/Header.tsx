import styles from './Header.module.scss'

import Link from 'next/link'
import cn from 'classnames'

import { SnakeHeadIcon } from '@/assets/icons/SnakeHeadIcon'

export default function Header() {
  return (
    <header className={styles.header}>
      <SnakeHeadIcon />
      <div className={styles.links}>
        <Link href="#">Team</Link>
        <Link href="#">Benefits</Link>
        <Link href="#">Join Us</Link>
        <div className={styles.languages}>
          <span className={cn(styles.lang, styles.active)}>Eng</span>
          <span className={styles.slash}>/</span>
          <span className={styles.lang}>Рус</span>
        </div>
      </div>
    </header>
  )
}
