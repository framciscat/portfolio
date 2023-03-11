import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
const Contact = () => {

    const form = useRef();

    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8q9uslb', 'template_b9p229s', form.current, 'nVWTBVsby6e_8U1C6')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };



  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awesome">
                <span> Estemos en contacto </span>
                <span>Contáctame </span>
                <div className='blur s-blur1'
                style={{background: '#ABF1FF94'}}
                ></div>
            </div>
        </div>

        <div className="c-right">
            <form ref ={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Name'/>
                <input type="email" name="user_email" className='user' placeholder='Email'/>
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button' />
                <span>{done && "Mensaje enviado"}</span>
                <div className='blur c-blur1'
                style={{background: 'lightpink'}}>

                </div>

            </form>
        </div>
    </div>
  )
}

export default Contact