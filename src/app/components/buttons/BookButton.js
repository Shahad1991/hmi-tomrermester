"use client";
import React from "react";

const BookButton = ({ children, onClick, className = "", variant = "primary", size = "md" }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-amber-600 shadow-lg hover:shadow-accent-md", // Brug 'bg-accent' og shadow
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default BookButton;