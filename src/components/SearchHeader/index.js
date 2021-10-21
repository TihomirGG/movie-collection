import './SearchHeader.scss';
import SearchBar from '../SearchBar/';

function SearchHeader(props) {
    return (
        <div className="search-header">
            <h3 className="search-header__title">My movie Colletion</h3>
            <SearchBar className="search-header__searchbar"/>
        </div>
    )
}


export default SearchHeader;