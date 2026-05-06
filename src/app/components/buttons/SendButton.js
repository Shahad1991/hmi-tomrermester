"use client";

export default function SendButton() {
  return (
    <button
      type="submit"
      className="w-full min-h-[44px] min-w-[44px] bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-accent transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      aria-label="Send besked"
      title="Send besked"
    >
      Send 
    </button>
  );
}