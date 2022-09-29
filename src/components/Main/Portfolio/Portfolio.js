import './Portfolio.css';

function Portfolio(props) {
    return (
        <section className='portfolio'>
            <div className='portfolio__container'>
                <h3 className='portfolio__header'>Портфолио</h3>
                <ul className='portfolio__list'>
                    <li className='portfolio__list-item'>
                        <a className='portfolio__link' href="https://foxylabstory.github.io/how-to-learn/" target="_blank" rel="noopener noreferrer" title='Ссылка ведущая на статичный сайт'>
                            <p className='portfolio__link-text'>Статичный сайт</p>
                            <p className='portfolio__link-arrow'>↗</p>
                        </a>
                    </li>
                    <li className='portfolio__list-item'>
                        <a className='portfolio__link' href="https://foxylabstory.github.io/russian-travel/" target="_blank" rel="noopener noreferrer" title='Ссылка ведущая на адаптивный сайт'>
                            <p className='portfolio__link-text'>Адаптивный сайт</p>
                            <p className='portfolio__link-arrow'>↗</p>
                        </a>
                    </li>
                    <li className='portfolio__list-item'>
                        <a className='portfolio__link' href="https://foxylab.nomoredomains.sbs/" target="_blank" rel="noopener noreferrer" title='Ссылка ведущая на одностраничное приложение'>
                            <p className='portfolio__link-text'>Одностраничное приложение</p>
                            <p className='portfolio__link-arrow'>↗</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;