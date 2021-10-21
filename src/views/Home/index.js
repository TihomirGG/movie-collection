import './Home.scss';
import SearchHeader from '../../components/SearchHeader';
import HeroSection from '../../components/HeroSection';
import FavouritesSection from '../../components/FavouritesSection';

function Home(props) {
    return (
        <div>
            <SearchHeader />
            <HeroSection />
            <FavouritesSection />
        </div>
    );
}

export default Home;
