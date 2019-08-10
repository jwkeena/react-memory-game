import React from 'react';
import './style.css';

function Logo(props) {
    return(
        <img className="logo" alt="logo" src={props.src} onClick={props.clickHandler}/>
    );
};

export default Logo;