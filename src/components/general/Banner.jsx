import "./styles/banner.css";
import iconNavBar from "../../images/utils/bars-solid.svg";
import React, { useState } from 'react';


function Banner() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
    const mobileMenuClass = isMobileMenuOpen ? 'mobile-display' : '';


    return (
        <div className={`navbar ${mobileMenuClass}`}>
          <p className="logo">PORTFOLIO</p>
    
          <div className="nav-links">
            <ul>
              <li className="active">Accueil</li>
              <li>Profil</li>
              <li>Parcours</li>
              <li>Réalisations</li>
              <li>Contact</li>
            </ul>
          </div>
          <img
            src={iconNavBar}
            alt="menu"
            className="menu-mobile"
            onClick={toggleMobileMenu}
          />
        </div>
      );
    }
    
    export default Banner;
