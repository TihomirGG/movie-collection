import './MovieDetail.scss';
import SearchHeader from '../../components/SearchHeader';
import MovieCard from '../../components/MovieCard'
import ReviewSection from '../../components/ReviewSection';

function MovieDetail(props) {
    return (
        <div>
            <SearchHeader />
            <MovieCard />
            <ReviewSection />
        </div>
    );
}

export default MovieDetail;
