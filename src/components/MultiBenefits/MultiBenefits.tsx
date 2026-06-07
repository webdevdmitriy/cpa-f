import Image from 'next/image'
import { SnakeHeadIcon } from '@/assets/icons/SnakeHeadIcon'
import snakeImage from '@/assets/images/snake_4.png'
import { SectionLabel } from '@/components/SectionLabel'
import { useTranslations } from 'next-intl'
import { BenefitCard } from './BenefitCard'
import styles from './multiBenefits.module.scss'

const benefits = ['first', 'second', 'third'] as const

const marqueeRepeats = 8

export function MultiBenefits() {
  const t = useTranslations('MultiBenefits')

  return (
    <section className={styles.section} aria-labelledby="multi-benefits-title">
      <div className={styles.container}>
        <div className={styles.grid} aria-hidden="true" />
        <SectionLabel id="multi-benefits-title">{t('label')}</SectionLabel>

        <div className={styles.textContent}>
          <h2 className={styles.title}>
            {t('titleStart')} <span>{t('titleAccent')}</span> {t('titleEnd')}
          </h2>
          <p className={styles.description}>{t('description')}</p>
        </div>

        <Image
          className={styles.snake}
          src={snakeImage}
          alt=""
          width={332}
          height={332}
          aria-hidden="true"
        />

        <ul className={styles.list}>
          {benefits.map(benefit => (
            <BenefitCard key={benefit}>{t(`benefits.${benefit}`)}</BenefitCard>
          ))}
        </ul>
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {Array.from({ length: marqueeRepeats }, (_, index) => (
            <span className={styles.marqueeItem} key={index}>
              {t('marquee')}
              <SnakeHeadIcon className={styles.marqueeIcon} />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
