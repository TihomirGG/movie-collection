import './Search.scss';
import SearchHeader from '../../components/SearchHeader';
import SearchBar from '../../components/SearchBar';
import MovieCard from '../../components/MovieCard';

function Search(props) {
    return (
        <div className="search-container">
            <SearchHeader></SearchHeader>
            <h2 className="search-container__title">Search</h2>
            <div className="search-container__search-bar">
            <SearchBar ></SearchBar>

            </div>
            <MovieCard></MovieCard>
        </div>
    );
}

export default Search;
