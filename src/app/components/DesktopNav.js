"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; // Tilføjet pil-ned-ikon

const DesktopNav = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  return (
    <div className="hidden md:flex items-center h-full space-x-6">
      <Link
        href="/"
        className="text-gray-700 hover:text-amber-600 px-4 py-2 h-full flex items-center border-b-2 border-transparent hover:border-amber-600 transition-colors duration-200"
      >
        Forside
      </Link>

      <div className="relative h-full flex items-center">
        <button
          onClick={toggleDropdown}
          className={`text-gray-700 hover:text-amber-600 px-4 py-2 h-full flex items-center border-b-2 ${
            isDropdownActive
              ? "border-amber-600"
              : "border-transparent hover:border-amber-600"
          } transition-colors duration-200`}
        >
          Ydelser
          <ChevronDown className="ml-2 w-4 h-4 text-gray-700" /> {/* Pil-ned-ikon */}
        </button>
        {isDropdownActive && (
          <div className="absolute left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
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

      <Link
        href="/galleri"
        className="text-gray-700 hover:text-amber-600 px-4 py-2 h-full flex items-center border-b-2 border-transparent hover:border-amber-600 transition-colors duration-200"
      >
        Galleri
      </Link>
      <Link
        href="/om-os"
        className="text-gray-700 hover:text-amber-600 px-4 py-2 h-full flex items-center border-b-2 border-transparent hover:border-amber-600 transition-colors duration-200"
      >
        Om Os
      </Link>
      <Link
        href="/kontakt"
        className="text-gray-700 hover:text-amber-600 px-4 py-2 h-full flex items-center border-b-2 border-transparent hover:border-amber-600 transition-colors duration-200"
      >
        Kontakt
      </Link>
    </div>
  );
};

export default DesktopNav;