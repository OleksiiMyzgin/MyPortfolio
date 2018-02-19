import React from "react";
import PropTypes from 'prop-types';



const Contact = props => {

  const contact = props.data.contact;

  return (
    <section id="contact" to="contact" className="contact flex big_padding" id="contact">
      <h3 className="contact__title title animate" data-animation="slideInRight" >{contact.title}</h3>
      <p className="contact__text">{contact.text}</p>
      <span className="highlight">{contact.textAdd}</span>
      <a href="mailto: mr.oleksii90@gmail.com" className="contact__btn button">{contact.mail}</a>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.object.isRequired
};

export default Contact;
