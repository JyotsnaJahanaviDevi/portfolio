import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    // change background header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 560 viewport height, add 
        // the scroll-header class to a tag with the header class
        if (this.scrollY >= 80) header.classList.add
        ("scroll-header");
        else header.classList.remove("scroll-header");
    });

    // toggle menu
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                Jyotsna
            </a>

            <div className={Toggle ? "nav_menu show-menu" :
            "nav__menu"}>

                {/*home  */}
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" 
                        onClick={() => setActiveNav("#home")} 
                        className={
                            activeNav === "#home"?"nav__link active-link" 
                            : "nav__link"}>
                        <i class="uil uil-home"></i>
                            Home
                        </a>
                    </li> 

                    {/* about */}
                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav("#about")} 
                        className={
                            activeNav === "#about"?"nav__link active-link" 
                            : "nav__link"} >
                            <i class="uil uil-user"></i>
                            About
                        </a>
                    </li>

                    {/* qualification */}
                    <li className="nav__item">
                        <a href="#qualification" onClick={() => setActiveNav("#qualification")} 
                        className={
                            activeNav === "#qualification"?"nav__link active-link" 
                            : "nav__link"} >
                            <i class="uil uil-graduation-cap"></i>
                            Qualification
                        </a>
                    </li>  
                    
                    {/* skills */}
                    <li className="nav__item">
                        <a href="#skills"
                        onClick={() => setActiveNav("#skills")} 
                        className={
                            activeNav === "#skills"?"nav__link active-link" 
                            : "nav__link"} 
                        >
                            <i class="uil uil-brain"></i>
                            Skills
                        </a>
                    </li> 

                    {/* portfolio */}
                    <li className="nav__item">
                        <a href="#projects" 
                        onClick={() => setActiveNav("#projects")} 
                        className={
                            activeNav === "#projects"?"nav__link active-link" 
                            : "nav__link"}
                        >
                        <i class="uil uil-scenery"></i>
                            Projects
                        </a>
                    </li>
                          
                    {/* services */}
                    <li className="nav__item">
                        <a href="#services" 
                        onClick={() => setActiveNav("#services")} 
                        className={
                            activeNav === "#services"?"nav__link active-link" 
                            : "nav__link"}
                        >
                        <i class="uil uil-smile"></i> 
                            Services
                        </a>
                    </li> 
                    
                    {/* contact */}
                    <li className="nav__item">
                        <a href="#contact"
                        onClick={() => setActiveNav("#contact")} 
                        className={
                            activeNav === "#contact"?"nav__link active-link" 
                            : "nav__link"} 
                        >
                            <i class="uil uil-message"></i>
                            Contact
                        </a>
                    </li>  
                    
                    

                             
                </ul>
                <i class="uil uil-times nav__close" onClick={() => showMenu
            (!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu
            (!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  );
};

export default Header;