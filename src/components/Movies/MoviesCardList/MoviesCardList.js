import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
const baseUrl = 'https://api.nomoreparties.co'
function MoviesCardList({ movies, owner }) {
    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__container'>
                {movies.map((movie) => (
                    <MoviesCard
                        title={movie.nameRU}
                        duration={movie.duration}
                        isSaved={false}
                        thumbnail={baseUrl + movie.image.formats.thumbnail.url}
                        movieId={movie.id}
                        key={movie.id}
                        owner={owner}

                    /* src={card.link}
                    name={card.name}
                    key={card._id}
                    likes={card.likes}
                    owner={card.owner}
                    cardId={card._id}
                    onCardClick={onCardClick}
                    onCardLike={onCardLike}
                    onCardDelete={onCardDelete} */
                    />
                ))}
            </div>
        </section>
    )
}

export default MoviesCardList;