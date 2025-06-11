"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import MobileNav from "./MobileNav";
import BookButton from "./ui/BookButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeAll = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-black-200">
        <div className="flex justify-between items-center h-2 py-2">
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
            <Link href="/ydelser" className="text-gray-700 hover:text-amber-600">
              Ydelser
            </Link>
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