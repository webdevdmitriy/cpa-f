import styles from './multiTasksCard.module.scss';

interface MultiTasksCardProps {
  label: string;
  description: string;
}

export default function MultiTasksCard({ label = '', description = '' }: MultiTasksCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardHeader}>{label}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}
