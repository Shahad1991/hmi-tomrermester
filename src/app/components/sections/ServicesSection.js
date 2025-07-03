"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Dør & Vindue",
    link: "/ydelser/doer-vinduer",
    bgImage: "/images/services/dør-vinduer.jpeg",
  },
  {
    title: "Gulv",
    link: "/ydelser/gulv",
    bgImage: "/images/services/gulv.png",
  },
  {
    title: "Hegn",
    link: "/ydelser/hegn",
    bgImage: "/images/services/hegn.jpeg",
  },
  {
    title: "Terrasse",
    link: "/ydelser/terrasse",
    bgImage: "/images/services/terrasse.jpg",
  },
  {
    title: "Køkken Renovering",
    link: "/ydelser/koekken-montage",
    bgImage: "/images/services/køkken.png",
  },
  {
    title: "Gipsarbejde",
    link: "/ydelser/gipsarbejde",
    bgImage: "/images/services/gipsarbejde.jpeg",
  },
  {
    title: "Renovering",
    link: "/ydelser/renovering",
    bgImage: "/images/services/renovering.jpg",
  },
  {
    title: "Carport",
    link: "/ydelser/carport",
    bgImage: "/images/services/carport.jpeg",
  },
  {
    title: "Andre Opgaver",
    link: "/ydelser/andre-opgaver",
    bgImage: "/images/services/andre-opgaver.jpg",
  },

];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50 w-full text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-accent font-medium mb-2">VORES YDELSER</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-darkblue mb-4">
            Professionelle løsninger til alle dine bygge- og renoveringsbehov
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="group relative block rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="w-full h-64 relative">
                <Image
                  src={service.bgImage}
                  alt={`${service.title} service`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  quality={85}
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-darkblue bg-opacity-50 z-10 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>

              <div className="bg-gray-900 p-4 text-center">
                <h3 className="text-lg font-semibold font-serif text-white group-hover:text-accent transition-colors duration-300">
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