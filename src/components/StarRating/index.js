import './StarRating.scss';
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateRating } from '../../app/slices/movieSlice';

function StarRating(props) {
    const ratingSelector = useSelector(state => state.movie.movie.rating);
    const [rating, setRating] = useState();
    const [hover, setHover] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        setRating(ratingSelector || 0);
    }, [ratingSelector]);

    return (
        <div className="star-container">
            {[...Array(5)].map((x, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i} className="star-container__label">
                        <input
                            type="radio"
                            name="rating"
                            id=""
                            value={ratingValue}
                            onClick={() => {
                                dispatch(updateRating(ratingValue, id));
                            }}
                        />
                        <FaStar
                            className="star-container__label__star"
                            color={ratingValue <= (hover || rating) ? '#ffc107' : 'gray'}
                            onMouseLeave={() => setHover(null)}
                            onMouseEnter={() => setHover(ratingValue)}
                            size={60}
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default StarRating;
