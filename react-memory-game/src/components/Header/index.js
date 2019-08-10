import React from 'react';
import './style.css';

const bold = {
    fontWeight: "bold"
}

function Header(props) {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-warning" style={bold}>

        <div className="collapse navbar-collapse mr-auto">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href='#!' onClick={props.resetGameState}>RESET</a>
            </li>
            <li>
                <a className="nav-link" href="#!" data-toggle="popover" title="How to play" data-content="Click any logo to begin. Each logo may only be clicked once. Each unique click earns a point, and each duplicate click resets the game." data-placement="bottom">RULES</a>
            </li>
            </ul>
            <div className="navbar-text ml-auto text-secondary">
            SCORE: <span id="score">{props.score}</span> | HI SCORE: <span id="top-score">{props.topScore}</span>
            </div>
        </div>
        </nav>    
    );
};

export default Header;