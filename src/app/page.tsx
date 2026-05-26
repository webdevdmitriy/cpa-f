import Image from 'next/image';
import styles from './page.module.scss';
import { PageTitle } from '@/components/PageTitle/PageTitle';

export default function Home() {
  return (
    <main>
      <PageTitle text="Hi. Im title" />
    </main>
  );
}
