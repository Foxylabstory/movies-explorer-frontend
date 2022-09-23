import React from "react";
import './MoviesCard.css';
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function MoviesCard({ title, duration, isSaved, thumbnail, owner }) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = currentUser._id === owner;
    console.log(currentUser._id);
    console.log(isOwn);
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
    return (
        <div className='movies-card'>
            <div className='movies-card__tittle-container'>
                <h3 className='movies-card__tittle'>{title}</h3>
                <p className='movies-card__duration'>{formattedDuration(duration)}</p>
            </div>
            <div className={'movies-card__mark ' + (isSaved ? 'movies-card__mark_saved' : 'movies-card__mark_unsaved') + ( isOwn ? ' movies-card__mark_own' : '')}></div>
            <img className='movies-card__img' src={thumbnail} alt={title}></img>
        </div>
    )
}

export default MoviesCard;