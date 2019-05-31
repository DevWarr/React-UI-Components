import React from 'react';
import './Display.css';


function CalculatorDisplay(props) {
    return (
        <div className="display__top">
            <p>{props.operation}</p>
            <h2>{props.text}</h2>
        </div>
    );
};

export default CalculatorDisplay;