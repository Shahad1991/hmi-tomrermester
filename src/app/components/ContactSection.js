"use client";
import ContactForm from "./forms/ContactForm";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Venstre side - Kontaktformular */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-darkblue text-center mb-6">Få et tilbud</h2>
        <ContactForm />
      </div>

      {/* Højre side - Sociale medier */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-darkblue text-center mb-6">Vi er sociale!</h2>
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          {/* Billedcontainer - samme stil som services-sektionen */}
          <div className="w-full md:w-1/2 aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden">
            <img
              src="/instagram-mockup.png"
              alt="Mobil mockup visende sociale medier"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <p className="text-lg text-gray-dark">
              Følg med i vores process og se vores seneste projekter på sociale medier.
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/hmitoemrermester"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50"
              >
                <Facebook className="w-10 h-10 text-accent hover:text-accent/90" />
              </a>
              <a
                href="https://www.instagram.com/hmitomrermester"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50"
              >
                <Instagram className="w-10 h-10 text-accent hover:text-accent/90" />
              </a>
              <a
                href="https://www.linkedin.com/company/hmi-tømrermester"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50"
              >
                <Linkedin className="w-10 h-10 text-accent hover:text-accent/90" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}