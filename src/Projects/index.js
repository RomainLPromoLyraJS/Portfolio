/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

//Local imports

import CrepeImg from '../assets/img/cameron-venti-MPAkVKZgqak-unsplash.jpg';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__maintitle">
                <h1 className="projects__maintitle__title">Mes projets</h1>
                <h2 className="projects__maintitle__subtitle">Réalisés avec ReactJS</h2>
            </div>
            <div className="projects__section">
                <div className="projects__section__project">
                    <p className="projects__section__project__description">Une recette de crêpes savoureuses intégralement codée en ReactJS.</p>
                    <ul className="projects__section__project__lists">Technologies
                        <li className="projects__section__project__lists__first">- HTML / CSS</li>
                        <li className="projects__section__project__lists__list">- Javascript</li>
                        <li className="projects__section__project__lists__list">- ReactJS</li>
                    </ul>
                </div>
                <div className="projects__section__project__links">
                    
                    <a className="projects__section__project__links__link" href="#" target="_blank">Recette de crêpes<img className="projects__section__project__links__img" src={CrepeImg} alt="site d'une recette de crêpes en ReactJS" /></a>
                </div>
            </div>
        </div>
    );
};

export default Projects;