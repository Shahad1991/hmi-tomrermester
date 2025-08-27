'use client';
import { Instagram } from 'lucide-react';
import { trackInstagramClick } from '../GoogleAnalytics';

export default function InstagramButton() {
  return (
    <a 
      href="https://www.instagram.com/hmitomrermester" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3 bg-gradient-to-br from-accent via-[#FFC600] to-[#FFB600] text-darkblue font-semibold rounded-lg shadow-lg hover:shadow-accent transition-all duration-300 text-lg transform hover:-translate-y-1"
      onClick={trackInstagramClick}
    >
      <span className="relative z-10 flex items-center font-serif">
        Følg os på Instagram
        <Instagram className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 group-hover:opacity-50 transition-opacity duration-300"></span>
    </a>
  );
}
