import './MoviesGrid.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { getFavMovies } from '../../app/slices/favouriteSlice';
import Spinner from '../Spinner';

function MoviesGrid(props) {
    const movies = useSelector(state => state.favMovies.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavMovies());
    }, []);

    const renderMovies = () => {
        return movies.map((x, i) => {
            return (
                <Link key={i} className="movies-grid__movie" to={`/movies/${x._id}`}>
                    <img alt="movie" src={`${x.imageUrl}`} />
                </Link>
            );
        });
    };
    return <div className="movies-grid">{movies.length ? renderMovies() : <div class="movies-grid__empty">Favourite section is empty</div>}</div>;
}

export default MoviesGrid;
