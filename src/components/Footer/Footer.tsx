import { ComponentProps } from 'react'
import styles from './Footer.module.scss'
import { ArrowIcon } from '@/assets/icons/ArrowIcon'
import { useTranslations } from 'next-intl'

export const Footer = (props: ComponentProps<'footer'>) => {
  const t = useTranslations('Footer')

  return (
    <footer className={styles.footer} {...props}>
      <a className={styles.link} href="#">
        INSTAGRAM
      </a>
      <a className={styles.link} href="#">
        TELEGRAM
      </a>
      <a className={styles.link} href="#">
        LINKEDIN
      </a>
      <div className={styles.scroll_top_wrapper}>
        <a className={styles.link} href="#">
          {t('scrollTop')}
        </a>
        <ArrowIcon className={styles.arrow_top} />
      </div>
    </footer>
  )
}
