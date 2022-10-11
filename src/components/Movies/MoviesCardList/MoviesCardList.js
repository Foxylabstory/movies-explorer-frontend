import { useLocation } from 'react-router-dom';
import Preloader from '../../ModalWindow/Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { MOVIE_API_PATH_FOR_THUMBNAIL } from '../../../utils/constants/constants';

function MoviesCardList({ movies, preloader, errorText, displayMeMovies, handlePutOrDeleteLike, isMovieAlreadySaved, savedMovies, handleDeleteMovie }) {
    const location = useLocation();

    return (
        <section className='movies-card-list'>
            {/* {errorText.length >= 0 && <p className='movies-card-list__message'>{errorText}</p>} */}
            <div className='movies-card-list__container'>
                {preloader && <Preloader />}
                {location.pathname === '/movies' && movies && movies.slice(0, displayMeMovies).map((movie) => {
                    const isAlreadySaved = isMovieAlreadySaved(movie);
                    return (<MoviesCard
                        title={movie.nameRU}
                        duration={movie.duration}
                        thumbnail={MOVIE_API_PATH_FOR_THUMBNAIL + movie.image.formats.thumbnail.url}
                        movieId={movie.id}
                        key={movie.id}
                        handlePutOrDeleteLike={handlePutOrDeleteLike}
                        wholeMovie={movie}
                        isAlreadySaved={isAlreadySaved}
                        href={movie.trailerLink}
                    />)
                })}
                {location.pathname === '/saved-movies' && savedMovies && savedMovies.map((movie) => {
                    return (<MoviesCard
                        title={movie.nameRU}
                        duration={movie.duration}
                        thumbnail={movie.image}
                        key={movie._id}
                        href={movie.trailerLink}
                        isOwn={true}
                        wholeMovie={movie}
                        handlePutOrDeleteLike={handleDeleteMovie}
                    />)
                })}
            </div>
        </section>
    )
}

export default MoviesCardList;