import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h1 className="contact__title">Contact</h1>
            <h2 className="contact__subtitle">Vos coordonnées</h2>
                <form className="contact__form" action="">
                    <div className="contact__form__section">
                    <label className="contact__form__section__label" htmlFor="name">Votre nom</label>
                    <input className="contact__form__section__input" type="text" name="name" id="name"/>
                    </div>
                    <div className="contact__form__section">
                    <label className="contact__form__section__label" htmlFor="email">Votre e-mail</label>
                    <input className="contact__form__section__input" type="email" name="email" id="email"/>
                    </div>
                    <div className="contact__form__section">
                    <label className="contact__form__section__label" htmlFor="message">Votre message</label>
                    <textarea className="contact__form__section__textarea" name="message" id="" cols="30" rows="10" 
                    placeholder="Taper ici votre message pour plus d'informations..."></textarea>
                    </div>
                    <div className="contact__form__section">
                    <button className="contact__form__section__button" type="submit">Valider</button>
                    </div>
                </form> 
            </div>
    );
};

export default Contact;