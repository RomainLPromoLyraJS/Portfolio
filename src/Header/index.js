import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__container__title">L<span className="header__container__title__letter">R</span></h1>    
            </div>
            <div className="header__links">
                <a className="header__links__link" href="/about">Qui-suis-je ?</a>
                <a className="header__links__link" href="/resume">Mon CV</a>
                <a className="header__links__link" href="/projects">Mes projets</a>
            </div>
        </header>
    );
};

export default Header;