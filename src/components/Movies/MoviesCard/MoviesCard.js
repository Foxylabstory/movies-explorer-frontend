import './MoviesCard.css';

function MoviesCard({ title, duration, isSaved, thumbnail }) {
    return (
        <div className='movies-card'>
            <h3>{title}</h3>
            <p>{duration}</p>
            <div className={isSaved ? 'movies-card__saved' : 'movies-card__unsaved' }></div>
            <img src={thumbnail} alt={title} ></img>
        </div>
    )
}

export default MoviesCard;