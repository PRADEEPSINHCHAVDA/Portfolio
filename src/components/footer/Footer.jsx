import React from 'react';
import "./footer.css";
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Pradeepsinh</h1>
           <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>
            
            <li>
                <a href="#portfolio" className="footer__link">Projects</a>
            </li>

            {/* <li>
                <a href="" className="footer__link"></a>
            </li> */}
           </ul>

           <div className="div footer__social">
           <a href="mailto:pradeepsinh.aws@gmail.com"className='footer__social-link' target="_blank">
        <i class="bx bx-mail-send"></i>
    </a>


    <a href="https://github.com/PRADEEPSINHCHAVDA"className='footer__social-link' target="_blank">
        <i class="bx bxl-github "></i>
    </a>
           </div>
           <span className='footer__copy'>
            &#169; Pradeepsinh Chavda. All rights reserved.
           </span>
        </div>
    </footer>
  )
}

export default Footer
