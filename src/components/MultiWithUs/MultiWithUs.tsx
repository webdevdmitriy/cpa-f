import styles from './MultiWithUs.module.scss'

import Image from 'next/image'
import { getLocale } from 'next-intl/server'
import cn from 'classnames'

import { PageTitle } from '../PageTitle/PageTitle'
import { Footer } from '../Footer/Footer'
import VolumetricButton from '../VolumetricButton/Button'
import { ArrowIcon } from '@/assets/icons/ArrowIcon'

import snake_3 from '@/assets/images/snake_3.png'

import { multiplyService } from '@/api/services/multiply.service'
import type { Locale } from '@/i18n/routing'
import type { Multiply } from '@/api/types'

export default async function MultiWithUs() {
  const locale = (await getLocale()) as Locale
  const data: Multiply[] = await multiplyService.getMultiply(locale)

  const titles = data.map(item => item.title)
  const steps = data.map(item => item.steps)

  return (
    <div className={styles.multiWithUs}>
      <div className={styles.container}>
        <PageTitle className={styles.header} text="multiply with us" />
        <div className={styles.tabs}>
          <div className={styles.tabsBtns}>
            {titles.map((title, id) => (
              <div key={id} className={styles.tabBtn}>
                {title
                  .split('_')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
                <ArrowIcon />
              </div>
            ))}
          </div>
          <div className="tabsContent">
            {steps.map((step, id) => (
              <div key={id} className={cn(styles.tabContent, styles.tabActive)}>
                <p>{step.step_1}</p>
                <ArrowIcon className={styles.arrow} />
                <p>{step.step_2}</p>
                <ArrowIcon className={styles.arrow} />
                <div className={styles.btn}>
                  <VolumetricButton label="partner up" />
                </div>
              </div>
            ))}
            <Footer />
          </div>
        </div>

        <Image src={snake_3} alt="snake" className={styles.snake} />
      </div>
    </div>
  )
}
