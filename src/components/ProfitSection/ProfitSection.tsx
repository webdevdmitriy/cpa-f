import styles from './profitSection.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import VolumetricButton from '../VolumetricButton/Button';
import Header from '../Header/Header';

import telegram from '@/assets/icons/telegramIcon.svg';
import instagram from '@/assets/icons/instagramIcon.svg';
import linkedin from '@/assets/icons/linkedinIcon.svg';
import snake from '@/assets/images/ProfitImage.png';

export default function ProfitSection() {
    return (
        <div className={styles.profit}>
            <div className="page_container">
                <Header/>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h1 className={styles.header}>practice <br/> makes <span>profits</span></h1>
                        <p className={styles.description}>We provide effective solutions, tested and refined <br/> on our own products and ad budgets</p>
                        <div className={styles.btn}>
                            <VolumetricButton label='Get in Touch'/>
                        </div>
                    </div>
                    <Image src={snake} alt='snake' className={styles.img}></Image>
                </div>
                <div className={styles.icons}>
                    <Link href='#'>
                        <Image src={instagram} alt='instagram'></Image>
                    </Link>
                    <Link href='#'>
                        <Image src={telegram} alt='telegram'></Image>
                    </Link>
                    <Link href='#'>
                        <Image src={linkedin} alt='linkedin'></Image>
                    </Link>
                </div>
            </div>
        </div>
    )
}