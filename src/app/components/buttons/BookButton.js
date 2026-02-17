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