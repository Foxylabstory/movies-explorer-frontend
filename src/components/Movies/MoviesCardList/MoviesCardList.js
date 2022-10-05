import { useLocation } from 'react-router-dom';
import Preloader from '../../ModalWindow/Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { MOVIE_API_PATH_FOR_THUMBNAIL } from '../../../utils/constants/constants';

function MoviesCardList({ movies, owner, preloader, errorText, displayMeMovies, handlePutOrDeleteLike, isMovieAlreadySaved }) {
    const location = useLocation();

    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__container'>
                {preloader && <Preloader />}
                {errorText.length > 0 && <p className='movies-card-list__message'>{errorText}</p>}
                {movies && movies.slice(0, (location.pathname === '/movies' && displayMeMovies)).map((movie) => {
                    const isAlreadySaved = isMovieAlreadySaved(movie);
                    return (<MoviesCard
                        title={movie.nameRU}
                        duration={movie.duration}
                        thumbnail={MOVIE_API_PATH_FOR_THUMBNAIL + movie.image.formats.thumbnail.url}
                        movieId={movie.id}
                        key={movie.id}
                        owner={owner}
                        handlePutOrDeleteLike={handlePutOrDeleteLike}
                        wholeMovie={movie}
                        isAlreadySaved={isAlreadySaved}
                    />)
                })}
            </div>
        </section>
    )
}

export default MoviesCardList;