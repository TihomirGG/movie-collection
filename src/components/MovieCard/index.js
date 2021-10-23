import './MovieCard.scss';
import { Link } from 'react-router-dom';

function MovieCard(props) {
    return (
        <div className="movie-card">
            <div className="movie-card__container">
                <img className="movie-card__container__img" alt="movie" src="https://m.media-amazon.com/images/I/71TCCvDi8uL._SY445_.jpg" />
            </div>
            <div className="movie-card__info">
                <h2 className="movie-card__info__title">Title</h2>
                <p className="movie-card__info__genres">Comedy | 120 minutes</p>
                <p className="movie-card__info__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem impedit obcaecati magnam
                    vitae sunt tenetur error alias quidem officiis delectus. Culpa fugiat delectus soluta maxime at
                    blanditiis facilis odio impedit!
                </p>
                <Link className="movie-card__info__site" to={{ pathname: "https://www.imdb.com/" }} target="_blank">Visit official website</Link>
                <button className="movie-card__info__button">Add to favourite</button>
            </div>
        </div>
    );
}

export default MovieCard;
