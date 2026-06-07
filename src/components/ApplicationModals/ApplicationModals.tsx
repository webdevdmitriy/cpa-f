import { useTranslations } from 'next-intl'
import { ApplicationFormCard } from './ApplicationFormCard'
import { ApplicationSuccessCard } from './ApplicationSuccessCard'
import styles from './ApplicationModals.module.scss'

export const ApplicationModals = () => {
  const t = useTranslations('ApplicationModal')

  return (
    <section className={styles.showcase} aria-label={t('statesLabel')}>
      <ApplicationFormCard />
      <ApplicationSuccessCard />
    </section>
  )
}
