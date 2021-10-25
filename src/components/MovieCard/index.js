import './MovieCard.scss';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { favouriteChange } from '../../app/slices/movieSlice';

function MovieCard(props) {
    const { keyword } = useParams();
    const dispatch = useDispatch();
    
    console.log(keyword, '----keyword');
    return (
        <div className="movie-card">
            <div className="movie-card__container">
                <img className="movie-card__container__img" alt="movie" src={props.imageUrl} />
            </div>
            <div className="movie-card__info">
                <h2 className="movie-card__info__title">{props.title}</h2>
                <p className="movie-card__info__genres">
                    {props.genres.join(', ')} | {props.length} minutes
                </p>
                <p className="movie-card__info__description">{props.description}</p>
                <Link className="movie-card__info__site" to={{ pathname: 'https://www.imdb.com/' }} target="_blank">
                    Visit official website
                </Link>
                <button
                    className={props.isFavourite ? 'movie-card__info__button--remove' : 'movie-card__info__button--add'}
                    onClick={() => {
                        dispatch(favouriteChange(!props.isFavourite, props.id));
                    }}
                >
                    {props.isFavourite ? 'Remove from favourite' : 'Add to favourite'}
                </button>
            </div>
        </div>
    );
}

export default MovieCard;
