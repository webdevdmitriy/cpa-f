import headerIcon from '@/assets/headerIcon.svg'

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <nav className='header'>
            <div className='header__wrapper'>
                <Image alt='logo' width={45} height={40} src={headerIcon} className='header__icon'></Image>
                <div className='header__links'>
                    <Link href='#'>Team</Link>
                    <Link href='#'>Benefits</Link>
                    <Link href='#'>Join Us</Link>
                    <div className='header__languages'>
                        <span className='header__lang header__lang-active'>Eng</span>
                        /
                        <span className='header__lang'>Рус</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}