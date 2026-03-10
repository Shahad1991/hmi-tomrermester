"use client";
import Link from "next/link";

const NavLink = ({ href, children, isScrolled, onClick, pathname }) => {
  const isActive = pathname === href || (href === "/" && pathname === "/forside");
  
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-3 py-2 font-medium transition-colors text-lg relative ${
        isScrolled ? "text-darkblue dark:text-dark-text" : "text-darkblue dark:text-dark-text"
      } ${isActive ? "text-accent" : "text-darkblue dark:text-dark-text hover:text-accent"}`}
    >
      {children}
      {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>}
    </Link>
  );
};

export default NavLink;