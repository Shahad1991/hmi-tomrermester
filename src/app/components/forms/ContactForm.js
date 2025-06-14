"use client";
import { useState } from "react";
import PopupMessage from "./PopupMessage";
import SendButton from "../buttons/SendButton";

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
    <div className="max-w-lg mx-auto ">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Kontakt os</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Navn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Telefon
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Besked
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
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