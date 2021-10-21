import './SearchBar.scss';

function SearchBar(props) {
    return (
        <div className="search-bar">
            <input className="search-bar__input" placeholder="Search by movie title..." type="text"/>
            <button className="search-bar__button">Search</button>
        </div>
    );
}

export default SearchBar;