import styles from './MultiTasks.module.scss'

import Image from 'next/image'
import snake_5 from '@/assets/images/snake_5.png'

import { tasksService } from '@/api/services/tasks.service'

import MultiTasksCard from './MultiTasksCard/MultiTasksCard'
import { PageTitle } from '../PageTitle/PageTitle'
import type { TasksTile, Tasks } from '@/api/types'

async function request(): Promise<Tasks> {
  console.log('Запрос данных...')

  try {
    const response = await fetch('https://cpa-server-vtel.onrender.com/en/tasks', {
      method: 'GET',
      headers: {
        'x-api-key': 'prodcpakey333'
      }
    })

    if (!response.ok) {
      throw new Error('Ошибка...')
    }

    const data: Tasks = await response.json()
    return data
  } catch (err) {
    console.error(err)
    console.log('Произошла ошибка запроса...')
    throw err
  }
}

export default async function MultiTasks() {
  const data = await request()
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
