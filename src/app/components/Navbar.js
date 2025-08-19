"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import BookButton from "./buttons/BookButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeAll = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-menu')) {
        setOpenDropdown(null);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Liste over alle ydelser
  const services = [
     { name: "Carport", href: "/ydelser/carport" },
    { name: "Terrasse", href: "/ydelser/terrasse" },
    { name: "Dør og Vinduer", href: "/ydelser/dor-vinduer" },
    { name: "Gipsarbejde", href: "/ydelser/gipsarbejde" },
    { name: "Gulv", href: "/ydelser/gulv" },
    { name: "Hegn", href: "/ydelser/hegn" },
    { name: "Renovering", href: "/ydelser/renovering" },
    { name: "Køkken Renovering", href: "/ydelser/kokken" },
    { name: "Total Renovering", href: "/ydelser/total-renovering" },
    { name: "Andre Opgaver", href: "/ydelser/andre-opgaver" }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-4 transition-all duration-300 ${
        isMounted && isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
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
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" isScrolled={isScrolled} onClick={closeAll} pathname={pathname}>
              Forside
            </NavLink>
            
            <DropdownMenu 
              title="Ydelser" 
              isScrolled={isScrolled}
              isOpen={isMounted && openDropdown === "services"}
              onClick={() => toggleDropdown("services")}
              pathname={pathname}
            >
              {services.map((service) => (
                <DropdownItem key={service.href} href={service.href} onClick={closeAll}>
                  {service.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
            
            <NavLink href="/galleri" isScrolled={isScrolled} onClick={closeAll} pathname={pathname}>
              Galleri
            </NavLink>
            
            <NavLink href="/om-os" isScrolled={isScrolled} onClick={closeAll} pathname={pathname}>
              Om os
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
            className="md:hidden p-2 rounded-md"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMounted && isOpen ? <X size={70} /> : <Menu size={70} strokeWidth={1.2}/>}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMounted && isOpen && (
        <div className="md:hidden fixed inset-0 z-40 overflow-y-auto bg-white">
          {/* Mobile Header with Close Button */}
          <div className="py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <Link href="/" className="flex-shrink-0" onClick={closeAll}>
                  <Image
                    src="/images/logo/logo.svg"
                    alt="Logo"
                    width={160}
                    height={70}
                  />
                </Link>
                <button
                  className="p-2 rounded-md text-darkblue hover:text-accent transition-colors"
                  onClick={closeAll}
                  aria-label="Luk menu"
                >
                  <X size={70} strokeWidth={1.2} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Content */}
          <div className="px-6 py-8">
            <div className="flex flex-col space-y-2">
              <MobileNavLink href="/" onClick={closeAll} pathname={pathname}>
                Forside
              </MobileNavLink>
              
              <div className="py-2">
                <MobileDropdown title="Ydelser" pathname={pathname}>
                  {services.map((service) => (
                    <DropdownItem key={service.href} href={service.href} onClick={closeAll}>
                      {service.name}
                    </DropdownItem>
                  ))}
                </MobileDropdown>
              </div>
              
              <MobileNavLink href="/galleri" onClick={closeAll} pathname={pathname}>
                Galleri
              </MobileNavLink>
              
              <MobileNavLink href="/om-os" onClick={closeAll} pathname={pathname}>
                Om Os
              </MobileNavLink>
              
              <div className="pt-8 mt-8">
                <Link href="/kontakt" onClick={closeAll}>
                  <button className="w-full px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all duration-200 font-semibold text-lg">
                    Book et møde
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hjælpekomponenter med større skrift
const NavLink = ({ href, children, isScrolled, onClick, pathname }) => {
  const isActive = pathname === href || (href === "/" && pathname === "/forside");
  
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-3 py-2 font-medium transition-colors text-lg relative ${
        isScrolled ? "text-darkblue" : "text-darkblue"
      } ${isActive ? "text-accent" : "text-darkblue hover:text-accent"}`}
    >
      {children}
      {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>}
    </Link>
  );
};

const DropdownMenu = ({ title, children, isOpen, onClick, isScrolled, pathname }) => {
  const isYdelserActive = pathname?.startsWith('/ydelser');
  
  return (
    <div className="relative dropdown-menu">
      <button
        onClick={onClick}
        className={`px-3 py-2 flex items-center font-medium transition-colors text-lg relative ${
          isScrolled ? "text-darkblue" : "text-darkblue"
        } ${isOpen || isYdelserActive ? "text-accent" : "text-darkblue hover:text-accent"}`}
      >
        {title}
        {(isOpen || isYdelserActive) && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>}
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
};

const DropdownItem = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-4 py-3 text-gray-700 hover:bg-accent/5 hover:text-accent transition-all duration-200 border-b border-gray-100 last:border-b-0 text-base rounded-lg mx-1"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, onClick, pathname }) => {
  const isActive = pathname === href || (href === "/" && pathname === "/forside");
  
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`py-4 px-4 text-lg font-medium rounded-xl transition-all duration-200 relative overflow-hidden group ${
        isActive 
          ? "text-accent bg-accent/5" 
          : "text-darkblue hover:text-accent hover:bg-accent/5"
      }`}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full"></div>
      )}
    </Link>
  );
};

const MobileDropdown = ({ title, children, pathname }) => {
  const isYdelserActive = pathname?.startsWith('/ydelser');
  
  return (
    <details className="group">
      <summary className={`py-4 px-4 text-lg font-medium rounded-xl list-none flex justify-between items-center cursor-pointer relative overflow-hidden transition-all duration-200 ${
        isYdelserActive 
          ? "text-accent bg-accent/5" 
          : "text-darkblue hover:text-accent hover:bg-accent/5"
      }`}>
        <span className="relative z-10">{title}</span>
        {isYdelserActive && (
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full"></div>
        )}
        <ChevronDown className="w-6 h-6 group-open:rotate-180 transition-transform duration-200" strokeWidth={1.5} />
      </summary>
      <div className="ml-4 mt-2 space-y-1">
        {children}
      </div>
    </details>
  );
};

export default Navbar;