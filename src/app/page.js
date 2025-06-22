import ContactInfoSection from "./components/ContactInfoSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";

import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Andre sektioner... */}
      <ServicesSection />
    
      <ContactSection />

      <ContactInfoSection />
    </main>
  );
}