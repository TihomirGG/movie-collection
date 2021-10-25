import './SearchHeader.scss';
import SearchBar from '../SearchBar/';
import { Link } from 'react-router-dom';

function SearchHeader(props) {
    return (
        <div className="search-header">
            <Link className="search-header__title" to="/">
                <h3 className="search-header__title">My movie Colletion</h3>
            </Link>
            <SearchBar className="search-header__searchbar" />
        </div>
    );
}

export default SearchHeader;
