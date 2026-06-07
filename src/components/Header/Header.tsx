import styles from './Header.module.scss'

import { SnakeHeadIcon } from '@/assets/icons/SnakeHeadIcon'
import cn from 'classnames'
import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'

export default function Header() {
  const locale = useLocale()
  const t = useTranslations('Header')

  return (
    <header className={styles.header}>
      <SnakeHeadIcon />
      <div className={styles.links}>
        <Link href="#">{t('team')}</Link>
        <Link href="#">{t('benefits')}</Link>
        <Link href="#">{t('joinUs')}</Link>
        <div className={styles.languages}>
          <Link
            className={cn(styles.language, { [styles.active]: locale === 'en' })}
            href="/"
            locale="en"
          >
            Eng
          </Link>
          <span className={styles.slash}>/</span>
          <Link
            className={cn(styles.language, { [styles.active]: locale === 'ru' })}
            href="/"
            locale="ru"
          >
            Рус
          </Link>
        </div>
      </div>
    </header>
  )
}
