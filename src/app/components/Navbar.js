"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "../globals.css";


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
          <Link href="/" className="navbar-item">
            <Image
              src="/logo.svg" 
              alt="Logo" 
              width="112" 
              height="28"
            />
          </Link>

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
            <Link href="/" className="navbar-item">Forside</Link>
            
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
                <Link href="/ydelser/køkken" className="navbar-item">Køkken montage</Link>
                <Link href="/ydelser/hegn" className="navbar-item">Hegn</Link>
                <Link href="/ydelser/renovering" className="navbar-item">Renovering</Link>
                <Link href="/ydelser/gipsarbejde" className="navbar-item">Gipsarbejde</Link>
                <Link href="/ydelser/døre og vinduer" className="navbar-item">Døre og viduer</Link>
                <Link href="/ydelser/terrase" className="navbar-item">Terrasse</Link>
                <Link href="/ydelser/gulv" className="navbar-item">Gulv</Link>
                <Link href="/ydelser/andre opgaver" className="navbar-item">Andre opgaver</Link>
              </div>
            </div>
            
            <Link href="/galleri" className="navbar-item">Galleri</Link>
            <Link href="/om os" className="navbar-item">Om os</Link>
          </div>

          {/* Right side - Button */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link href="/kontakt" className="button is-primary">
                  <strong>Book et Møde</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;