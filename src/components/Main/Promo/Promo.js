import './Promo.css';
import logoPath from '../../../images/promo/landing-logo.svg';

function Promo(props) {
    return (
        <section className="promo">
            <div className="promo__container">
            <img className="promo__logo" alt="Очень крутой логотип земного шарика" src={logoPath} />
                <div className='promo__container_text'>
                    <h1 className="promo__header">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a className="promo__ankhor" href='#about-project' >Узнать больше</a>
                </div>
            </div>
        </section>
    )
}

export default Promo;