import styles from './Header.module.scss'

import { SnakeHeadIcon } from '@/assets/icons/SnakeHeadIcon'
import cn from 'classnames'

import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <SnakeHeadIcon />
      <div className={styles.links}>
        <Link href="#">Team</Link>
        <Link href="#">Benefits</Link>
        <Link href="#">Join Us</Link>
        <div className={styles.languages}>
          <span className={cn(styles.language, styles.active)}>Eng</span>
          <span className={styles.slash}>/</span>
          <span className={styles.language}>Рус</span>
        </div>
      </div>
    </header>
  )
}
