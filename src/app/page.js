import ContactInfoSection from "./components/ContactInfoSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Reviews from "./components/Reviews";

import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
     <Reviews />
      <ServicesSection />
    
      <ContactSection />

      <ContactInfoSection />
    </main>
  );
}