"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const MobileNav = ({ isOpen, closeAll }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div
      className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ top: "5rem" }} // Juster efter din navbar-højde
    >
      <div className="container mx-auto px-4 py-6 overflow-y-auto h-full">
        <ul className="flex flex-col space-y-4">
          {/* Forside link */}
          <li>
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-amber-600 text-lg"
              onClick={closeAll}
            >
              Forside
            </Link>
          </li>

          {/* Dropdown for Ydelser */}
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

          {/* Galleri link */}
          <li>
            <Link
              href="/galleri"
              className="block py-2 text-gray-700 hover:text-amber-600 text-lg"
              onClick={closeAll}
            >
              Galleri
            </Link>
          </li>

          {/* Om Os link */}
          <li>
            <Link
              href="/om-os"
              className="block py-2 text-gray-700 hover:text-amber-600 text-lg"
              onClick={closeAll}
            >
              Om Os
            </Link>
          </li>

          {/* Kontakt link */}
          <li>
            <Link
              href="/kontakt"
              className="block py-2 text-gray-700 hover:text-amber-600 text-lg"
              onClick={closeAll}
            >
              Kontakt
            </Link>
          </li>

          {/* CTA Button */}
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
  );
};

export default MobileNav;