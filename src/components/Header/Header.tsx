import styles from './header.module.scss'

import Image from 'next/image';
import Link from 'next/link';

import headerIcon from '@/assets/icons/headerIcon.svg'

export default function Header() {
    return (
        <nav className={styles.header}>
            <Image alt='logo' width={45} height={40} src={headerIcon}></Image>
            <div className={styles.links}>
                <Link href='#'>Team</Link>
                <Link href='#'>Benefits</Link>
                <Link href='#'>Join Us</Link>
                <div className={styles.languages}>
                    <span className={`${styles.lang} ${styles.active}`}>Eng</span>
                    /
                    <span className={styles.lang}>Рус</span>
                </div>
            </div>
        </nav>
    )
}