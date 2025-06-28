import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import ContactSection from '../components/sections/ContactSection';
import ContactInfoSection from '../components/sections/ContactInfoSection';
import { ProcessSection } from '../components/sections/ProcessSection';


export default function Kontakt() {
  return (
    <div className="mx-auto mt-28">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/kontakt-bg1.png"
            alt="Baggrund"
            fill
            className="object-cover"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-darkblue bg-opacity-70 z-10"></div>
        </div>

        <div className="relative z-20 px-5 py-12 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Kontakt os
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl mb-8">
              Har du spørgsmål, ønsker du et tilbud eller vil du høre mere? Vi står klar til at hjælpe dig!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4528225060"
                className="group inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg shadow-lg border-2 border-accent hover:bg-accent hover:text-darkblue transition-all duration-300 text-lg transform hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  Ring til os nu
                </span>
                <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>

              <a
                href="mailto:ali@hmi-tomrermester.dk"
                className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3 bg-gradient-to-br from-accent via-[#FFC600] to-[#FFB600] text-darkblue font-semibold rounded-lg shadow-lg hover:shadow-accent transition-all duration-300 text-lg transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2 font-serif">
                  <Mail className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  Send en mail
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 group-hover:opacity-50 transition-opacity duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section med baggrundsbillede */}
      <section className="relative z-10 overflow-hidden">
        {/* Baggrund kun for denne del */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/kontakt-process-bg.png"
            alt="HMI logo som background"
            fill
            className="object-cover opacity-10 "
            quality={80}
            priority
          />
        </div>

        <ProcessSection />
      </section>

      {/* Kontaktformular og info */}
      <ContactSection className="w-full" />
      <ContactInfoSection />
      
    </div>
  );
}
