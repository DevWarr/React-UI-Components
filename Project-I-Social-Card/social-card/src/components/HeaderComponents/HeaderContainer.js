import React from 'react';
import './Header.css';
import HeaderContent from'./HeaderContent.js';
import HeaderTitle from './HeaderTitle.js';
import ImageThumbnail from './ImageThumbnail.js';

const HeaderContainer = () => {
    return (
        <header>
            <ImageThumbnail />
            <div className="flexHeader">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </header>
    );
};

export default HeaderContainer;