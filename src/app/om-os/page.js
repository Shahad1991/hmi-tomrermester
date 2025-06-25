import React from 'react';
import Image from 'next/image';
import { Hammer, Wrench, BrickWall, Paintbrush, Drill, Zap } from 'lucide-react';
import ContactButton from '../components/buttons/ContactButton';

const OmOs = () => {
  const services = [
    {
      icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
      title: "Tømrer",
      description: "Professionel tømrerarbejde til alle byggeprojekter."
    },
    {
      icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
      title: "Elektriker",
      description: "El-installationer og sikring af dine elektriske anlæg."
    },
    {
      icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
      title: "VVS",
      description: "Komplet VVS-løsninger til bolig, køkken og erhverv."
    },
    {
      icon: <BrickWall className="w-6 h-6" strokeWidth={1.5} />,
      title: "Murer",
      description: "Ekspertise i murerarbejde og renovering."
    },
    {
      icon: <Drill className="w-6 h-6" strokeWidth={1.5} />,
      title: "Snedker",
      description: "Skræddersyede løsninger i træ."
    },
    {
      icon: <Paintbrush className="w-6 h-6" strokeWidth={1.5} />,
      title: "Maler",
      description: "Professionel maling og overfladebehandling."
    }
  ];

  return (
    <div className="mx-auto pt-28">
      {/* Hero Section */}
      <section className="relative min-h-screen h-64 md:h-80 lg:h-96 flex items-center justify-center text-center overflow-hidden">
        <Image 
          src="/om-os-1.png" 
          alt="Virksomhedens team" 
          fill
          className="object-cover z-0"
          priority
          style={{ objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-darkblue bg-opacity-70 z-10"></div>
        <div className="relative z-20 max-w-4xl px-5 text-primary">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">Hvem er vi?</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
            En passioneret gruppe fagfolk dedikeret til at levere højkvalitets løsninger for vores kunder.
          </p>
          <ContactButton/>
        </div>
      </section>

      {/* Virksomhedsbeskrivelse */}
      <section className="flex flex-col lg:flex-row gap-12 px-6 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-darkblue mb-6 font-serif">Vores historie</h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <div className="w-24 h-1 bg-accent"></div>
            <p>
              <strong>HMI Tømrermester</strong> er en tømrervirksomhed med store kompetencer inden for træarbejde. 
              Vi løser et væld af forskellige opgaver - fra reparation af gamle døre og vinduer til opsætning af 
              vægge, lofter og karme.
            </p>
            <p>
              Fra de små og detaljerige træarbejder til de store linjer, når huset skal renoveres, er vores 
              målsætning at skabe værdi for kunden, så det bliver en god oplevelse med os på holdet, uanset 
              opgavens størrelse.
            </p>
            <p className="font-medium text-darkblue">
              Vi måler vores succes på vores kunders tilfredshed og et veludført arbejde. Vores passion for 
              håndværk og æstetik går hånd i hånd med en grundig tilgang til hvert enkelt projekt.
            </p>
          </div>
          <ContactButton className="mt-8" />
        </div>
        <div className="lg:w-1/2 relative h-96 lg:h-auto">
          <Image 
            src="/om-os-ali.png" 
            alt="Virksomhedens bygning" 
            fill
            className="object-cover rounded-xl shadow-xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-darkblue bg-opacity-40 z-10 group-hover:bg-opacity-30 transition-all duration-300"></div>
        </div>
      </section>

      {/* Services/Tilbud */}
      <section className="relative px-6 py-16 md:py-24 bg-darkblue overflow-hidden">
        {/* Bagrundsbillede */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/om-os-service-bg.jpeg"
            alt="Baggrundsmønster"
            fill
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-darkblue bg-opacity-70 z-10"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center mb-16 z-10">
          <span className="text-accent font-medium uppercase tracking-wider text-sm">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-2 mb-4">
            Faglige services til dit byggeprojekt
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="text-white/90 mt-6 max-w-2xl mx-auto">
            Vi tilbyder specialiserede løsninger inden for byggeri og renovering
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1"
            >
              <div className="bg-white text-accent p-6 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-darkblue mb-2 mt-4">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OmOs;
