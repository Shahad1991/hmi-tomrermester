import { ChevronLeft, ChevronRight } from "lucide-react";

const ReviewNavigation = ({ onPrev, onNext, buttonClass = "", iconClass = "" }) => {
  return (
    <div className="flex justify-center mt-8 gap-4">
      <button 
        onClick={onPrev}
        className={`p-2 transition-colors ${buttonClass}`}
        aria-label="Previous review"
      >
        <ChevronLeft className={`w-5 h-5 ${iconClass}`} />
      </button>
      <button 
        onClick={onNext}
        className={`p-2 transition-colors ${buttonClass}`}
        aria-label="Next review"
      >
        <ChevronRight className={`w-5 h-5 ${iconClass}`} />
      </button>
    </div>
  );
};

export default ReviewNavigation;
