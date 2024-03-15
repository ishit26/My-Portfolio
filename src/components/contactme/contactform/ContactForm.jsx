import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className='name-container'>
                <input type='text' name='firstName' placeholder='First Name' />
                <input type='text' name='lastName' placeholder='Last Name' />
            </div>

            <input type='text' name='email' placeholder='Email' />
            <textarea type='text' name='message' placeholder='Message' />

            <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm;