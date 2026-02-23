"use client";
import React from "react";
import Link from "next/link";

const BookButton = ({ 
  children, 
  className = "", 
  variant = "primary", 
  size = "md",
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent to-[#FFCB45] text-darkblue hover:from-[#FFCB45] hover:to-accent shadow-md hover:shadow-accent transform hover:-translate-y-0.5",
  };

  const sizes = {
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    sm: "px-4 py-2 text-sm",
  };

  return (
    <Link href="/kontakt">
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default BookButton;