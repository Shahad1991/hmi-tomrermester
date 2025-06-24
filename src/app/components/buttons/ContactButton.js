import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ContactButton = ({
  href = '/kontakt',
  text = 'Kontakt os',
  className = '',
  icon = <ArrowRight className="ml-3 w-5 h-5" />,
  variant = 'primary'
}) => {
  const baseClasses = 'group relative overflow-hidden inline-flex items-center justify-center px-8 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1';
  
  const variantClasses = {
    primary: 'bg-gradient-to-br from-accent via-[#FFC600] to-[#FFB600] text-darkblue hover:shadow-accent',
    secondary: 'bg-darkblue text-white hover:shadow-darkblue'
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center font-serif">
        {text}
        <span className="transition-transform duration-300 group-hover:translate-x-1 ">
          {icon}
        </span>
      </span>
      <span className={`absolute inset-0 bg-gradient-to-r from-transparent to-white/20 group-hover:opacity-50 transition-opacity duration-300 ${
        variant === 'secondary' ? 'opacity-20' : ''
      }`}></span>
    </Link>
  );
};

export default ContactButton;