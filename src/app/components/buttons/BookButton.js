"use client";
import React from "react";

const BookButton = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary", 
  size = "md",
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent to-[#FFCB45] text-darkblue hover:from-[#FFCB45] hover:to-accent shadow-md hover:shadow-accent transform hover:-translate-y-0.5",
    secondary: "bg-transparent text-darkblue border-2 border-accent hover:bg-accent/10",
    ghost: "bg-transparent text-darkblue hover:bg-accent/5",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BookButton;