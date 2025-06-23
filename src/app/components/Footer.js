
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Om os med sociale medier */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold font-serif mb-4">HMI Tømrermester</h2>
            <p className="text-gray-600 mb-6">
              Din pålidelige partner for alle tømrer- og byggeprojekter.
            </p>
            
              <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/hmitoemrermester"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white p-3 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20"
              >
                <Facebook className="w-6 h-6 text-accent hover:text-accent/90" />
              </a>
              <a
                href="https://www.instagram.com/hmitomrermester"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white p-3 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20"
              >
                <Instagram className="w-6 h-6 text-accent hover:text-accent/90" />
              </a>
              <a
                href="https://www.linkedin.com/company/hmi-tømrermester"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white p-3 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20"
              >
                <Linkedin className="w-6 h-6 text-accent hover:text-accent/90" />
              </a>
          </div>
          </div>

          {/* Hurtiglinks */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold font-serif mb-6">LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-accent transition-colors">
                  Forside
                </Link>
              </li>
              <li>
                <Link href="/galleri" className="text-gray-600 hover:text-accent transition-colors">
                  Galleri
                </Link>
              </li>
              <li>
                <Link href="/om-os" className="text-gray-600 hover:text-accent transition-colors">
                  Om Os
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-600 hover:text-accent transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontaktinfo */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold font-serif mb-6">KONTAKT</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-gray-600">Telefon</p>
                  <a href="tel:+4528225060" className="hover:text-accent transition-colors">
                    +45 28 22 50 60 
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-gray-600">Email</p>
                  <a href="mailto: ali@hmi-tomrermester.dk" className="hover:text-accent transition-colors">
                    ali@hmi-tomrermester.dk
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-600">Adresse</p>
                 <p>Vibevej 7</p>
                 <p>2630 Taastrup</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bundlinje */}
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HMI Tømrermester. Alle rettigheder forbeholdes.
          </p>
          <div className="flex space-x-6">
            <Link href="/privatlivspolitik" className="text-gray-500 hover:text-accent transition-colors text-sm">
              Privatlivspolitik
            </Link>
            <Link href="/vilkår" className="text-gray-500 hover:text-accent transition-colors text-sm">
              Vilkår
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-accent transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;