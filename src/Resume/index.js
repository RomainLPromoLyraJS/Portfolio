import React from 'react';

const Resume = () => {
    return (
        <div className="resume">
            <h1 className="resume__title">Mon CV</h1>
            <h2 className="resume__subtitle">Compétences, expériences et formation</h2>
            <div className="resume__formation">
                <h3 className="resume__formation__title">Compétences</h3>
            </div>
                <div className="resume__skills">
                    <div className="resume__skills__lists">
                        <h4 className="resume__skills__lists__subtitle">Front</h4>
                        <ul className="resume__skills__lists__list">
                            <li className="resume__skills__lists__list__element">HTML / CSS</li>
                            <li className="resume__skills__lists__list__element">Javascript</li>
                            <li className="resume__skills__lists__list__element">React</li>
                            <li className="resume__skills__lists__list__element">Redux</li>
                        </ul>
                    </div>
                    <div className="resume__skills__lists">
                        <h4 className="resume__skills__lists__subtitle">Back</h4>
                        <ul className="resume__skills__lists__list">
                            <li className="resume__skills__lists__list__element">NodeJS</li>
                            <li className="resume__skills__lists__list__element">ExpressJS</li>
                            <li className="resume__skills__lists__list__element">PostgreSQL</li>
                            <li className="resume__skills__lists__list__element">Json Web Token / Bcrypt</li>
                        </ul>
                    </div>
                    <div className="resume__skills__lists">
                        <h4 className="resume__skills__lists__subtitle">Outils</h4>
                        <ul className="resume__skills__lists__list">
                            <li className="resume__skills__lists__list__element">Visual Code Studio</li>
                            <li className="resume__skills__lists__list__element">Git</li>
                            <li className="resume__skills__lists__list__element">Github</li>
                            <li className="resume__skills__lists__list__element">Insomnia / Postman</li>
                        </ul>
                    </div>
                </div>
            
        </div>
    );
};

export default Resume;