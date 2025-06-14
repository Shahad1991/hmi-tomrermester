"use client";

export default function PopupMessage({ message, onClose }) {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
      {message}
      <button
        onClick={onClose}
        className="ml-4 text-sm underline"
      >
        Luk
      </button>
    </div>
  );
}