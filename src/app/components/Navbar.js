import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/index.css';


const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    // Close all dropdowns when mobile menu is toggled
    if (!isMenuActive) setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="navbar is-fixed-top py-5 py-4-tablet py-3-mobile" role="navigation" aria-label="main navigation">
      <div className="container">
        {/* Left side - Logo */}
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img 
              src="/logo.png" 
              alt="Logo" 
              width="112" 
              height="28"
            />
          </a>

          {/* Hamburger menu for mobile */}
          <button
            className={`navbar-burger ${isMenuActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={isMenuActive}
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        {/* Center - Navigation items with click-only dropdowns */}
        <div className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}>
          <div className="navbar-start" style={{ margin: 'auto' }}>
            <a className="navbar-item" href="/">Forside</a>
            
            {/* Services dropdown - click only */}
            <div className={`navbar-item has-dropdown ${activeDropdown === 'services' ? 'is-active' : ''}`}>
              <div 
                className="navbar-link"
                onClick={() => toggleDropdown('services')}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'services'}
              >
                
              Ydelser
              </div>
              <div className={`navbar-dropdown ${activeDropdown === 'services' ? 'is-active' : ''}`}>
                <a className="navbar-item" href="/services/kitchen">Køkken montage</a>
                <a className="navbar-item" href="/services/fence">Hegn</a>
                <a className="navbar-item" href="/services/renovation">Renovering</a>
                <a className="navbar-item" href="/services/gips">Gipsarbejde</a>
                <a className="navbar-item" href="/services/windowsAndDoors">Døre og viduer</a>
                <a className="navbar-item" href="/services/terrace">Terrasse</a>
                <a className="navbar-item" href="/services/floor">Gulv</a>
                <a className="navbar-item" href="/services/otherService">Andre opgaver</a>
               


              </div>
            </div>
            
            
            <a className="navbar-item" href="/about">Galleri</a>
            <a className="navbar-item" href="/about">Om os</a>
          
          </div>

          {/* Right side - Button */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="/signup">
                  <strong>Book et Møde</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;