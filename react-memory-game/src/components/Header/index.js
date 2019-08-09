import React from 'react';

const bold = {
    fontWeight: "bold"
}

function Header(props) {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-warning" style={bold}>
                <a className="navbar-brand" href="#!">MEMORY GAME</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-auto">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href='#!' onClick={props.resetGameState}>RESET</a>
            </li>
            <li>
                <a className="nav-link" href="#!" data-toggle="popover" title="How to play" data-content="Click any logo to begin. Each logo may only be clicked once. Each unique click earns a point. Go for a high score!" data-placement="bottom">RULES</a>
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