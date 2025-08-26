"use client";
import Link from "next/link";

const AboutButton = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link
        href="/om-os"
        className="group inline-flex items-center justify-center px-8 py-3 bg-transparent text-darkblue dark:text-dark-text font-semibold rounded-lg shadow-lg dark:shadow-gray-700/50 border-2 border-accent hover:bg-accent hover:text-darkblue dark:hover:text-darkblue transition-all duration-300 text-lg transform hover:-translate-y-1 relative overflow-hidden"
      >
        <span className="relative z-10">Læs mere om os</span>
        <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      </Link>
    </div>
  );
};

export default AboutButton;