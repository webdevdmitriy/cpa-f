import { ApplicationCard } from '../ApplicationCard'
import styles from '../ApplicationModals.module.scss'

export const ApplicationSuccessCard = () => (
  <ApplicationCard variant="done">
    <div className={styles.successContent}>
      <div className={styles.successText}>
        <h1>We have received your application!</h1>
        <p>We will process your request and get in touch with you</p>
      </div>

      <button className={styles.primaryButton} type="button">
        Done
      </button>
    </div>
  </ApplicationCard>
)
