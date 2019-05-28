import React from 'react';
import './Header.css';


const HeaderTitle = () => {
    const options = {month: "short", day: "numeric"};
    const date = new Date().toLocaleDateString("en-US", options);

    return (
        <div className="title">
            <h3>
                <strong>Lambda School</strong>
                <span className="gray">@LambdaSchool · {date}</span>
            </h3>
        </div>
    );
};

export default HeaderTitle;