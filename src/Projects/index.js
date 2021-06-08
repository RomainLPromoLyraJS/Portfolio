/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

//Local imports

import CrepeImg from '../assets/img/cameron-venti-MPAkVKZgqak-unsplash.jpg';

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="projects__title">Mes projets</h1>
            <h2 className="projects__subtitle">Réalisés avec ReactJS</h2>
            <div className="projects__section">
                <div className="projects__section__project">
                    <img className="projects__section__project__img" src={CrepeImg} alt="site d'une recette de crêpes en ReactJS" /> 
                </div>
                <div className="projects__section__project__links">
                    <a className="projects__section__project__links__link" href="#" target="_blank">recette de crêpes</a>
                </div>
            </div>
            <div className="projects__section">
                <div className="project__section__project">
                    <img className="projects__section__project__img" src={CrepeImg} alt="site d'une recette de crêpes en ReactJS" /> 
                </div>
                <div className="projects__section__project__links">
                    <a className="projects__section__project__links__link" href="#" target="_blank">recette de crêpes</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;