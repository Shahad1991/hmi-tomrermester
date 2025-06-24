"use client";
import { motion } from "framer-motion";
import HeroButtons from "./buttons/HeroButtons";
import ThreeModel from "./3d-animation/ThreeModel"; 

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gray-900 overflow-hidden">
      {/* Baggrund og gradient overlay */}
      <div className="absolute inset-0 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent lg:bg-gradient-to-r lg:from-gray-900/90 lg:via-gray-900/50 lg:to-transparent" />
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      {/* Tekstindhold - venstre side */}
      <div className="relative z-10 w-full lg:w-1/2 px-4 py-16 sm:px-8 md:px-16 lg:px-24 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-3xl mx-auto lg:mx-0"
        >
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
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-100 max-w-2xl font-light leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          >
            Skabende kvalitet og ekspertise i hver detalje - hvor visioner bliver til <span className="font-medium text-accent">arkitektoniske mesterværker</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-8 mt-10"
          >
            {[
              { value: "250+", label: "Fuldførte projekter" },
              { value: "10+", label: "Års erfaring" },
              { value: "100%", label: "Tilfredse kunder" }
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
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <HeroButtons />
          </motion.div>
        </motion.div>
      </div>

      {/* 3D-model - højre side (kun på desktop) */}
      <div className="">
        <ThreeModel
  modelPath="/models/house.glb"
  modelScale={[2, 2, 2]}
  cameraPosition={[1, 1, 3]}
  fov={30}
  rotationSpeed={1.3}
/>
      </div>
    </section>
  );
};

export default HeroSection;