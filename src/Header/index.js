import React from 'react';

const Header = () => {
    return (
        <header>
            <div>
                <h1>PorteFolio</h1>    
            </div>
            <div>
                <a href="/about">Qui-suis-je ?</a>
                <a href="/resume">Mon CV</a>
                <a href="/projects">Mes projets</a>
            </div>
        </header>
    );
};

export default Header;