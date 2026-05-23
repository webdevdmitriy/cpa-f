import './multiTasks.scss';
import Image from 'next/image';
import MultiTasksImage from '@/assets/MultiTasksImage.png'

const MultiTasks = () => {
    return (
        <div className="tasks">
            <div className="container">
                <h2 className="tasks__header">multi-tasks</h2>
                <div className="tasks__cards">
                    <div className="tasks__info tasks__cards-wrapper">
                        <p>
                            We run an <span>in-house team</span> of media <br/> buyers, designers, creatives, developers, 
                            <br/> and copywriters — no middlemen, <br/> no outsourcing
                        </p>
                        <Image className="tasks__card-img" src={MultiTasksImage} alt="snake"></Image>
                    </div>
                    <div className="tasks__cards-wrapper">
                        <div className="tasks__card tasks__card-middle">
                            <h3 className="tasks__card-header">Flexible <br/> infrastructure</h3>
                            <p className="tasks__card-description">
                                Custom tools, fast integrations <br/> and scalable architecture
                            </p>
                        </div>
                        <div className="tasks__card tasks__card-middle">
                            <h3 className="tasks__card-header">High-performing <br/> creatives</h3>
                            <p className="tasks__card-description">
                                Scroll-stopping ads tailored to <br/> your vertical
                            </p>
                        </div>
                    </div>
                    <div className="tasks__cards-wrapper">
                        <div className="tasks__card tasks__card-little">
                            <h3 className="tasks__card-header">Compelling <br/> copywriting</h3>
                            <p className="tasks__card-description">
                                Messaging that hooks, sells, and <br/> drives funnel growth
                            </p>
                        </div>
                        <div className="tasks__card tasks__card-little">
                            <h3 className="tasks__card-header">Adaptive <br/> media buying</h3>
                            <p className="tasks__card-description">
                                No wasted budgets — we test, <br/> tweak, and scale
                            </p>
                        </div>
                        <div className="tasks__card tasks__card-little">
                            <h3 className="tasks__card-header">Full-cycle <br/> support</h3>
                            <p className="tasks__card-description">
                                From setup to scaling — <br/> we support you every step of <br/> the way
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MultiTasks;