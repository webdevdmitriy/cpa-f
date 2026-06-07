import Image from 'next/image'
import { SnakeHeadIcon } from '@/assets/icons/SnakeHeadIcon'
import snakeImage from '@/assets/images/snake_4.png'
import { SectionLabel } from '@/components/SectionLabel'
import { BenefitCard } from './BenefitCard'
import styles from './MultiBenefits.module.scss'

const benefits = [
  'We take on outsourced projects across any niche — from iGaming and dating to e-commerce and recruitment',
  'We deliver what has already proven effective — many times over',
  'We don’t learn at the client’s expense'
] as const

const marqueeRepeats = 8

export function MultiBenefits() {
  return (
    <section className={styles.section} aria-labelledby="multi-benefits-title">
      <div className={styles.container}>
        <div className={styles.grid} aria-hidden="true" />
        <SectionLabel id="multi-benefits-title">Multi-benefits</SectionLabel>

        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Results can only be <span>guaranteed</span> when you control every step
          </h2>
          <p className={styles.description}>
            That’s why we built a full-time in-house team and custom infrastructure — tailored for
            every task, tested daily in the sweepstakes vertical
          </p>
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
            <BenefitCard key={benefit}>{benefit}</BenefitCard>
          ))}
        </ul>
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {Array.from({ length: marqueeRepeats }, (_, index) => (
            <span className={styles.marqueeItem} key={index}>
              Dream big earn bigger!
              <SnakeHeadIcon className={styles.marqueeIcon} />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
