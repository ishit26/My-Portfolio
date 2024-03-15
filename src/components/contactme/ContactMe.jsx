import React from 'react';
import './ContactMe.css';
import ContactCardInfo from './contactcardinfo/ContactCardInfo';
import ContactForm from './contactform/ContactForm';

const ContactMe = () => {
  return (
    <section className='contact-container' id='contactme'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{ flex: 1 }}>
              <ContactCardInfo
              iconUrl="./assets/message.png"
              text="chauhanishit07@gmail.com" 
              />

            <ContactCardInfo
              iconUrl="./assets/linkedin.png"
              text="https://www.linkedin.com/in/ishit-chauhan/" 
              />
            </div>
            <div style={{ flex: 1 }}>
              <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe;