import './profitSection.scss';
import Image from 'next/image';
import Link from 'next/link';

import VolumetricButton from '../VolumetricButton/Button';
import Header from '../Header/Header';

import telegram from '@/assets/icons/telegramIcon.svg';
import instagram from '@/assets/icons/instagramIcon.svg';
import linkedin from '@/assets/icons/linkedinIcon.svg';
import snake from '@/assets/images/ProfitImage.png';

const ProfitSection = () => {
    return (
        <div className="profit">
            <Header/>
            <div className="container">
                <div className="profit__wrapper">
                    <div className="profit__content">
                        <h1 className="profit__header">practice <br/> makes <span>profits</span></h1>
                        <p className="profit__description">We provide effective solutions, tested and refined <br/> on our own products and ad budgets</p>
                        <div className="profit__btn">
                            <VolumetricButton label="Get in Touch"/>
                        </div>
                    </div>
                    <Image src={snake} alt="snake" className="profit__img"></Image>
                </div>
                <div className="profit__icons">
                    <Link href="#">
                        <Image src={instagram} alt="instagram"></Image>
                    </Link>
                    <Link href="#">
                        <Image src={telegram} alt="telegram"></Image>
                    </Link>
                    <Link href="#">
                        <Image src={linkedin} alt="linkedin"></Image>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfitSection;