import Head from 'next/head';
import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { Wrench, Zap, Ruler, Drill } from 'lucide-react';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function KokkenPage() {
  const allItems = await getAllGalleryItems();

  // Filter for køkken items - now using exact category match
  const kitchenItems = allItems.filter(item => 
    item.categories && item.categories.some(category => 
      category.slug === 'kokken'
    )
  );

  // Map data til galleri-format
  const galleryImages = kitchenItems.map(item => ({
    url: item.imageUrl,
    alt: item.altText,
    id: item.id,
    title: item.title,
    description: item.description
  }));

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
        icon: <Drill className="w-6 h-6" strokeWidth={1.5} />,
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

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://hmi-tomrermester.dk/ydelser/kokken`} />
      </Head>
      <YdelseLayout
        heroImage="/images/kontakt/kontakt-bg1.png"
        heroTitle="Køkken Renovering"
        heroText="Vi gør dine køkkendrømme til virkelighed med kvalitet og funktionalitet."
        imageTextImage="/images/ali-hmi/kokken.jpg"
        imageTextTitle="Din kvalitetsbevidste køkkenmontør"
        imageTextDescription="Drømmer du om et nyt køkken, der kombinerer funktionalitet, æstetik og høj kvalitet? Hos HMI Tømrermester specialiserer vi os i køkkenrenovering og køkkenmontering for både private og erhverv. Uanset om du ønsker et moderne køkken-alrum, en klassisk løsning eller noget helt tredje, står vi klar med rådgivning, inspiration og solidt håndværk.<br><br>Vi hjælper dig gennem hele processen – fra de første skitser til det færdige køkken. Med mange års erfaring sikrer vi, at du får en løsning, der matcher både dit hjem og din hverdag."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      />
    </>
  );
}
