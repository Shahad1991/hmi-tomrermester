"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import BookButton from "./buttons/BookButton";
import DarkModeToggle from "./buttons/DarkModeToggle";
import Logo from "./Logo";
import NavLink from "./navbar/NavLink";
import DropdownMenu from "./navbar/DropdownMenu";
import DropdownItem from "./navbar/DropdownItem";
import MobileNavLink from "./navbar/MobileNavLink";
import MobileDropdown from "./navbar/MobileDropdown";

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
    { name: "Køkken Renovering", href: "/ydelser/kokken-renovering" },
    { name: "Total Renovering", href: "/ydelser/total-renovering" },
    { name: "Andre Opgaver", href: "/ydelser/andre-opgaver" }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-4 transition-all duration-300 bg-white dark:bg-dark-surface ${
        isMounted && isScrolled ? "shadow-lg dark:shadow-gray-700/50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={closeAll}>
            <Logo
              width={150}
              height={65}
              className="text-black dark:text-white transition-colors duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
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

          {/* CTA Button and Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <DarkModeToggle />
           <BookButton className="group" />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMounted && isOpen ? <X size={50} /> : <Menu size={50} strokeWidth={1.0}/>}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMounted && isOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] overflow-y-auto bg-white dark:bg-dark-surface shadow-lg">
          {/* Mobile Header with Close Button */}
          <div className="py-4 shadow-sm mb-4 bg-white dark:bg-dark-surface sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <Link href="/" className="flex-shrink-0" onClick={closeAll}>
                  <Logo
                    width={150}
                    height={65}
                    className="text-black dark:text-white transition-colors duration-200"
                  />
                </Link>
                <div className="flex items-center space-x-3">
                  <DarkModeToggle />
                  <button
                    className="p-2 rounded-md text-darkblue dark:text-dark-text hover:text-accent transition-colors"
                    onClick={closeAll}
                    aria-label="Luk menu"
                  >
                    <X size={40} strokeWidth={1.0} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Content */}
          <div className="px-6 py-4 space-y-3">
            <div className="flex flex-col">
              <MobileNavLink href="/" onClick={closeAll} pathname={pathname}>
                Forside
              </MobileNavLink>
              
              <MobileDropdown title="Ydelser" pathname={pathname}>
                {services.map((service) => (
                  <DropdownItem key={service.href} href={service.href} onClick={closeAll}>
                    {service.name}
                  </DropdownItem>
                ))}
              </MobileDropdown>
              
              <MobileNavLink href="/galleri" onClick={closeAll} pathname={pathname}>
                Galleri
              </MobileNavLink>
              
              <MobileNavLink href="/om-os" onClick={closeAll} pathname={pathname}>
                Om Os
              </MobileNavLink>
              
              <div className="pt-4">
                <BookButton className="w-full" onClick={closeAll} />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;