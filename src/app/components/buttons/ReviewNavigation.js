import { ChevronLeft, ChevronRight } from "lucide-react";

const ReviewNavigation = ({ onPrev, onNext }) => {
  return (
    <div className="flex justify-center mt-8 gap-4">
      <button 
        onClick={onPrev}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Previous review"
      >
        <ChevronLeft className="w-5 h-5 text-darkblue" />
      </button>
      <button 
        onClick={onNext}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Next review"
      >
        <ChevronRight className="w-5 h-5 text-darkblue" />
      </button>
    </div>
  );
};

export default ReviewNavigation;