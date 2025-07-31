import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import Image from 'next/image';
import { Hammer, Wrench, Zap, Ruler } from 'lucide-react';
import ContactButton from '../../components/buttons/ContactButton';
import Link from 'next/link';
import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for SEO
export const metadata = generateServiceMetadata('kokken');

export default async function KokkenPage() {
  try {
    const allItems = await getAllGalleryItems();
    console.log('All items:', allItems); // Debug log

    // Filter for køkken items - now using exact category match
    const kitchenItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'kokken'
      )
    );

    console.log('Filtered kitchen items:', kitchenItems); // Debug log

    // Map data til galleri-format
    const galleryImages = kitchenItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      id: item.id,
      title: item.title,
      description: item.description
    }));

    console.log('Kitchen gallery images:', galleryImages); // Debug log

    // Services section data for køkken
    const servicesSection = {
      title: "Faglige services til dit køkkenprojekt",
      description: "Vi tilbyder specialiserede løsninger til din køkkenrenovering",
      backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
      services: [
        {
          icon: <Ruler className="w-6 h-6" strokeWidth={1.5} />,
          title: "Opmåling",
          description: "Præcis opmåling af dit køkken for perfekt tilpasning."
        },
        {
          icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
          title: "Tømrer/ Snedker",
          description: "Professionel montering og tilpasning af køkkenelementer."
        },
        {
          icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
          title: "Elektriker",
          description: "El-installationer til belysning, stikkontakter og hvidevarer."
        },
        {
          icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
          title: "VVS",
          description: "Vand og afløb til vask, opvaskemaskine og andre installationer."
        }
      ]
    };

    // Partnership section data for Epoq
    const partnershipSection = {
      title: "Komplet køkkenrenovering i samarbejde med Elgiganten",
      description: "Vi har et stærkt samarbejde med Elgiganten, hvor vi hjælper deres kunder med opmåling og montering af Epoq-køkkener. Vi tilbyder en komplet køkkenrenovering fra A til Z – fra planlægning og opmåling til opsætning og finish. Dit nye køkken samles og monteres professionelt, og vi koordinerer hele forløbet med vores netværk af erfarne håndværkere – herunder elektrikere, murere og malere. Hos os får du alt fra én hånd og slipper for besværet, mens vi skaber dit drømmekøkken med kvalitet og præcision i alle detaljer.",
      image: "/images/services/køkken.png",
      imageAlt: "Komplet køkkenrenovering med Epoq køkken fra Elgiganten",
      partnerLogos: [
        {
          src: "/images/partners/epoq-logo.png",
          alt: "Epoq Køkken logo"
        }
      ],
      ctaButton: {
        text: "Se udvalg af Epoq køkkener",
        link: "https://www.elgiganten.dk/epoq/koekken"
      }
    };

    return (
      <YdelseLayout
        heroImage="/images/kontakt/kontakt-bg1.png"
        heroTitle="Køkken Renovering"
        heroText="Vi gør dine køkkendrømme til virkelighed med kvalitet og funktionalitet."
        imageTextImage="/images/ali-hmi/ali-kokken.jpeg"
        imageTextTitle="Din kvalitetsbevidste køkkenmontør"
        imageTextDescription="Drømmer du om et nyt køkken, der kombinerer funktionalitet, æstetik og høj kvalitet? Hos HMI Tømrermester specialiserer vi os i køkkenrenovering og køkkenmontering for både private og erhverv. Uanset om du ønsker et moderne køkken-alrum, en klassisk løsning eller noget helt tredje, står vi klar med rådgivning, inspiration og solidt håndværk.<br><br>Vi hjælper dig gennem hele processen – fra de første skitser til det færdige køkken. Med mange års erfaring sikrer vi, at du får en løsning, der matcher både dit hjem og din hverdag."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      >
      </YdelseLayout>
    );
  } catch (error) {
    console.error('Error in KøkkenPage:', error);
    return <div>Fejl ved indlæsning af side</div>;
  }
}
