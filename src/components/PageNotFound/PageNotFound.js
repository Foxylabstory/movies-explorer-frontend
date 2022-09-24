import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound(params) {
    return (
        <section className='page-not-found'>
            <h2 className='page-not-found__header'>404</h2>
            <p className='page-not-found__text'>Страница не найдена</p>
            <Link className='page-not-found__link' to={-1}>Назад</Link>
        </section>
    )
}

export default PageNotFound;