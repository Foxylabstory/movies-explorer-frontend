import './AboutMe.css';
import photoPath from '../../../images/aboutMe/studentPic.png';

function AboutMe(props) {
    return (
        <section className='about-me'>
            <div className='about-me__container'>
                <h2 className="about-me__header_main">Студент</h2>
                <div className='about-me__summary'>
                    <div className='about-me__texts'>
                        <h3 className='about-me__header'>Рушан</h3>
                        <p className='about-me__about'>Фронтенд-разработчик, 37 лет</p>
                        <p className='about-me__description'>Постоянно обучаюсь чему то новому. Имею огромный кругозор и жизненный опыт, не стесняюсь спрашивать. Предпочитаю говорить правду. Получаю огромное удовольствие, когда работа выполнена "как нужно". Давайте дружить.</p>
                        <a className='about-me__link' href="https://github.com/Foxylabstory" target="_blank" rel="noopener noreferrer" title='Ссылка ведущая на Github владельца'>Github</a>
                    </div>
                    <img className="about-me__photo" alt="Фото студента" src={photoPath} />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;