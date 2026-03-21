import React, { useRef, useState } from 'react';
import "./contact.css";
import useScrollReveal from '../../hooks/useScrollReveal';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const data = new FormData(form.current);
    data.append('access_key', '019e7c03-62a0-44a5-921e-1db04a12515e');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('sent');
        form.current.reset();
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        console.error('Web3Forms error:', json);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">

        <div ref={infoRef} className="contact__content reveal reveal-left">
          <h3 className="contact__title">Let's have a chat</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">pradeepsinh.aws@gmail.com</span>
              <a href="mailto:pradeepsinh.aws@gmail.com" className="contact__button">
                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">817-863-0085</span>
              <a href="tel:8178630085" className="contact__button">
                Call me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Pradeepsinh Chavda</span>
              <a href="https://www.linkedin.com/in/pradeepsinh-chavda-008ba1161/" className="contact__button" target="_blank" rel="noreferrer">
                Connect <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div ref={formRef} className="contact__content reveal reveal-right">
          <h3 className="contact__title">Write me about your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input type="text" name='name' className='contact__form-input' placeholder='Your name' required />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input type="email" name='email' className='contact__form-input' placeholder='Your email' required />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea name="project" className='contact__form-input' placeholder='Tell me about your project' required></textarea>
            </div>
            <button className="button button--flex" disabled={status === 'sending'}>
              {status === 'sent' ? '✓ Message Sent!' : status === 'error' ? '✕ Failed, try again' : status === 'sending' ? 'Sending…' : 'Send Message'}
              {status === 'idle' && (
                <svg className="button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z" fill="white"></path>
                  <path d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z" fill="white"></path>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
