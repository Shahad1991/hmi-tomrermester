"use client";
import { useState } from "react";
import PopupMessage from "./PopupMessage";
import SendButton from "../buttons/SendButton";
import { trackContactForm } from "../GoogleAnalytics";

export default function ContactForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    try {
      const response = await fetch("https://formsubmit.co/ajax/cbca22d177c41b4677ad7793ed816ea5", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: form.name.value,
          phone: form.phone.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });

      if (response.ok) {
        setPopupMessage("Formularen blev sendt succesfuldt!");
        setShowPopup(true);
        form.reset();
        
        // Track successful form submission
        trackContactForm('main_contact');
      } else {
        throw new Error(`Fejl: ${response.status} - ${response.statusText}`);
      }
    } catch (err) {
      console.error("Fejl:", err);
      setPopupMessage("Noget gik galt. Prøv igen.");
      setShowPopup(true);
    }
  };

  return (
    <div className=" mx-auto ">
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Navn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Telefon
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Besked
          </label>
          <textarea
            id="message"
            name="message"
            rows="8"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          ></textarea>
        </div>
        <SendButton />
      </form>

      {showPopup && (
        <PopupMessage
          message={popupMessage}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}