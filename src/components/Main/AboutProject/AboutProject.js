import './AboutProject.css';

function AboutProject(props) {
    return (
        <section className="about-project">
            <div className="about-project__container">
                <h2 className="about-project__header_main">О проекте</h2>
                <div className='about-project__details'>
                    <div>
                        <h3 className="about-project__header">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__content">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div>
                        <h3 className="about-project__header">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__content">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className='about-project__timeline'>
                    <div className="about-project__block">1 неделя</div>
                    <div className="about-project__block">4 недели</div>
                    <div className="about-project__block about-project__block_witout-borders">Back-end</div>
                    <div className="about-project__block about-project__block_witout-borders">Front-end</div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;