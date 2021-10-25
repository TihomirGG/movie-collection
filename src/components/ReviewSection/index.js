import './ReviewSection.scss';
import StarRating from '../StarRating';
import { useParams } from 'react-router-dom';
import React from 'react';
import { updateNote } from '../../app/slices/movieSlice';
import { useDispatch } from 'react-redux';

function ReviewSection(props) {
    const { id } = useParams();
    const dispatch = useDispatch();

    
    return (
        <div className="review-section">
            <h2 className="review-section__title">Your review</h2>
            <StarRating className="review-section__star" />
            <textarea
                className="review-section__comment"
                rows="8"
                cols="60"
                placeholder="Your private notes and comments about the movie..."
                value={props.note}
                onChange={e => dispatch(updateNote(e.target.value, id))}
            ></textarea>
        </div>
    );
}

export default ReviewSection;
