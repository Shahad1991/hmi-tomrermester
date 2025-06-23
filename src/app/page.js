import AboutSection from "./components/AboutSection";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Reviews from "./components/Reviews";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20">
      <HeroSection />
      <Reviews />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <ContactInfoSection />
    </div>
  );
}