"use client";
import { ChevronDown } from "lucide-react";

export const MobileDropdown = ({ title, children, pathname }) => {
  const isYdelserActive = pathname?.startsWith('/ydelser');
  
  return (
    <details className="group">
      <summary className={`py-2 px-4 text-lg font-medium rounded-xl list-none flex justify-between items-center cursor-pointer relative overflow-hidden transition-all duration-200 ${
        isYdelserActive 
          ? "text-accent bg-accent/5" 
          : "text-darkblue dark:text-dark-text hover:text-accent hover:bg-accent/5"
      }`}>
        <span className="relative z-10">{title}</span>
        {isYdelserActive && (
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full"></div>
        )}
        <ChevronDown className="w-6 h-6 group-open:rotate-180 transition-transform duration-200" strokeWidth={1.5} />
      </summary>
      <div className="ml-4 mt-2 space-y-2">
        {children}
      </div>
    </details>
  );
};

export default MobileDropdown;