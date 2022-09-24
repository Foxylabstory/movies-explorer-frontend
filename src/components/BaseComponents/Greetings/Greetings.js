import './Greetings.css';
import { Link } from 'react-router-dom';
import logoPath from "../../../images/header/logo__COLOR_main-1.svg";


function Greetings({ text }) {
    return (
        <div className='greetings'>
            <Link className='greetings__logo-link' to="/" >
                <img className="greetings__logo" alt="Логотип сайта" src={logoPath} />
            </Link>
            <h2 className='greetings__header'>{text}</h2>
        </div>
    )
}

export default Greetings;