import styles from './header.module.scss'

import Link from 'next/link'

import { SnakeHeadIcon } from '@/assets/icons/SnakeHeadIcon'

export default function Header() {
  return (
    <nav className={styles.header}>
      <SnakeHeadIcon className={styles.icon} />
      <div className={styles.links}>
        <Link href="#">Team</Link>
        <Link href="#">Benefits</Link>
        <Link href="#">Join Us</Link>
        <div className={styles.languages}>
          <span className={`${styles.lang} ${styles.active}`}>Eng</span>/
          <span className={styles.lang}>Рус</span>
        </div>
      </div>
    </nav>
  )
}
