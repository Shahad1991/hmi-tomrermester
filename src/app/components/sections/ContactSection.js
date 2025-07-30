"use client";
import ContactForm from "../forms/ContactForm";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";


export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Centreret overskrift */}
      <div className="text-center mb-16">
        <p className="text-accent font-medium mb-2">KONTAKT</p>
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-darkblue mb-4">
          Skriv eller ring til os for en uforpligtende tilbud
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto"></div>
      </div>

      {/* To kolonner side om side */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Venstre side - Kontaktformular */}
        <div className="bg-white p-8  hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold font-serif text-darkblue mb-6">Få et tilbud</h2>
        <ContactForm />
      </div>

      {/* Højre side - Sociale medier */}
      <div className="bg-darkblue p-8  hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold font-serif gap-6 text-white mb-6 ml-2">Vi er sociale!</h2>
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

          <div className="flex flex-col gap-6 w-full md:w-1/2 ml-2">
            <p className="text-lg text-white ">
              Følg med i vores process og se vores seneste projekter på sociale medier.
            </p>
            <div className="flex gap-4 md:gap-6  md:justify-start flex-wrap">
                <a
                  href="https://www.facebook.com/hmitomrermester"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="bg-white p-3 rounded-full hover:bg-accent/10 transition-all duration-300 border border-accent/20 hover:border-accent/50"
                >
                  <Facebook className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </a>
                <a
                  href="https://www.instagram.com/hmitomrermester"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="bg-white p-3 rounded-full hover:bg-accent/10 transition-all duration-300 border border-accent/20 hover:border-accent/50"
                >
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </a>
                <a
                  href="https://www.linkedin.com/company/hmi-t%C3%B8mrermester"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-white p-3 rounded-full hover:bg-accent/10 transition-all duration-300 border border-accent/20 hover:border-accent/50"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </a>
              </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

