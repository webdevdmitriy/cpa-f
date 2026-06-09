import styles from './MultiWithUs.module.scss'

import Image from 'next/image'

import { PageTitle } from '../PageTitle/PageTitle'
import VolumetricButton from '../VolumetricButton/Button'
import { ArrowIcon } from '@/assets/icons/ArrowIcon'

import snake_3 from '@/assets/images/snake_3.png'

import cn from 'classnames'
import { Footer } from '../Footer/Footer'

export default function MultiWithUs() {
  return (
    <div className={styles.multiWithUs}>
      <div className={styles.container}>
        <PageTitle className={styles.header} text="multiply with us" />
        <div className={styles.tabs}>
          <div className={styles.tabsBtns}>
            <div className={cn(styles.tabBtn, styles.btnActive)}>
              For Media Buyers
              <ArrowIcon />
            </div>
            <div className={styles.tabBtn}>
              For Businesses
              <ArrowIcon />
            </div>
            <div className={styles.tabBtn}>
              For Partners
              <ArrowIcon />
            </div>
          </div>
          <div className="tabsContent">
            <div className={cn(styles.tabContent, styles.tabActive)}>
              <p>
                Got experience with sweepstakes and large ad budgets? Looking for a team where you
                can grow and scale without limits?
              </p>
              <ArrowIcon className={styles.arrow} />
              <p>
                Multiply your profits with MULTICPA — we provide the budget, all the tools and high
                profit shares
              </p>
              <ArrowIcon className={styles.arrow} />
              <div className={styles.btn}>
                <VolumetricButton label="Join the team" />
              </div>
            </div>

            <div className={styles.tabContent}>
              <p>
                Experienced solo buyer or running a whole team? Need a reliable partner program with
                fast onboarding in sweepstakes and full support?
              </p>
              <ArrowIcon className={styles.arrow} />
              <p>
                Work with MULTICPA — you run the traffic, we handle everything else. From
                infrastructure and tech support to funnels, creatives, and expert guidance
              </p>
              <ArrowIcon className={styles.arrow} />
              <div className={styles.btn}>
                <VolumetricButton label="partner up" />
              </div>
            </div>

            <div className={styles.tabContent}>
              <p>
                Need real customers — not theories on how to get them? Have a budget, but no traffic
                team, creatives, or strategy?
              </p>
              <ArrowIcon className={styles.arrow} />
              <p>
                Contact MULTICPA — we’ll build everything from the ground up, drive traffic, and
                deliver leads in any niche
              </p>
              <ArrowIcon className={styles.arrow} />
              <div className={styles.btn}>
                <VolumetricButton label="Launch Now" />
              </div>
            </div>

            <Footer />
          </div>
        </div>

        <Image src={snake_3} alt="snake" className={styles.snake} />
      </div>
    </div>
  )
}
