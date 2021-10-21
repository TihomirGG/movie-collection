import './FavouritesSection.scss';
import MoviesGrid from '../MoviesGrid';

function FavouritesSection(props) {
    return (
        <div className="favourite-section">
            <h2 className="favourite-section__title">Your Favourites</h2>
            <MoviesGrid />
        </div>
    );
}

export default FavouritesSection;
