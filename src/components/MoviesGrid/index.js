import './MoviesGrid.scss';
import { Link } from 'react-router-dom';

function MoviesGrid(props) {
    return <div className="movies-grid">
        <Link className="movies-grid__movie" to="/movies/asdasd"><img alt="movie" src="https://m.media-amazon.com/images/I/71TCCvDi8uL._SY445_.jpg"/></Link>
        <Link className="movies-grid__movie" to="/movies/asdasd"><img alt="movie" src="https://m.media-amazon.com/images/I/71TCCvDi8uL._SY445_.jpg"/></Link>
        <Link className="movies-grid__movie" to="/movies/asdasd"><img alt="movie" src="https://m.media-amazon.com/images/I/71TCCvDi8uL._SY445_.jpg"/></Link>
        <Link className="movies-grid__movie" to="/movies/asdasd"><img alt="movie" src="https://m.media-amazon.com/images/I/71TCCvDi8uL._SY445_.jpg"/></Link>
        <Link className="movies-grid__movie" to="/movies/asdasd"><img alt="movie" src="https://m.media-amazon.com/images/I/71TCCvDi8uL._SY445_.jpg" /></Link>
    </div>;
}

export default MoviesGrid;
