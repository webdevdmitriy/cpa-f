import { MultiBenefits } from '@/components/MultiBenefits';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.page}>
      <MultiBenefits />
    </main>
  );
}
