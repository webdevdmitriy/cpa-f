import { useTranslations } from 'next-intl'
import { ApplicationCard } from '../ApplicationCard'
import styles from '../ApplicationModals.module.scss'

type ApplicationSuccessCardProps = {
  onClose?: () => void
}

export const ApplicationSuccessCard = ({ onClose }: ApplicationSuccessCardProps) => {
  const t = useTranslations('ApplicationModal.success')

  return (
    <ApplicationCard onClose={onClose} variant="done">
      <div className={styles.successContent}>
        <div className={styles.successText}>
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
        </div>

        <button className={styles.primaryButton} type="button" onClick={onClose}>
          {t('done')}
        </button>
      </div>
    </ApplicationCard>
  )
}
