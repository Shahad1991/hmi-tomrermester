"use client";
import { ChevronDown } from "lucide-react";

const DropdownMenu = ({ title, children, isOpen, onClick, isScrolled, pathname }) => {
  const isYdelserActive = pathname?.startsWith('/ydelser');
  const dropdownId = "services-dropdown";

  return (
    <div className="relative dropdown-menu">
      <button
        onClick={onClick}
        aria-haspopup="true"
        aria-expanded={isOpen || isYdelserActive}
        aria-controls={dropdownId}
        tabIndex={0}
        className={`px-3 py-2 flex items-center font-medium transition-colors text-lg relative focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
          isScrolled ? "text-darkblue dark:text-dark-text" : "text-darkblue dark:text-dark-text"
        } ${isOpen || isYdelserActive ? "text-accent" : "text-darkblue dark:text-dark-text hover:text-accent"}`}
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
        <div
          id={dropdownId}
          role="menu"
          className="absolute left-0 mt-2 w-56 bg-white dark:bg-dark-surface rounded-lg shadow-xl border border-gray-100 dark:border-gray-600 z-50 max-h-[70vh] overflow-y-auto focus:outline-none"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;