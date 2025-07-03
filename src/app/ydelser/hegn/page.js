import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import Image from 'next/image';
import { Hammer, Wrench, Zap, Ruler } from 'lucide-react';
import ContactButton from '../../components/buttons/ContactButton';
import Link from 'next/link';


export default async function HegnPage() {
  try {
    const allItems = await getAllGalleryItems();
    console.log('All items:', allItems); // Debug log

    // Filter for hegn items - now using exact category match
    const hegnItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'hegn'
      )
    );

    console.log('Filtered hegn items:', hegnItems); // Debug log

    // Map data til galleri-format
    const galleryImages = hegnItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      title: item.title,
      id: item.id
    }));

    

    // Services section data for hegn
    const servicesSection = {
      title: "Faglige services til dit hegnprojekt",
      description: "Vi tilbyder specialiserede løsninger til din hegn konstruktion",
      backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
      services: [
        {
          icon: <Ruler className="w-6 h-6" strokeWidth={1.5} />,
          title: "Opmåling",
          description: "Præcis opmåling og planlægning af dit hegn."
        },
        {
          icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
          title: "Tømrer",
          description: "Professionel konstruktion og montering af hegn."
        },
        {
          icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
          title: "Fundament",
          description: "Etablering af solidt fundament og stolper til hegn."
        }
      ]
    };

    
    return (
      <YdelseLayout
        heroImage="/images/services/hegn.jpeg"
        heroTitle="Hegn"
        heroText="Vi bygger solide hegn der skaber privatliv og definerer din ejendom."
        imageTextImage="/images/ali-hmi/ali-hegn.jpeg"
        imageTextTitle="Din erfarne hegn specialist"
        imageTextDescription="Har du brug for et nyt hegn til din ejendom? Hos HMI Tømrermester specialiserer vi os i konstruktion af holdbare og æstetiske hegn i forskellige materialer og designs. Uanset om du ønsker et klassisk trætræmhegn, et moderne design eller noget helt tredje, hjælper vi dig med at finde den perfekte løsning. Vi sørger for korrekt fundamentering, præcis montering og overholdelse af alle byggeregler. Med vores erfaring får du et hegn der holder i mange år."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      >
        
      </YdelseLayout>
    );
  } catch (error) {
    console.error('Error in HegnPage:', error);
    return <div>Fejl ved indlæsning af side</div>;
  }
}
