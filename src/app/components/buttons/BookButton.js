"use client";
import Link from "next/link";
import { trackQuoteRequest } from "../GoogleAnalytics";

const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 bg-gradient-to-r from-accent to-[#FFCB45] text-darkblue hover:from-[#FFCB45] hover:to-accent shadow-md hover:shadow-accent transform hover:-translate-y-0.5 px-8 py-4 text-lg group font-serif min-w-[44px] min-h-[44px]";

const BookButton = ({ className = "", onClick }) => (
  <Link
    href="/kontakt"
    onClick={e => {
      if (onClick) onClick(e);
      trackQuoteRequest('book_moede');
    }}
    aria-label="Book et møde"
    title="Book et møde"
  >
    <span className={`${baseClasses} ${className}`}>
      Book et møde
    </span>
  </Link>
);

export default BookButton;