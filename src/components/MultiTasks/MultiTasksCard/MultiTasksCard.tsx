import styles from './MultiTasksCard.module.scss'

interface MultiTasksCardProps {
  title: string
  text: string
}

export default function MultiTasksCard({ title = '', text = '' }: MultiTasksCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardHeader}>{title}</h3>
      <p className={styles.cardDescription}>{text}</p>
    </div>
  )
}
