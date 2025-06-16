"use client";

export default function SendButton() {
  return (
    <button
      type="submit"
      className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-accent transition-all duration-300 transform hover:-translate-y-0.5"
    >
      Send 
    </button>
  );
}