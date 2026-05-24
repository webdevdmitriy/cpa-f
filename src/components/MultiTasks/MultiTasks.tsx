import styles from './multiTasks.module.scss';

import Image from 'next/image';
import MultiTasksImage from '@/assets/MultiTasksImage.png'

export default function MultiTasks() {
    return (
        <div className={styles.tasks}>
            <div className='page_container'>
                <h2 className={styles.header}>multi-tasks</h2>
                <div className={styles.cards}>
                    <div className={`${styles.info} ${styles.cardsWrapper}`}>
                        <p>
                            We run an <span>in-house team</span> of media <br/> buyers, designers, creatives, developers, 
                            <br/> and copywriters — no middlemen, <br/> no outsourcing
                        </p>
                        <Image src={MultiTasksImage} alt='snake'></Image>
                    </div>
                    <div className={styles.cardsWrapper}>
                        <div className={styles.card}>
                            <h3 className={styles.cardHeader}>Flexible <br/> infrastructure</h3>
                            <p className={styles.cardDescription}>
                                Custom tools, fast integrations <br/> and scalable architecture
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.cardHeader}>High-performing <br/> creatives</h3>
                            <p className={styles.cardDescription}>
                                Scroll-stopping ads tailored to <br/> your vertical
                            </p>
                        </div>
                    </div>
                    <div className={styles.cardsWrapper}>
                        <div className={styles.card}>
                            <h3 className={styles.cardHeader}>Compelling <br/> copywriting</h3>
                            <p className={styles.cardDescription}>
                                Messaging that hooks, sells, and <br/> drives funnel growth
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.cardHeader}>Adaptive <br/> media buying</h3>
                            <p className={styles.cardDescription}>
                                No wasted budgets — we test, <br/> tweak, and scale
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.cardHeader}>Full-cycle <br/> support</h3>
                            <p className={styles.cardDescription}>
                                From setup to scaling — <br/> we support you every step of <br/> the way
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}