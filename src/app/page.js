import AboutSection from "./components/sections/AboutSection";
import ContactInfoSection from "./components/sections/ContactInfoSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import Reviews from "./components/sections/ReviewsSection";
import ServicesSection from "./components/sections/ServicesSection";


export default function Home() {
  return (
    <div className="space-y-12 md:space-y-12 pt-28">
      <HeroSection />
     
      <Reviews />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <ContactInfoSection />
    </div>
  );
}