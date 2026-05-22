import './header.scss';
import Image from 'next/image';
import headerIcon from '@/assets/headerIcon.svg'

const Header = () => {
    return (
        <nav className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Image alt="logo" width={45} height={40} src={headerIcon} className='header__icon'></Image>
                    <div className="header__links">
                        <a href="">Team</a>
                        <a href="">Benefits</a>
                        <a href="">Join Us</a>
                        <div className="header__languages">
                            <span className="header__lang header__lang-active">Eng</span>
                            /
                            <span className="header__lang">Рус</span></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;