import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            {/* Banner */}
            <div className="banner">
                <img src="banner.jpg" alt="Game Banner" />
                <div className="banner-text">
                </div>
            </div>

            {/* Featured Game */}
            <div className="featured-game">
                <div className="main-game-image">
                    <img src="hades_page.jpg" alt="Hades" />
                </div>
                <div className="other-game-images">
                    <img src="hades_gameplay1.png" alt="Game Screenshot 1" />
                    <img src="hades_gameplay2.jpg" alt="Game Screenshot 2" />
                    <img src="hades_gameplay3.jpg" alt="Game Screenshot 3" />
                    <img src="hades_gameplay4.jpg" alt="Game Screenshot 4" />
                    <h1>Já disponível!</h1>
                    <h2> </h2>
                    <p>Um dos mais renomados e jogados RogueLike da geração atual, avalie já!</p>
                </div>
            </div>
        </div>
    );
}