"use client";
import ContactForm from "../forms/ContactForm";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";


export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto py-16 bg-white dark:bg-dark-bg">
      {/* Centreret overskrift */}
      <div className="text-center mb-16">
        <p className="text-accent font-medium mb-2">KONTAKT</p>
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-darkblue dark:text-dark-text mb-4">
          Skriv eller ring til os for en uforpligtende tilbud
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto"></div>
      </div>

      {/* To kolonner side om side */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch bg-white dark:bg-dark-surface rounded-xl shadow-lg dark:shadow-gray-700/50 hover:shadow-xl dark:hover:shadow-gray-600/50 transition-shadow duration-300">
        {/* Venstre side - Kontaktformular */}
        <div className="bg-white dark:bg-dark-surface p-8 hover:shadow-xl dark:hover:shadow-gray-600/50 transition-shadow duration-300">
        <h2 className="text-3xl font-bold font-serif text-darkblue dark:text-dark-text mb-6">Få et tilbud</h2>
        <ContactForm />
      </div>

      {/* Højre side - Sociale medier */}
      <div className="bg-darkblue dark:bg-dark-surface dark:border-accent/40 dark:shadow-2xl dark:shadow-accent/30 dark:ring-1 dark:ring-accent/20 p-8 hover:shadow-xl dark:hover:shadow-accent/50 dark:hover:border-accent/60 dark:hover:ring-accent/30 transition-all duration-300">
        <h2 className="text-3xl font-bold font-serif gap-6 text-white dark:text-accent mb-6 ml-2">Vi er sociale!</h2>
        <div className="relative flex flex-col md:flex-row items-center gap-6">
          {/* Billedcontainer - samme stil som services-sektionen */}
          <div className="w-full md:w-1/2 aspect-[9/16] overflow-hidden">
            <Image
              src="/images/mockups/instagram-mockop.png"
              alt="Mobil mockop visende sociale medier"
              className="object-cover rounded-md myimg"
              width={600}
              height={800}
              priority
            />
          </div>

          <div className="flex flex-col gap-6 w-full md:w-1/2 ">
            <p className="text-lg text-white dark:text-gray-200 dark:font-medium">
              Følg med i vores process og se vores seneste projekter på sociale medier.
            </p>
            <div className="flex gap-3 md:gap-4 justify-start flex-wrap">
                <a
                  href="https://www.facebook.com/hmitomrermester"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="bg-white dark:bg-dark-surface p-2 md:p-3 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20"
                >
                  <Facebook className="w-5 h-5 md:w-6 md:h-6 text-accent hover:text-accent/90" />
                </a>
                <a
                  href="https://www.instagram.com/hmitomrermester"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-white dark:bg-dark-surface p-2 md:p-3 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20"
                >
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 text-accent hover:text-accent/90" />
                </a>
                <a
                  href="https://www.linkedin.com/company/hmi-t%C3%B8mrermester"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-white dark:bg-dark-surface p-2 md:p-3 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-accent hover:text-accent/90" />
                </a>
              </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

