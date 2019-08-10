import React from 'react';
import './style.css';

function Logo(props) {
    console.log(props.index);
    return(
        <img className="logo" alt="logo" src={props.src}/>
    );
};

export default Logo;