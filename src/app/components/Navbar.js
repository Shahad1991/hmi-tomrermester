"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import MobileNav from "./MobileNav";
import BookButton from "./ui/BookButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeAll = () => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="flex justify-between items-center h-20 py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={90}
                priority
                className="mr-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-amber-600">
              Forside
            </Link>
            
            {/* Ydelser with dropdown - fixed hydration */}
            <div className="relative">
              <div className="flex items-center">
                <Link 
                  href="/ydelser" 
                  className="text-gray-700 hover:text-amber-600"
                  onClick={closeAll}
                >
                  Ydelser
                </Link>
                <button
                  onClick={handleServicesClick}
                  className="ml-1 text-gray-700 hover:text-amber-600 focus:outline-none"
                  aria-label="Toggle dropdown"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              
              {isMounted && servicesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link href="/ydelser/køkken" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600" onClick={closeAll}>
                    Køkken Montage
                  </Link>
                  <Link href="/ydelser/hegn" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600" onClick={closeAll}>
                    Hegn
                  </Link>
                  <Link href="/ydelser/renovering" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600" onClick={closeAll}>
                    Renovering
                  </Link>
                  <Link href="/ydelser/gipsarbejde" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600" onClick={closeAll}>
                    Gipsarbejde
                  </Link>
                  <Link href="/ydelser/døre-og-vinduer" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600" onClick={closeAll}>
                    Døre og Vinduer
                  </Link>
                  <Link href="/ydelser/terrase" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600" onClick={closeAll}>
                    Terrasse
                  </Link>
                  <Link href="/ydelser/gulv" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600" onClick={closeAll}>
                    Gulv
                  </Link>
                  <Link href="/ydelser/andre-opgaver" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600" onClick={closeAll}>
                    Andre Opgaver
                  </Link>
                </div>
              )}
            </div>

            <Link href="/galleri" className="text-gray-700 hover:text-amber-600">
              Galleri
            </Link>
            <Link href="/om-os" className="text-gray-700 hover:text-amber-600">
              Om Os
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-amber-600">
              Kontakt
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-4">
            <BookButton className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md">
              Få Tilbud
            </BookButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-amber-600 p-2 rounded-md transition-colors duration-200"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} closeAll={closeAll} />
    </nav>
  );
};

export default Navbar;