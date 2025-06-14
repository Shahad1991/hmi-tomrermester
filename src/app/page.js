import ContactInfoSection from "./components/ContactInfoSection";
import ContactSection from "./components/ContactSection";

import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main>
      <div className="mt-7"></div>
      {/* Andre sektioner... */}
      <ServicesSection />
    
      <ContactSection />

      <ContactInfoSection />
    </main>
  );
}