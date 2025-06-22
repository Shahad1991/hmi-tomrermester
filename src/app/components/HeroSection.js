"use client";
import { motion } from "framer-motion";
import HeroButtons from "./buttons/HeroButtons";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start bg-gray-900 overflow-hidden">
      {/* Baggrundsbillede med gennemsigtig gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/your-background-image.jpg')" }}
      />
      
      {/* Gradient overlay - nu mere gennemsigtig */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent" />
      
      {/* Dekorative elementer - justeret for bedre synlighed */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
      
      {/* Hovedindhold med bedre tekstkontrast */}
      <div className="relative z-10 max-w-3xl px-4 py-16 ml-4 sm:ml-8 md:ml-16 lg:ml-24 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Tagline - nu med mørk baggrund for bedre læsbarhed */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-gray-900/80 rounded-full mb-6 border border-accent/30 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              <span className="text-accent text-sm font-medium tracking-wider">
                EKSKLUSIVE LØSNINGER
              </span>
            </div>
          </motion.div>
          
          {/* Hovedoverskrift - kraftigere tekstskygge */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            <span className="block">Fra drøm til</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FFCB45]">
              Virkelighed
            </span>
          </motion.h1>
          
          {/* Underoverskrift - højere kontrast */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-100 max-w-2xl font-light leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          >
            Skabende kvalitet og ekspertise i hver detalje - hvor visioner bliver til <span className="font-medium text-accent">arkitektoniske mesterværker</span>
          </motion.p>
          
          {/* Statistikker - mørk baggrund */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-8 mt-10"
          >
            {[
              { value: "250+", label: "Fuldførte projekter" },
              { value: "15+", label: "Års erfaring" },
              { value: "99%", label: "Tilfredse kunder" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-left relative bg-gray-900/70 px-4 py-3 rounded-lg backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-gray-300 mt-1 text-sm">{stat.label}</div>
                <div className="absolute -bottom-px left-4 h-px w-8 bg-gradient-to-r from-accent to-transparent"></div>
              </div>
            ))}
          </motion.div>
          
          {/* Knapper - allerede synlige */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <HeroButtons />
          </motion.div>
        </motion.div>
      </div>
       <div className="flex-1 h-full min-h-[400px]">
   
  </div>
    </section>
  );
};

export default HeroSection;