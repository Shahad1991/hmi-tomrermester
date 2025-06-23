"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Dør & Vindue",
    link: "/ydelser/doer-vinduer",
    bgImage: "/services.jpg",// Sørg for, at dette billede findes i /public/services.jpg
  },
  {
    title: "Gulv",
    link: "/ydelser/gulv",
    bgImage: "/services.jpg",
  },
  {
    title: "Hegn",
    link: "/ydelser/hegn",
    bgImage: "/services.jpg",
  },
  {
    title: "Terrasse",
    link: "/ydelser/terrasse",
    bgImage: "/services.jpg",
  },
  {
    title: "Køkken Montage",
    link: "/ydelser/koekken-montage",
    bgImage: "/services.jpg",
  },
  {
    title: "Gipsarbejde",
    link: "/ydelser/gipsarbejde",
    bgImage: "/services.jpg",
  },
  {
    title: "Renovering",
    link: "/ydelser/renovering",
    bgImage: "/services.jpg",
  },
  {
    title: "Andre Opgaver",
    link: "/ydelser/andre-opgaver",
    bgImage: "/services.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50 w-full text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-accent font-medium mb-2">VORES YDELSER</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-darkblue mb-4">Professionelle løsninger til alle dine bygge- og renoveringsbehov</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-square relative">
              <div className="aspect-square relative">
            <img
              src={service.bgImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          </div>

              {/* Brug mørkeblå baggrund til service-titler */}
              <div className="bg-gray-900 p-4 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;