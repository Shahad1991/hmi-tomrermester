"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import BookButton from "./buttons/BookButton"; // Assuming you have a BookButton component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeAll = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
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
            <Link href="/" className="text-gray-700 hover:text-amber-600">
              Forside
            </Link>
            <div className="relative">
              <button
                className="text-gray-700 hover:text-amber-600 flex items-center"
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
                  <li>
                    <Link
                      href="/ydelser/hegn"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={closeAll}
                    >
                      Hegn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ydelser/renovering"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={closeAll}
                    >
                      Renovering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ydelser/gipsarbejde"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={closeAll}
                    >
                      Gipsarbejde
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ydelser/døre-og-vinduer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={closeAll}
                    >
                      Døre og Vinduer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ydelser/terrase"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={closeAll}
                    >
                      Terrasse
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ydelser/gulv"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={closeAll}
                    >
                      Gulv
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ydelser/tag"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={closeAll}
                    >
                      Tag
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ydelser/andre-opgaver"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={closeAll}
                    >
                      Andre Opgaver
                    </Link>
                  </li>
                </ul>
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
              <li>
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-amber-600 text-lg"
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
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <Link
                        href="/ydelser/køkken"
                        className="block py-2 text-gray-600 hover:text-amber-600"
                        onClick={closeAll}
                      >
                        Køkken Montage
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ydelser/hegn"
                        className="block py-2 text-gray-600 hover:text-amber-600"
                        onClick={closeAll}
                      >
                        Hegn
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ydelser/renovering"
                        className="block py-2 text-gray-600 hover:text-amber-600"
                        onClick={closeAll}
                      >
                        Renovering
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ydelser/gipsarbejde"
                        className="block py-2 text-gray-600 hover:text-amber-600"
                        onClick={closeAll}
                      >
                        Gipsarbejde
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ydelser/døre-og-vinduer"
                        className="block py-2 text-gray-600 hover:text-amber-600"
                        onClick={closeAll}
                      >
                        Døre og Vinduer
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ydelser/terrase"
                        className="block py-2 text-gray-600 hover:text-amber-600"
                        onClick={closeAll}
                      >
                        Terrasse
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ydelser/gulv"
                        className="block py-2 text-gray-600 hover:text-amber-600"
                        onClick={closeAll}
                      >
                        Gulv
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ydelser/tag"
                        className="block py-2 text-gray-600 hover:text-amber-600"
                        onClick={closeAll}
                      >
                        Tag
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ydelser/andre-opgaver"
                        className="block py-2 text-gray-600 hover:text-amber-600"
                        onClick={closeAll}
                      >
                        Andre Opgaver
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/galleri"
                  className="block py-2 text-gray-700 hover:text-amber-600 text-lg"
                  onClick={closeAll}
                >
                  Galleri
                </Link>
              </li>
              <li>
                <Link
                  href="/om-os"
                  className="block py-2 text-gray-700 hover:text-amber-600 text-lg"
                  onClick={closeAll}
                >
                  Om Os
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="block py-2 text-gray-700 hover:text-amber-600 text-lg"
                  onClick={closeAll}
                >
                  Kontakt
                </Link>
              </li>
              <li className="pt-4">
                <Link
                  href="/faa-tilbud"
                  className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center py-3 px-4 rounded-md text-lg font-medium"
                  onClick={closeAll}
                >
                  Få Tilbud
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;