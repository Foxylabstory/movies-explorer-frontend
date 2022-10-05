import './Footer.css';

function Footer({margin}) {
    return (
        <section className={`footer ${margin ===0 && 'footer_empty'}`}>
            <div className='footer__container'>
                <h3 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
                <div className='footer__info'>
                    <p className='footer__year-copyright'>© 2020</p>
                    <ul className='footer__list'>
                        <li className='footer__list-item'><a className='footer__link' href="https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer" title='Ссылка ведущая на Github владельца'>Яндекс.Практикум</a></li>
                        <li className='footer__list-item'><a className='footer__link' href="https://github.com/Foxylabstory" target="_blank" rel="noopener noreferrer" title='Ссылка ведущая на Github владельца'>Github</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer;