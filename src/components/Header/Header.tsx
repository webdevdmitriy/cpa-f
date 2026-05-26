import styles from './header.module.scss'

import { SnakeHeadIcon } from '@/assets/icons/SnakeHeadIcon'

import Link from 'next/link'

export default function Header() {
  return (
    <nav className={styles.header}>
      <SnakeHeadIcon className={styles.icon} />
      <div className={styles.links}>
        <Link href="#">Team</Link>
        <Link href="#">Benefits</Link>
        <Link href="#">Join Us</Link>
        <div className={styles.languages}>
          <span className={`${styles.language} ${styles.active}`}>Eng</span>/
          <span className={styles.language}>Рус</span>
        </div>
      </div>
    </nav>
  )
}
