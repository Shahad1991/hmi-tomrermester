"use client";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function ContactInfoCards() {
  return (
    <section className="bg-darkblue py-16  sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-darkblue mb-12 text-center">Kontakt os</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Adresse kort */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-accent-md transition-all duration-300 border border-gray-light text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20">
                <MapPin className="w-12 h-12 text-accent group-hover:text-accent/90 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-darkblue mb-3">Adresse</h3>
            <div className="text-gray-dark space-y-1">
              <p>HMI Tømrermester</p>
              <p>Vibevej 7</p>
              <p>2630 Taastrup</p>
            </div>
          </div>

          {/* Åbningstider kort */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-accent-md transition-all duration-300 border border-gray-light text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20">
                <Clock className="w-12 h-12 text-accent group-hover:text-accent/90 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-darkblue mb-3">Åbningstider</h3>
            <ul className="text-gray-dark space-y-1">
              <li><span className="font-medium">Man-Fre:</span> 07.00-15.00</li>
              <li><span className="font-medium">Lør:</span> Efter aftale</li>
              <li><span className="font-medium">Søn:</span> Lukket</li>
            </ul>
          </div>

          {/* Kontakt kort */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-accent-md transition-all duration-300 border border-gray-light text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20">
                <Phone className="w-12 h-12 text-accent group-hover:text-accent/90 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-darkblue mb-3">Kontakt</h3>
            <div className="text-gray-dark space-y-3">
              <div>
                <a href="tel:+4528225060" className="flex items-center justify-center hover:text-accent transition-colors group">
                  <Phone className="w-5 h-5 mr-2 text-accent/80 group-hover:text-accent" />
                  <span className="group-hover:text-accent">28 22 50 60</span>
                </a>
              </div>
              <div>
                <a href="mailto:ali@hmi-tomrermester.dk" className="flex items-center justify-center hover:text-accent transition-colors group">
                  <Mail className="w-5 h-5 mr-2 text-accent/80 group-hover:text-accent" />
                  <span className="group-hover:text-accent">ali@hmi-tomrermester.dk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}