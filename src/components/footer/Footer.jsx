import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jyotsna</h1>

        <ul className="footer__list">

          {/* about */}
          <li>
            <a href="about" 
            className="footer__link">About</a>
          </li>
          
          {/*projects  */}
          <li>
            <a href="portfolio" 
            className="footer__link">Projects</a>
          </li>

        </ul>

        <div className="footer__social">
          {/* linkedin */}
        <a href="https://www.linkedin.com/in/𝙹𝚢𝚘𝚝𝚜𝚗𝚊-k-157382230" 
        className="footer__social-link" 
        target="_blank">
        <i class="bx bxl-linkedin"></i>
        </a>

        {/* git */}
        <a href="https://github.com/JyotsnaJahanaviDevi" 
        className="footer__social-link" 
        target="_blank">
        <i class="bx bxl-github"></i>
        </a>
        </div>

        <span className="footer__copy">
          &#169;All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer