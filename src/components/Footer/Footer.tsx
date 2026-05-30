import { ComponentProps } from 'react'
import styles from './Footer.module.scss'
import { ArrowIcon } from '@/assets/icons/ArrowIcon'

export const Footer = (props: ComponentProps<'footer'>) => {
  return (
    <footer className={styles.footer}>
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
          SCROLL TO TOP
        </a>
        <ArrowIcon className={styles.arrow_top} />
      </div>
    </footer>
  )
}
