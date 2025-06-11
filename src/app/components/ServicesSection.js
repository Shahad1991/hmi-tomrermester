"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ChefHat, // Ikon til køkken montage
  Sun, // Ikon til terrasse
  Fence, // Ikon til hegn
  Hammer, // Ikon til renovering
  Brush, // Ikon til gipsarbejde
  LayoutDashboard, // Ikon til gulv
  DoorOpen, // Ikon til dør & vinduer
  Wrench // Ikon til andre opgaver
} from "lucide-react";

const services = [
  {
    title: "Køkken Montage",
    icon: <ChefHat className="w-8 h-8" />,
    link: "/ydelser/koekken-montage",
    bgImage: "/services.jpg"
  },
  {
    title: "Terrasse",
    icon: <Sun className="w-8 h-8" />,
    link: "/ydelser/terrasse",
    bgImage: "/services.jpg"
  },
  {
    title: "Hegn",
    icon: <Fence className="w-8 h-8" />,
    link: "/ydelser/hegn",
    bgImage: "/services.jpg"
  },
  {
    title: "Renovering",
    icon: <Hammer className="w-8 h-8" />,
    link: "/ydelser/renovering",
    bgImage: "/services.jpg"
  },
  {
    title: "Gipsarbejde",
    icon: <Brush className="w-8 h-8" />,
    link: "/ydelser/gipsarbejde",
    bgImage: "/services.jpg"
  },
  {
    title: "Gulv",
    icon: <LayoutDashboard className="w-8 h-8" />,
    link: "/ydelser/gulv",
    bgImage: "/services.jpg"
  },
  {
    title: "Dør & Vinduer",
    icon: <DoorOpen className="w-8 h-8" />,
    link: "/ydelser/doer-vinduer",
    bgImage: "/services.jpg"
  },
  {
    title: "Andre Opgaver",
    icon: <Wrench className="w-8 h-8" />,
    link: "/ydelser/andre-opgaver",
    bgImage: "/services.jpg"
  }
];


const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Vores Ydelser
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle løsninger til alle dine bygge- og renoveringsbehov
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link 
              href={service.link} 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-40"
            >
              <div className="absolute inset-0">
                <Image
                  src={service.bgImage}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              
              <div className="relative h-full flex flex-col items-center justify-center p-4 text-white text-center">
                <div className="mb-2 p-3 bg-white/20 rounded-full group-hover:bg-amber-500/80 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold">
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