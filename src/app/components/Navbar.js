"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Adjusted import for Next.js Image component

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  return (
    <nav className="bg-gray-800 text-white py-10 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link  href="/" className="text-lg font-bold">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100} // Tilføjet bredde
              height={50} // Tilføjet højde
              className=" mr-2"
            />
          </Link>
        </div>

        {/* Hamburger menu */}
        <button
          className={`text-white ${isMenuActive ? "bg-gray-700" : "bg-gray-800"} px-4 py-2 rounded md:hidden`}
          onClick={toggleMenu}
        >
          Menu
        </button>

        {/* Navigation items */}
        <div
          className={`${
            isMenuActive ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 text-white`}
        >
          <Link href="/" className="hover:text-gray-400">
            Forside
          </Link>
          <div className="relative">
            <button
              className="hover:text-gray-400"
              onClick={toggleDropdown}
            >
              Ydelser
            </button>
            {isDropdownActive && (
              <div className="absolute left-0 mt-2 bg-gray-700 text-white rounded shadow-lg">
                <Link href="/ydelser/køkken" className="block px-4 py-2 hover:bg-gray-600">
                  Køkken montage
                </Link>
                <Link href="/ydelser/hegn" className="block px-4 py-2 hover:bg-gray-600">
                  Hegn
                </Link>
                <Link href="/ydelser/renovering" className="block px-4 py-2 hover:bg-gray-600">
                  Renovering
                </Link>
                <Link href="/ydelser/gipsarbejde" className="block px-4 py-2 hover:bg-gray-600">
                  Gipsarbejde
                </Link>
                <Link href="/ydelser/døre og vinduer" className="block px-4 py-2 hover:bg-gray-600">
                  Døre og vinduer
                </Link>
                <Link href="/ydelser/terrase" className="block px-4 py-2 hover:bg-gray-600">
                  Terrasse
                </Link>
                <Link href="/ydelser/gulv" className="block px-4 py-2 hover:bg-gray-600">
                  Gulv
                </Link>
                <Link href="/ydelser/andre opgaver" className="block px-4 py-2 hover:bg-gray-600">
                  Andre opgaver
                </Link>
              </div>
            )}
          </div>
          <Link href="/galleri" className="hover:text-gray-400">
            Galleri
          </Link>
          <Link href="/om os" className="hover:text-gray-400">
            Om os
          </Link>
          <Link href="/kontakt" className="hover:text-gray-400">
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;