import './Home.scss';
import SearchHeader from '../../components/SearchHeader';
import HeroSection from '../../components/HeroSection';

function Home(props) {
    return (
        <div>
            <SearchHeader />
            <HeroSection />
        </div>
    );
}

export default Home;
