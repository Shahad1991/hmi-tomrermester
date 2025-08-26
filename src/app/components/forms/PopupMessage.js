"use client";

export default function PopupMessage({ message, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl p-6 mx-4 max-w-md w-full animate-fade-in">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Besked sendt!</h3>
        </div>
        
        <p className="text-sm text-gray-500 mb-3">Din besked er blevet sendt med succes.</p>
        
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium"
          >
            Luk
          </button>
        </div>
      </div>
    </div>
  );
}