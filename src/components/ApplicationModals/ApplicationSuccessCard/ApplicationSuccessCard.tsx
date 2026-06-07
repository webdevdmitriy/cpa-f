import { useTranslations } from 'next-intl'
import { ApplicationCard } from '../ApplicationCard'
import styles from '../ApplicationModals.module.scss'

export const ApplicationSuccessCard = () => {
  const t = useTranslations('ApplicationModal.success')

  return (
    <ApplicationCard variant="done">
      <div className={styles.successContent}>
        <div className={styles.successText}>
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
        </div>

        <button className={styles.primaryButton} type="button">
          {t('done')}
        </button>
      </div>
    </ApplicationCard>
  )
}
