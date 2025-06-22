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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24"> {/* Øget højde */}
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
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className={`text-gray-700 hover:text-amber-600 ${
                isScrolled ? "text-gray-900" : "text-gray-700"
              }`}
            >
              Forside
            </Link>
            <div className="relative">
              <button
                className={`text-gray-700 hover:text-amber-600 flex items-center ${
                  isScrolled ? "text-gray-900" : "text-gray-700"
                }`}
                onClick={() => toggleDropdown("services")}
              >
                Ydelser
                <ChevronDown
                  className={`ml-2 w-5 h-5 transition-transform ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "services" && (
                <ul className="absolute left-0 top-full mt-2 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                  <li>
                    <Link
                      href="/ydelser/køkken"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={closeAll}
                    >
                      Køkken Montage
                    </Link>
                  </li>
                  {/* Flere links */}
                </ul>
              )}
            </div>
            <Link
              href="/galleri"
              className={`text-gray-700 hover:text-amber-600 ${
                isScrolled ? "text-gray-900" : "text-gray-700"
              }`}
            >
              Galleri
            </Link>
            <Link
              href="/om-os"
              className={`text-gray-700 hover:text-amber-600 ${
                isScrolled ? "text-gray-900" : "text-gray-700"
              }`}
            >
              Om Os
            </Link>
            
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-4">
          <BookButton className="py-3 px-6"  >
            Book et møde
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
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button
                className="text-gray-700 hover:text-amber-600 p-2 rounded-md transition-colors duration-200"
                onClick={closeAll}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-gray-700 hover:text-amber-600 text-lg"
                  onClick={closeAll}
                >
                  Forside
                </Link>
              </li>
              {/* Flere links */}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;