"use client";
import Link from "next/link";

const DropdownItem = ({ href, children, onClick, role = "menuitem" }) => (
  <Link
    href={href}
    onClick={onClick}
    role={role}
    tabIndex={0}
    className="block px-4 py-3 my-1 text-gray-700 dark:text-dark-text hover:bg-accent/5 hover:text-accent transition-all duration-200 border-b border-gray-100 dark:border-gray-600 last:border-b-0 text-base rounded-lg mx-1 focus:outline-none focus:bg-accent/10"
    aria-label={typeof children === 'string' ? children : undefined}
  >
    {children}
  </Link>
);

export default DropdownItem;