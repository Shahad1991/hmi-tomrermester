"use client";
import Link from "next/link";

const MobileNavLink = ({ href, children, onClick, pathname }) => {
  const isActive = pathname === href || (href === "/" && pathname === "/forside");
  
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`py-2 px-4 text-lg font-medium rounded-xl transition-all duration-200 relative overflow-hidden group ${
        isActive 
          ? "text-accent bg-accent/5" 
          : "text-darkblue dark:text-dark-text hover:text-accent hover:bg-accent/5"
      }`}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full"></div>
      )}
    </Link>
  );
};

export default MobileNavLink;