import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <NavLink to="/" className="header__container__link">
                <h1 className="header__container__title">L<span className="header__container__title__letter">R</span></h1>   
                </NavLink> 
            </div>
            <div className="header__links">
                <NavLink to="/about" className="header__links__link">Qui-suis-je ?</NavLink>
                <NavLink to="/resume" className="header__links__link">Mon CV</NavLink>
                <NavLink to="/projects" className="header__links__link">Mes projets</NavLink>
            </div>
        </header>
    );
};

export default Header;