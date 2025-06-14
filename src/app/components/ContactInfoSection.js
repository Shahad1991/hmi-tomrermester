"use client";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function ContactInfoCards() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Kontakt os</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Adresse kort */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-amber-100 p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <MapPin className="w-12 h-12 text-amber-600 hover:text-amber-700 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Adresse</h3>
            <div className="text-gray-600 space-y-1">
              <p>HMI Tømrermester</p>
              <p>Vibevej 7</p>
              <p>2630 Taastrup</p>
            </div>
          </div>

          {/* Åbningstider kort */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-amber-100 p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <Clock className="w-12 h-12 text-amber-600 hover:text-amber-700 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Åbningstider</h3>
            <ul className="text-gray-600 space-y-1">
              <li><span className="font-medium">Man-Fre:</span> 07.00-15.00</li>
              <li><span className="font-medium">Lør:</span> Efter Aftale</li>
              <li><span className="font-medium">Søn:</span> Lukket</li>
            </ul>
          </div>

          {/* Kontakt kort */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-amber-100 p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <Phone className="w-12 h-12 text-amber-600 hover:text-amber-700 transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Kontakt</h3>
            <div className="text-gray-600 space-y-3">
              <div>
                <a href="tel:+4528225060" className="flex items-center justify-center hover:text-amber-600 transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  28 22 50 60
                </a>
              </div>
              <div>
                <a href="mailto:info@hmitomrermester.dk" className="flex items-center justify-center hover:text-amber-600 transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  ali@hmi-tomrermester.dk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}