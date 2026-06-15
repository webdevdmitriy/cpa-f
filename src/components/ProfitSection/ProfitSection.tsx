import styles from './ProfitSection.module.scss'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

import VolumetricButton from '../VolumetricButton/Button'
import Header from '../Header/Header'

import snake_1 from '@/assets/images/snake_1.png'
import { InstagramIcon } from '@/assets/icons/InstagramIcon'
import { TelegramIcon } from '@/assets/icons/TelegramIcon'
import { LinkedInIcon } from '@/assets/icons/LinkedInIcon'

export default function ProfitSection() {
  const t = useTranslations('ProfitSection')

  return (
    <div className={styles.profit}>
      <div className={styles.grid} aria-hidden="true"></div>
      <div className={styles.container}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.head}>
              {t('titleLine1')} <br /> {t('titleLine2')} <span>{t('titleAccent')}</span>
            </h1>
            <p className={styles.description}>
              {t('descriptionLine1')} <br /> {t('descriptionLine2')}
            </p>
            <div className={styles.btn}>
              <VolumetricButton label={t('button')} />
            </div>
          </div>
          <Image src={snake_1} alt={t('imageAlt')} className={styles.img}></Image>
        </div>
        <div className={styles.icons}>
          <Link href="#">
            <InstagramIcon />
          </Link>
          <Link href="#">
            <TelegramIcon />
          </Link>
          <Link href="#">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}
