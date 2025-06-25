import './globals.css';
import { ReactNode } from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

export default function YdelseLayout({ children }) {
  return (
    <div className="mx-auto pt-28">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/kontakt-bg1.png"
          alt="Baggrund"
          fill
          className="object-cover z-0"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-darkblue bg-opacity-70 z-10"></div>
        <div className="relative z-20 max-w-2xl px-5 py-12 text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
            Kontakt os
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl">
            Har du spørgsmål, ønsker du et tilbud eller vil du høre mere? Vi står klar til at hjælpe dig!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="tel:+4528225060"
              className="group inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg shadow-lg border-2 border-accent hover:bg-accent hover:text-darkblue transition-all duration-300 text-lg transform hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-5 h-5 group-hover:translate-x-1 transition" />
                Ring til os nu
              </span>
            </a>
            <a
              href="mailto:ali@hmi-tomrermester.dk"
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-br from-accent via-yellow-400 to-yellow-300 text-darkblue font-semibold rounded-lg shadow-lg hover:shadow-accent transition-all duration-300 text-lg transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2 font-serif">
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition" />
                Send en mail
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Her renderes den enkelte sides indhold */}
      {children}
    </div>
  );
}