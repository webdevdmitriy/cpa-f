import styles from './MultiTasks.module.scss'

import Image from 'next/image'
import snake_5 from '@/assets/images/snake_5.png'

import { tasksService } from '@/api/services/tasks.service'

import MultiTasksCard from './MultiTasksCard/MultiTasksCard'
import { PageTitle } from '../PageTitle/PageTitle'
import type { TasksTile } from '@/api/types'

export default async function MultiTasks() {
  const data = await tasksService.getTasks('en')

  const middle: TasksTile[] = data.tiles.slice(0, 2)
  const little: TasksTile[] = data.tiles.slice(2)

  return (
    <div className={styles.tasks}>
      <div className={styles.container}>
        <PageTitle className={styles.header} text="multi-tasks" />
        <div className={styles.cards}>
          <div className={`${styles.info} ${styles.cardsWrapper}`}>
            <p>
              We run an <span>in-house team</span> of media <br /> buyers, designers, creatives,
              developers,
              <br /> and copywriters — no middlemen, <br /> no outsourcing
            </p>
            <Image draggable="false" src={snake_5} alt="snake"></Image>
          </div>
          <div className={styles.cardsWrapper}>
            {middle.map(item => (
              <MultiTasksCard key={item.id} title={item.title} text={item.text} />
            ))}
          </div>
          <div className={styles.cardsWrapper}>
            {little.map(item => (
              <MultiTasksCard key={item.id} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
