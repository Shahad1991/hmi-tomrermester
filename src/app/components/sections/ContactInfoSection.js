"use client";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { trackPhoneClick, trackEmailClick } from "../GoogleAnalytics";

export default function ContactInfoCards() {
  return (
    <section className="bg-darkblue dark:bg-dark-bg py-16 w-full sm:px-5 lg:px-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Adresse kort */}
          <div className="bg-white dark:bg-dark-surface p-6 rounded-xl shadow-lg dark:shadow-gray-700/50 hover:shadow-accent-md dark:hover:shadow-accent/20 transition-all duration-300 border border-gray-light dark:border-gray-600 text-center sm:px">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20">
                <MapPin className="w-12 h-12 text-accent group-hover:text-accent/90 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-darkblue dark:text-dark-text mb-3">Adresse</h3>
            <div className="text-gray-dark dark:text-gray-300 space-y-1">
              <p>Vibevej 7</p>
              <p>2630 Taastrup</p>
            </div>
          </div>

          {/* Åbningstider kort */}
          <div className="bg-white dark:bg-dark-surface p-6 rounded-xl shadow-lg dark:shadow-gray-700/50 hover:shadow-accent-md dark:hover:shadow-accent/20 transition-all duration-300 border border-gray-light dark:border-gray-600 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20">
                <Clock className="w-12 h-12 text-accent group-hover:text-accent/90 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-darkblue dark:text-dark-text mb-3">Åbningstider</h3>
            <ul className="text-gray-dark dark:text-gray-300 space-y-1">
              <li><span className="font-medium">Man-Fre:</span> 07.00-15.00</li>
              <li><span className="font-medium">Lørdag:</span> Efter aftale</li>
            
            </ul>
          </div>

          {/* Kontakt kort */}
          <div className="bg-white dark:bg-dark-surface p-6 rounded-xl shadow-lg dark:shadow-gray-700/50 hover:shadow-accent-md dark:hover:shadow-accent/20 transition-all duration-300 border border-gray-light dark:border-gray-600 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20">
                <Phone className="w-12 h-12 text-accent group-hover:text-accent/90 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-darkblue dark:text-dark-text mb-3">Kontakt</h3>
            <ul className="text-gray-dark dark:text-gray-300 space-y-1">
              <li>
                <span className="font-medium">Tlf:</span> 
                <a 
                  href="tel:+4528225060" 
                  className="hover:text-accent transition-colors group ml-1"
                  onClick={trackPhoneClick}
                >
                  <span className="group-hover:text-accent">+45 28 22 50 60</span>
                </a>
              </li>
              <li>
                <span className="font-medium">E-mail:</span> 
                <a 
                  href="mailto:ali@hmi-tomrermester.dk" 
                  className="hover:text-accent transition-colors group ml-1"
                  onClick={trackEmailClick}
                >
                  <span className="group-hover:text-accent">ali@hmi-tomrermester.dk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}