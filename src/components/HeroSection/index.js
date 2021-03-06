import './HeroSection.scss';
import React from 'react'
import {Link} from 'react-router-dom'

function HeroSection(props) {
    return (
        <div className="hero-section">
            <div className="hero-section__background">
            <img className="hero-section__background__img" alt="movie" src="https://northernvirginiamag.com/wp-content/uploads/2020/08/movie-popcorn.jpg"/>
            </div>
            <div className="hero-section__content">
                <h2 className="hero-section__content__title">Heading</h2>
                <p className="hero-section__content__info">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                    dolore magna aliqua.
                </p>
                <Link to="/search">
                <button className="hero-section__content__button">Search</button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;
