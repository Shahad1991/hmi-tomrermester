import Head from 'next/head';
import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { Drill, Zap, Paintbrush } from 'lucide-react';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function CarportPage() {
  const allItems = await getAllGalleryItems();

  // Filter for carport items - now using exact category match
  const carportItems = allItems.filter(item => 
    item.categories && item.categories.some(category => category.slug === 'carport')
  );

  // Map data til galleri-format
  const galleryImages = carportItems.map(item => ({
    url: item.imageUrl,
    alt: item.altText,
    id: item.id,
    title: item.title,
    description: item.description
  }));

  // Services section data for carport
  const servicesSection = {
    title: "Faglige services til dit carportprojekt",
    description: "Vi tilbyder specialiserede løsninger til din carport konstruktion",
    backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
    services: [
      {
        icon: <Paintbrush className="w-6 h-6" strokeWidth={1.5} />,
        title: "Maler",
        description: "Professionel overfladebehandling og beskyttelse af carport."
      },
      {
        icon: <Drill className="w-6 h-6" strokeWidth={1.5} />,
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
    <>
      <Head>
        <link rel="canonical" href="https://hmi-tomrermester.dk/ydelser/carport" />
      </Head>
      <YdelseLayout
        heroImage="/images/services/carport.jpeg"
        heroTitle="Carport i høj kvalitet"
        heroText="Få en skræddersyet carport, der beskytter din bil og matcher dit hjem – bygget med solide materialer og professionelt håndværk."
        imageTextImage="/images/ali-hmi/carport.jpg"
        imageTextTitle="Professionel carportløsning fra idé til montering"
        imageTextDescription="Skal du have bygget en carport? Hos HMI Tømrermester tilbyder vi skræddersyede løsninger til carporte, der beskytter din bil og tilføjer både funktion og æstetik til din bolig. Vi bygger robuste carporte i høj kvalitet – med mulighed for tilvalg som el-installationer og malerbehandling.<br><br> Vi hjælper dig hele vejen fra idé og tegning til færdig montering og myndighedsgodkendelse. Se eksempler i vores galleri og kontakt os for et uforpligtende tilbud."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      />
    </>
  );
}
