import React from 'react';
import './style.css';

function Footer() {
    return (
    <div className="d-flex flex-column">
    <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
        <small>Copyright &copy; <a href="http://jwkeena.github.io" target="_blank" rel="noopener noreferrer">Justin Keena</a></small>
        </div>
    </footer>
    </div>
    );
};

export default Footer;
