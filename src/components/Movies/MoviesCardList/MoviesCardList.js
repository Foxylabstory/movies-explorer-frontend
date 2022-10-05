import Preloader from '../../ModalWindow/Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { MOVIE_API_PATH_FOR_THUMBNAIL } from '../../../utils/constants/constants';

function MoviesCardList({ movies, owner, preloader, errorText, displayMeMovies }) {

    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__container'>
                {preloader && <Preloader />}
                {errorText.length > 0 && <p className='movies-card-list__message'>{errorText}</p>}
                {movies && movies.slice(0, displayMeMovies).map((movie) => (
                    <MoviesCard
                        title={movie.nameRU}
                        duration={movie.duration}
                        isSaved={false}
                        thumbnail={MOVIE_API_PATH_FOR_THUMBNAIL + movie.image.formats.thumbnail.url}
                        movieId={movie.id}
                        key={movie.id}
                        owner={owner}
                    />
                ))}
            </div>
        </section>
    )
}

export default MoviesCardList;