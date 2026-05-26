import styles from './multiTasks.module.scss'

import Image from 'next/image'
import snake_5 from '@/assets/images/snake_5.png'

import MultiTasksCard from './MultiTasksCard/MultiTasksCard'

const cardsInfo = {
  middle: [
    {
      id: 1,
      label: 'Flexible infrastructure',
      description: 'Custom tools, fast integrations and scalable architecture'
    },
    {
      id: 2,
      label: 'High-performing creatives',
      description: 'Scroll-stopping ads tailored to your vertical'
    }
  ],
  little: [
    {
      id: 3,
      label: 'Compelling copywriting',
      description: 'Messaging that hooks, sells, and drives funnel growth'
    },
    {
      id: 4,
      label: 'Adaptive\n media buying',
      description: 'No wasted budgets — we test, tweak, and scale'
    },
    {
      id: 5,
      label: 'Full-cycle support',
      description: 'From setup to scaling — we support you every step of the way'
    }
  ]
}

export default function MultiTasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.container}>
        <h2 className={styles.header}>multi-tasks</h2>
        <div className={styles.cards}>
          <div className={`${styles.info} ${styles.cardsWrapper}`}>
            <p>
              We run an <span>in-house team</span> of media <br /> buyers, designers, creatives,
              developers,
              <br /> and copywriters — no middlemen, <br /> no outsourcing
            </p>
            <Image src={snake_5} alt="snake"></Image>
          </div>
          <div className={styles.cardsWrapper}>
            {cardsInfo.middle.map(item => (
              <MultiTasksCard key={item.id} label={item.label} description={item.description} />
            ))}
          </div>
          <div className={styles.cardsWrapper}>
            {cardsInfo.little.map(item => (
              <MultiTasksCard key={item.id} label={item.label} description={item.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
