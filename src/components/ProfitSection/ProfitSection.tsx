import styles from './profitSection.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import VolumetricButton from '../VolumetricButton/Button';
import Header from '../Header/Header';

import snake_1 from '@/assets/images/snake_1.png';
import { InstagramIcon } from '@/assets/icons/InstagramIcon';
import { TelegramIcon } from '@/assets/icons/TelegramIcon';
import { LinkedInIcon } from '@/assets/icons/LinkedInIcon';

export default function ProfitSection() {
  return (
    <div className={styles.profit}>
      <div className={styles.container}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.header}>
              practice <br /> makes <span>profits</span>
            </h1>
            <p className={styles.description}>
              We provide effective solutions, tested and refined <br /> on our own products and ad
              budgets
            </p>
            <div className={styles.btn}>
              <VolumetricButton label="Get in Touch" />
            </div>
          </div>
          <Image src={snake_1} alt="snake" className={styles.img}></Image>
        </div>
        <div className={styles.icons}>
          <Link href="#">
            <InstagramIcon />
          </Link>
          <Link href="#">
            <TelegramIcon />
          </Link>
          <Link href="#">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
