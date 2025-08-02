"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      {/* Vores projekter-knap (bevares næsten uændret) */}
      
      
      {/* Kontakt os-knap (opdateret med gul hover-effekt) */}
      <Link
        href="/kontakt"
        className="group inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg shadow-lg border-2 border-accent hover:bg-accent hover:text-darkblue transition-all duration-300 text-lg transform hover:-translate-y-1 relative overflow-hidden"
      >
        <span className="relative z-10">Kontakt os</span>
        <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      </Link>

      <a
        href="#reviews"
        className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3 bg-gradient-to-br from-accent via-[#FFC600] to-[#FFB600] text-darkblue font-semibold rounded-lg shadow-lg hover:shadow-accent transition-all duration-300 text-lg transform hover:-translate-y-1"
      >
        <span className="relative z-10 flex items-center font-serif">
          Se anmeldelser
          <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 group-hover:opacity-50 transition-opacity duration-300"></span>
      </a>
    </div>
  );
};

export default HeroButtons;