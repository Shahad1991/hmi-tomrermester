import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import Image from 'next/image';
import { Hammer, Wrench, Zap, Ruler } from 'lucide-react';
import ContactButton from '../../components/buttons/ContactButton';
import Link from 'next/link';


export default async function TerrassePage() {
  try {
    const allItems = await getAllGalleryItems();
    console.log('All items:', allItems); // Debug log

    // Filter for terrasse items - now using exact category match
    const terrasseItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'terrasse'
      )
    );

    console.log('Filtered terrasse items:', terrasseItems); // Debug log
    
    // Map data til galleri-format
    const galleryImages = terrasseItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      id: item.id,
      description: item.description
    }));

    

    // Services section data for terrasse
    const servicesSection = {
      title: "Faglige services til dit terrasseprojekt",
      description: "Vi tilbyder specialiserede løsninger til din terrasse konstruktion",
      backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
      services: [
        {
          icon: <Ruler className="w-6 h-6" strokeWidth={1.5} />,
          title: "Opmåling",
          description: "Præcis opmåling og planlægning af din terrasse."
        },
        {
          icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
          title: "Tømrer/ Snedker",
          description: "Professionel konstruktion og montering af terrasse."
        }
      ]
    };

    
    return (
      <YdelseLayout
        heroImage="/images/services/terrasse.jpg"
        heroTitle="Terrasse"
        heroText="Vi bygger smukke terrasser der udvider dit hjem og skaber det perfekte uderum."
        imageTextImage="/images/ali-hmi/ali-terrasse.jpeg"
        imageTextTitle="Din erfarne terrasse specialist"
        imageTextDescription="Drømmer du om en smuk terrasse hvor du kan nyde sommeren og få mere ud af dit uderum? Hos HMI Tømrermester specialiserer vi os i konstruktion af holdbare og æstetiske terrasser i forskellige materialer og designs. Vi bygger alt fra klassiske træterrasser til moderne komposit løsninger, der passer til dit hjem og din stil. Vores erfarne håndværkere sikrer korrekt fundamentering, præcis montering og finish der tåler vejr og vind. Med fokus på kvalitet og detaljer får du en terrasse der holder i mange år og tilføjer værdi til dit hjem."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      >
        
      </YdelseLayout>
    );
  } catch (error) {
    console.error('Error in TerrassePage:', error);
    return <div>Fejl ved indlæsning af side</div>;
  }
}
