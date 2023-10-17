import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
import { validateEmail } from '../utils/helpers';


function contactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'phone') {
            setPhone(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            setErrorMessage('Enter valid email.');
            return;
        }
        // if (!validatePhone(phone)) {
        //     setErrorMessage('Enter valid phone number.');
        //     return;
        // }
        // var SubmitForm = [];
        // SubmitForm = {setEmail, setMessage, setName, setPhone};

        // emailjs.sendForm('service_2mfq7nk', 'template_3hrxa7f', contactForm, 'GTe2dUV_LGLeADAbW');

        setEmail('');
        setMessage('');
        setName('');
        setPhone('');
    };

    return (
        <div> 
            <h3>Submit a message here!</h3>
            <form className="contactForm">
                <div className='mb3'>
                <input
                className='form-control'
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder='Name'>
                </input>
                </div>
                <div>
                <input 
                value={email}
                className='form-control'
                name="email"
                onChange={handleInputChange}
                type='email'
                placeholder='Email'>
                </input>
                </div>
                <div>
                <input
                value={phone}
                className='form-control'
                name="phone"
                onChange={handleInputChange}
                type="text"
                placeholder='(XXX)XXX-XXXX'>
                </input>
                </div>
                <div class="input-group-prepend">
                <textarea
                className='form-control'
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder='Enter message Here.'
                rows="10">
                </textarea>
                     </div>
                     <div>
                <button type="button" 
                className="btn btn-dark float-right"
                onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
        </div>
    );

};

export default contactForm;