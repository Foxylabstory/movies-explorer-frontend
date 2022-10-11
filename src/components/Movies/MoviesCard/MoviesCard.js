import React from "react";
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
// import { MOVIE_API_PATH_FOR_THUMBNAIL } from '../../../utils/constants/constants';

function MoviesCard({ title, duration, thumbnail, handlePutOrDeleteLike, wholeMovie, isAlreadySaved, href, isOwn }) {
    const location = useLocation();
    const formattedDuration = (duration) => {
        if (duration > 60) {
            const min = duration % 60;
            const hour = (duration - min) / 60;
            const result = (`${hour}ч ${min}м`);
            return result;
        } else {
            const result = `${duration}м`;
            return result;
        }
    }

    const onLike = () => {
        handlePutOrDeleteLike(location.pathname === '/saved-movies' ? wholeMovie._id : wholeMovie);
    }

    return (
        <div className='movies-card'>
            <div className='movies-card__tittle-container'>
                <h3 className='movies-card__tittle'>{title}</h3>
                <p className='movies-card__duration'>{formattedDuration(duration)}</p>
            </div>
            <div
                className={'movies-card__mark ' + (isAlreadySaved ? 'movies-card__mark_saved' : 'movies-card__mark_unsaved') + (isOwn ? ' movies-card__mark_own' : '')}
                onClick={onLike}
            ></div>
            <a className='movies-card__link' href={href} target="_blank" rel="noopener noreferrer" title={title}>
            <img className='movies-card__img' src={thumbnail} alt={title}></img></a>
        </div>
    )
}

export default MoviesCard;