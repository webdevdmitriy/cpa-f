import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { ApplicationCard } from '../ApplicationCard'
import styles from '../ApplicationModals.module.scss'

export const ApplicationFormCard = () => {
  const t = useTranslations('ApplicationModal.form')

  return (
    <ApplicationCard>
      <form className={styles.formContent}>
        <p className={styles.note}>
          {t('noteBefore')} <span>(*)</span> {t('noteAfter')}
        </p>

        <div className={styles.fields}>
          <label className={styles.field}>
            <span className={styles.srOnly}>{t('name')}</span>
            <input type="text" name="name" placeholder={t('name')} required />
          </label>

          <label className={styles.selectField}>
            <span className={styles.srOnly}>{t('contactMethod')}</span>
            <select name="contactMethod" required defaultValue="">
              <option value="" disabled hidden>
                {t('contactMethod')}
              </option>
              <option value="telegram">Telegram</option>
              <option value="email">Email</option>
              <option value="phone">{t('phone')}</option>
            </select>
            <span className={styles.fieldText} aria-hidden="true">
              {t('contactMethod')}
              <span>*</span>
            </span>
          </label>

          <label className={styles.contactField}>
            <span className={styles.srOnly}>{t('contact')}</span>
            <input type="text" name="contact" placeholder=" " required aria-label={t('contact')} />
            <span className={styles.fieldText} aria-hidden="true">
              {t('contact')}
              <span>*</span>
            </span>
          </label>
        </div>

        <button className={cn(styles.primaryButton, styles.submitButton)} type="button">
          {t('submit')}
        </button>
      </form>
    </ApplicationCard>
  )
}
