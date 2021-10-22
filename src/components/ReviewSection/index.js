import './ReviewSection.scss';
import StarRating from '../StarRating';

function ReviewSection(props) {
    return (
        <div className="review-section">
            <h2 className="review-section__title">Your review</h2>
            <StarRating className="review-section__star"/>
            <textarea className="review-section__comment" rows="8" cols="60" placeholder="Your private notes and comments about the movie..."></textarea>
        </div>
    );
}

export default ReviewSection;
