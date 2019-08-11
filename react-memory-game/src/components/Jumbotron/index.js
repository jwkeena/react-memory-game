import React from 'react';
import './style.css';

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <p className="lead">&nbsp;</p>
                <h1 className = {props.maxScoreReached === true ? "display-4 holographic" : "display-4"}>{props.maxScoreReached === true ? "MAX SCORE REACHED!" : "TECH STACK MEMORY GAME"}</h1>
            </div>
        </div>
    );
};

export default Jumbotron;