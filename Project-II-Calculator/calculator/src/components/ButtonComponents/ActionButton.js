import React from 'react';
import './Button.css';


function ActionButtons(props) {
    return(
        <button className={props.buttonStyle}>{props.text}</button>
    );
};

export default ActionButtons;