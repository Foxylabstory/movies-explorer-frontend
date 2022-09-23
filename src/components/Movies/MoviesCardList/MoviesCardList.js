import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
const baseUrl = 'https://api.nomoreparties.co'
function MoviesCardList({movies}) {
    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__container'>
                <MoviesCard
                    title={'33 слова о дизайне'}
                    duration={60}
                    isSaved={false}
                    thumbnail={'https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg'} />
                <MoviesCard
                    title={'42 слова о дизайне'}
                    duration={120}
                    isSaved={true}
                    thumbnail={'https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg'} />
                {movies.map((movie) => (
                    <MoviesCard
                        title={movie.nameRU}
                        duration={movie.duration}
                        isSaved={false}
                        thumbnail={baseUrl+movie.image.formats.thumbnail.url}
                        movieId={movie.id} 

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