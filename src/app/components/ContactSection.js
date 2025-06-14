"use client";
import ContactForm from "./forms/ContactForm";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg transition-shadow duration-300 ">
      {/* Venstre side - Kontaktformular */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
       
        <ContactForm />
      </div>

      {/* Højre side - Sociale medier */}
      <div className="space-y-8">
        <div className="relative flex items-center gap-8">
          <Image
            src="/instagram-mockop.png" // Skift til dit mobil-mockup billede
            alt="Mobil mockup visende sociale medier"
            width={300}
            height={600}
           
          />
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-gray-800">Vi er sociale!</h3>
            <p className="text-lg text-gray-600">
                følge med i vores process og se vores seneste projekter på sociale medier.
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/hmitoemrermester"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50"
              >
                <Facebook className="w-10 h-10 text-amber-600 hover:text-amber-700 transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/hmitomrermester"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50"
              >
                <Instagram className="w-10 h-10 text-amber-600 hover:text-amber-700 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}