import './ReviewSection.scss';
import StarRating from '../StarRating';

function ReviewSection(props) {
    return (
        <div>
            <h2>Your review</h2>
            <StarRating />
        </div>
    );
}

export default ReviewSection;
