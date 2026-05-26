import { ApplicationFormCard } from './ApplicationFormCard';
import { ApplicationSuccessCard } from './ApplicationSuccessCard';
import styles from './ApplicationModals.module.scss';

export const ApplicationModals = () => {
  return (
    <section className={styles.showcase} aria-label="Application form states">
      <ApplicationFormCard />
      <ApplicationSuccessCard />
    </section>
  );
};
