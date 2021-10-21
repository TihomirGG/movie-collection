import './StarRating.scss';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

function StarRating(props) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
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
                            onClick={() => setRating(ratingValue)}
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
