import React from 'react';
import main from '../Images/main.webp'; // Ensure the image path is correct
import './Main.css';

const Main = () => {
    return (
        <div className="main-container">
            <img src={main} alt="Fashion Sale" className="main-image" />
            <div className="main-content">
                <h1 className="sale-text">Fashion Sale</h1>
                <h2 className="style-text">Minimal Menz Style</h2>
                <p className="description-text">
                    Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.
                </p>
                <button className="shop-now-button">Shop Now</button>
            </div>
        </div>
    );
};

export default Main;
