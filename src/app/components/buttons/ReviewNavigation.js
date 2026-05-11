"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ReviewNavigation = ({ onPrev, onNext, buttonClass = "", iconClass = "" }) => {
  return (
    <div className="flex justify-center mt-8 gap-4">
      <button 
        onClick={onPrev}
        className={`p-2 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${buttonClass}`}
        aria-label="Previous review"
        title="Forrige anmeldelse"
      >
        <ChevronLeft className={`w-5 h-5 ${iconClass}`} />
      </button>
      <button 
        onClick={onNext}
        className={`p-2 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${buttonClass}`}
        aria-label="Next review"
        title="Næste anmeldelse"
      >
        <ChevronRight className={`w-5 h-5 ${iconClass}`} />
      </button>
    </div>
  );
};

export default ReviewNavigation;
