import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <h1 className="footer__title">Pradeepsinh Chavda</h1>
        <ul className="footer__list">
          <li><a href="#about" className="footer__link">About</a></li>
          <li><a href="#skills" className="footer__link">Skills</a></li>
          <li><a href="#qualification" className="footer__link">Journey</a></li>
          <li><a href="#projects" className="footer__link">Projects</a></li>
          <li><a href="#contact" className="footer__link">Contact</a></li>
        </ul>
        <div className="footer__social">
          <a href="mailto:pradeepsinh.aws@gmail.com" className='footer__social-link' target="_blank" rel="noreferrer">
            <i className="bx bx-mail-send"></i>
          </a>
          <a href="https://github.com/PRADEEPSINHCHAVDA" className='footer__social-link' target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/pradeepsinh-chavda-008ba1161/" className='footer__social-link' target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className='footer__copy'>
          &#169; {new Date().getFullYear()} Pradeepsinh Chavda. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
