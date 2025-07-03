import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import Image from 'next/image';
import { Hammer, Wrench, Zap, Ruler } from 'lucide-react';
import ContactButton from '../../components/buttons/ContactButton';
import Link from 'next/link';


export default async function CarportPage() {
  try {
    const allItems = await getAllGalleryItems();
    console.log('All items:', allItems); // Debug log

    // Filter for carport items - now using exact category match
    const carportItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'carport'
      )
    );

    console.log('Filtered carport items:', carportItems); // Debug log

    // Map data til galleri-format
    const galleryImages = carportItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      title: item.title,
      id: item.id
    }));

    

    // Services section data for carport
    const servicesSection = {
      title: "Faglige services til dit carportprojekt",
      description: "Vi tilbyder specialiserede løsninger til din carport konstruktion",
      backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
      services: [
        {
          icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
          title: "Snedker",
          description: "Præcis tilskæring og bearbejdning af træmaterialer til carport."
        },
        {
          icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
          title: "Tømrer",
          description: "Professionel konstruktion og montering af carport."
        },
        {
          icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
          title: "Elektriker",
          description: "El-installationer til belysning og stikkontakter i carport."
        }
      ]
    };

    
    return (
      <YdelseLayout
        heroImage="/images/services/carport.jpeg"
        heroTitle="Carport"
        heroText="Vi bygger carporte der beskytter din bil og tilføjer værdi til dit hjem."
        imageTextImage="/images/ali-hmi/ali-carport.jpeg"
        imageTextTitle="Din erfarne carport specialist"
        imageTextDescription="Har du brug for beskyttelse til din bil eller ekstra overdækket opbevaringsplads? Hos HMI Tømrermester specialiserer vi os i konstruktion af solide og holdbare carporte. Vi bygger både enkle og avancerede løsninger, der passer til dit hjem og dine behov. Vores carporte er bygget med kvalitetsmaterialer og solidt håndværk, så de kan modstå vejr og vind i mange år. Vi hjælper dig med alt fra planlægning og myndighedsgodkendelse til den færdige carport."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      >
        
      </YdelseLayout>
    );
  } catch (error) {
    console.error('Error in CarportPage:', error);
    return <div>Fejl ved indlæsning af side</div>;
  }
}
