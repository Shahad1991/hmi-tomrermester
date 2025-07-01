"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import BookButton from "./buttons/BookButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeAll = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Liste over alle ydelser
  const services = [
    { name: "Køkken Montage", href: "/ydelser/kokken" },
    { name: "Badeværelser", href: "/ydelser/bad" },
    { name: "Døre og Vinduer", href: "/ydelser/døre-vinduer" },
    { name: "Gipsarbejde", href: "/ydelser/gipsarbejde" },
    { name: "Gulv", href: "/ydelser/gulv" },
    { name: "Hegn", href: "/ydelser/hegn" },
    { name: "Kakkel", href: "/ydelser/kakkel" },
    { name: "Renovering", href: "/ydelser/renovering" },
    { name: "Tag", href: "/ydelser/tag" },
    { name: "Terrasse", href: "/ydelser/terrasse" },
    { name: "Andre Opgaver", href: "/ydelser/andre-opgaver" }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white py-4 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={closeAll}>
            <Image
              src="/images/logo/logo.svg"
              alt="Logo"
              width={140}
              height={60}
              priority
              className="hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" isScrolled={isScrolled} onClick={closeAll}>
              Forside
            </NavLink>
            
            <DropdownMenu 
              title="Ydelser" 
              isScrolled={isScrolled}
              isOpen={openDropdown === "services"}
              onClick={() => toggleDropdown("services")}
            >
              {services.map((service) => (
                <DropdownItem key={service.href} href={service.href} onClick={closeAll}>
                  {service.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
            
            <NavLink href="/galleri" isScrolled={isScrolled} onClick={closeAll}>
              Galleri
            </NavLink>
            
            <NavLink href="/om-os" isScrolled={isScrolled} onClick={closeAll}>
              Om Os
            </NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-6">
            <BookButton size="lg" className="group">
              <span className="group-hover:scale-105 transition-transform font-serif">
                Book et møde
              </span>
            </BookButton>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-darkblue hover:text-accent transition-colors"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-4 pb-6 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="/" onClick={closeAll}>
              Forside
            </MobileNavLink>
            
            <div className="border-t border-gray-100 pt-2">
              <MobileDropdown title="Ydelser">
                {services.map((service) => (
                  <DropdownItem key={service.href} href={service.href} onClick={closeAll}>
                    {service.name}
                  </DropdownItem>
                ))}
              </MobileDropdown>
            </div>
            
            <MobileNavLink href="/galleri" onClick={closeAll}>
              Galleri
            </MobileNavLink>
            
            <MobileNavLink href="/om-os" onClick={closeAll}>
              Om Os
            </MobileNavLink>
            
            <div className="pt-4">
              <BookButton className="w-full" size="lg" onClick={closeAll}>
                Book et møde
              </BookButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hjælpekomponenter med større skrift
const NavLink = ({ href, children, isScrolled, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`px-3 py-2 text-darkblue hover:text-accent font-medium transition-colors text-lg ${
      isScrolled ? "text-darkblue" : "text-darkblue"
    }`}
  >
    {children}
  </Link>
);

const DropdownMenu = ({ title, children, isOpen, onClick, isScrolled }) => (
  <div className="relative">
    <button
      onClick={onClick}
      className={`px-3 py-2 flex items-center text-darkblue hover:text-accent font-medium transition-colors text-lg ${
        isScrolled ? "text-darkblue" : "text-darkblue"
      }`}
    >
      {title}
      <ChevronDown
        className={`ml-2 w-5 h-5 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && (
      <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50 max-h-[70vh] overflow-y-auto">
        {children}
      </div>
    )}
  </div>
);

const DropdownItem = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-4 py-3 text-gray-700 hover:bg-accent/5 hover:text-accent transition-colors border-b border-gray-100 last:border-b-0 text-base"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="py-3 px-4 text-lg text-darkblue hover:text-accent font-medium border-b border-gray-100"
  >
    {children}
  </Link>
);

const MobileDropdown = ({ title, children }) => (
  <details className="group">
    <summary className="py-3 px-4 text-lg text-darkblue hover:text-accent font-medium border-b border-gray-100 list-none flex justify-between items-center cursor-pointer">
      {title}
      <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
    </summary>
    <div className="pl-4 pt-2 pb-4">
      {children}
    </div>
  </details>
);

export default Navbar;