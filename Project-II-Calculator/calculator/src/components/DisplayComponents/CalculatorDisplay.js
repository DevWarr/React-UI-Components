import React from 'react';
import './Display.css';


function CalculatorDisplay(props) {
    return (
        <div>
            <h2>{props.text}</h2>
        </div>
    );
};

export default CalculatorDisplay;