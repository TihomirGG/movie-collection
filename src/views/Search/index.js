import './Search.scss';
import SearchHeader from '../../components/SearchHeader';
import SearchBar from '../../components/SearchBar';
import MovieCard from '../../components/MovieCard';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { search } from '../../app/slices/searchSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Search(props) {
    const { keyword } = useParams();
    const movies = useSelector(state => state.searched.searched);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!keyword) return;
        dispatch(search(keyword));
    }, []);

    useEffect(() => {
        if (!keyword) return;
        dispatch(search(keyword));
    },[keyword])

    const renderMovies = () => {
        return movies.map((x, i) => {
            return (
                <div className="relative-div" key={x._id}>
                    <Link to={`/movies/${x._id}`} className="link-div"></Link>
                    <MovieCard
                        imageUrl={x.imageUrl}
                        title={x.title}
                        genres={x.genres}
                        length={x.length}
                        description={x.description}
                        isFavourite={x.isFavourite}
                        id={x._id}
                    />
                </div>
            );
        });
    };
    return (
        <div className="search-container">
            <SearchHeader></SearchHeader>
            <h2 className="search-container__title">Search</h2>
            <div className="search-container__search-bar">
                <SearchBar></SearchBar>
            </div>
            {movies?.length > 0? renderMovies() : <div class="search-container__empty">Search section is empty</div>}
        </div>
    );
}

export default Search;
