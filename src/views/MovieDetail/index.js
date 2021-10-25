import './MovieDetail.scss';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovie } from '../../app/slices/movieSlice';
import SearchHeader from '../../components/SearchHeader';
import MovieCard from '../../components/MovieCard';
import ReviewSection from '../../components/ReviewSection';
import { useParams } from 'react-router-dom';

function MovieDetail(props) {
    let { id } = useParams();
    const movie = useSelector(state => state.movie.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovie(id));
    }, []);

    return (
        <div>
            <SearchHeader />
            <MovieCard
                id={movie._id}
                imageUrl={movie.imageUrl}
                description={movie.description}
                title={movie.title}
                length={movie.length}
                genres={movie.genres}
                isFavourite={movie.isFavourite}
            />
            <ReviewSection note={movie.note ? movie.note : ''} />
        </div>
    );
}

export default MovieDetail;
