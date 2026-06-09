'use client'

import styles from './MultiWithUsTabs.module.scss'
import { useState } from 'react'
import cn from 'classnames'

import { Footer } from '../../Footer/Footer'
import VolumetricButton from '../../VolumetricButton/Button'
import { ArrowIcon } from '@/assets/icons/ArrowIcon'

import type { Multiply } from '@/api/types'

type MultiWithUsTabsProps = {
  data: Multiply[]
}

export default function MultiWithUsTabs({ data }: MultiWithUsTabsProps) {
  const [tabIndex, setTabIndex] = useState(0)

  const titles = data.map(item => item.title)
  const steps = data.map(item => item.steps)

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsBtns}>
        {titles.map((title, id) => (
          <div
            key={id}
            className={cn(styles.tabBtn, {
              [styles.tabBtnActive]: tabIndex === id
            })}
            onClick={() => setTabIndex(id)}
          >
            {title
              .split('_')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
            <ArrowIcon />
          </div>
        ))}
      </div>
      <div>
        <div className={styles.tabContent}>
          <p>{steps[tabIndex].step_1}</p>
          <ArrowIcon className={styles.arrow} />
          <p>{steps[tabIndex].step_2}</p>
          <ArrowIcon className={styles.arrow} />
          <div className={styles.btn}>
            <VolumetricButton label="partner up" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
