/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import RandomPicture from '../assets/img/cameron-venti-MPAkVKZgqak-unsplash.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="about__text">
           <h1 className="about__text__title">Qui suis-je ?</h1>
           <h3 className="about__text__title__description">Mon parcours</h3>
           <article className="about__text__article">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ab exercitationem unde voluptas accusamus odio ut. Quibusdam cumque non aliquid corrupti? Adipisci atque minus ratione, excepturi qui pariatur quo odit?
           Maxime delectus perferendis neque nobis placeat exercitationem nisi nostrum sint, expedita esse quam fugiat asperiores aspernatur cum nemo consequuntur minus nulla. Velit delectus incidunt voluptatum ea. Accusamus quae neque tempore.
           Perferendis aut magni, at quia repellendus praesentium, neque recusandae molestias sint itaque dolorum quam nam ratione hic accusamus dolores! Omnis ex dolorum tenetur tempore illo deserunt? Animi ad inventore harum.
           </article> 
           </div>
           <div className="about__img">
               <img className="about__img__picture" src={RandomPicture} alt="photo d'un beau jeune homme"/>
           </div>
        </div>
    );
};

export default About;