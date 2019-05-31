import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = () => {

    const reactLink = event => {
        window.location = 'https://www.reactjs.org';
    }

    return (
        <div className="card" onClick={() => reactLink()} >
            <CardBanner />
            <CardContent />
        </div>
    );
};

export default CardContainer;