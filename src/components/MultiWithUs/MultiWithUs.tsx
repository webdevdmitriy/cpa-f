import styles from './MultiWithUs.module.scss'

import Image from 'next/image'
import { getLocale } from 'next-intl/server'

import { PageTitle } from '../PageTitle/PageTitle'

import snake_3 from '@/assets/images/snake_3.png'

import { multiplyService } from '@/api/services/multiply.service'
import type { Locale } from '@/i18n/routing'
import type { Multiply } from '@/api/types'

import MultiWithUsTabs from './MultiWithUsTabs/MultiWithUsTabs'

export default async function MultiWithUs() {
  const locale = (await getLocale()) as Locale
  const data: Multiply[] = await multiplyService.getMultiply(locale)

  return (
    <div className={styles.multiWithUs}>
      <div className={styles.container}>
        <PageTitle className={styles.header} text="multiply with us" />
        <MultiWithUsTabs data={data} />
        <Image src={snake_3} alt="snake" className={styles.snake} />
      </div>
    </div>
  )
}
