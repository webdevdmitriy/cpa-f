import cn from 'classnames'
import { ApplicationCard } from '../ApplicationCard'
import styles from '../ApplicationModals.module.scss'

export const ApplicationFormCard = () => (
  <ApplicationCard>
    <form className={styles.formContent}>
      <p className={styles.note}>
        Fields with an asterisk <span>(*)</span> are mandatory
      </p>

      <div className={styles.fields}>
        <label className={styles.field}>
          <span className={styles.srOnly}>Your Name</span>
          <input type="text" name="name" placeholder="Your Name" required />
        </label>

        <label className={styles.selectField}>
          <span className={styles.srOnly}>Contact Method</span>
          <select name="contactMethod" required defaultValue="">
            <option value="" disabled hidden>
              Contact Method
            </option>
            <option value="telegram">Telegram</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
          <span className={styles.fieldText} aria-hidden="true">
            Contact Method<span>*</span>
          </span>
        </label>

        <label className={styles.contactField}>
          <span className={styles.srOnly}>Your Contact</span>
          <input type="text" name="contact" placeholder=" " required aria-label="Your Contact" />
          <span className={styles.fieldText} aria-hidden="true">
            Your Contact<span>*</span>
          </span>
        </label>
      </div>

      <button className={cn(styles.primaryButton, styles.submitButton)} type="button">
        Submit
      </button>
    </form>
  </ApplicationCard>
)
