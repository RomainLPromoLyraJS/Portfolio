import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isEmail = () => {
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
        mail.style.display = 'none';
        return true;
    } else {
        mail.style.display = 'block';
        mail.style.animation = 'dongle 1s';
        //setTimeout is used here to allow the user to see, with each click on the button to submit the form, the animation of the error message. 
        setTimeout(() => {
          mail.style.animation = 'none';
        }, 1000)
        return false;
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && isEmail() && message) {
        sendFeedback("template_5dpr8xr", {
            name,
            company,
            phone,
            email,
            message,
        });
    } else {
        console.log('error : name, email or message are not completed');
    }

};

  const sendFeedback = (templateId, variables) => {

    window.emailjs
    // in send method, "GmailServiceID" = id of the service fundable on emailJS website
      .send("GmailServiceID", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          setError("Une erreur s'est produite, veuillez réessayer."))
  };

  return (
    <form className="contact-form">
      <h2>Contactez-nous</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(event) => setName(event.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="company"
          name="company"
          onChange={(event) => setCompany(event.target.value)}
          placeholder="société"
          value={company}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(event) => setPhone(event.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="message *"
          value={message}
        />
      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message">{error && error}</div>
    </form>
  );
};

export default App;