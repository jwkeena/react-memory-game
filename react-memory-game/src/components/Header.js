import React from 'react';

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
                <a className="navbar-brand" href="#!">Memory Game</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href='#!' onClick={props.resetGameState}>Reset</a>
            </li>
            <li>
                <a className="nav-link" href="#!" data-toggle="popover" title="How to play" data-content="Click any logo to begin. Each logo may only be clicked once. Each unique click earns a point. Go for a high score!" data-placement="bottom">Rules</a>
            </li>
            </ul>
        </div>
        </nav>    
    );
};

export default Header;