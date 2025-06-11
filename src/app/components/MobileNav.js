"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react"; // Tilføjet ChevronDown til dropdown
import MobileNav from "./MobileNav";
import BookButton from "./ui/BookButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false); // Tilføjet til dropdown-menuen

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const closeAll = () => {
    setIsOpen(false);
    setIsDropdownActive(false); // Lukker dropdown-menuen
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-black-200">
        <div className="flex justify-between items-center h-20 py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={90}
                className="mr-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-amber-600">
              Forside
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-amber-600 flex items-center"
              >
                Ydelser
                <ChevronDown className="ml-2 w-4 h-4" />
              </button>
              {isDropdownActive && (
                <div className="absolute left-0 top-full mt-2 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                  <Link
                    href="/ydelser/køkken"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Køkken Montage
                  </Link>
                  <Link
                    href="/ydelser/hegn"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Hegn
                  </Link>
                  <Link
                    href="/ydelser/renovering"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Renovering
                  </Link>
                  <Link
                    href="/ydelser/gipsarbejde"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Gipsarbejde
                  </Link>
                  <Link
                    href="/ydelser/døre-og-vinduer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Døre og Vinduer
                  </Link>
                  <Link
                    href="/ydelser/terrase"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Terrasse
                  </Link>
                  <Link
                    href="/ydelser/gulv"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Gulv
                  </Link>
                  <Link
                    href="/ydelser/andre-opgaver"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
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
            <BookButton className="bg-amber-600 hover:bg-amber-700 text-white">
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