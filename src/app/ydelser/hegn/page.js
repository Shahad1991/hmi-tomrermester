import Head from 'next/head';
import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { Hammer, Ruler, Drill } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function HegnPage() {
  const allItems = await getAllGalleryItems();
  const hegnItems = allItems.filter(item =>
    item.categories && item.categories.some(category => category.slug === 'hegn')
  );
  const galleryImages = hegnItems.map(item => ({
    url: item.imageUrl,
    alt: item.altText,
    id: item.id,
    title: item.title,
    description: item.description
  }));

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
        icon: <Drill className="w-6 h-6" strokeWidth={1.5} />,
        title: "Tømrer",
        description: "Professionel konstruktion og montering af hegn."
      },
      {
        icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
        title: "Støbning af stolper",
        description: "Professionel støbning og etablering af stabile hegnstolper."
      }
    ]
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://hmi-tomrermester.dk/ydelser/hegn" />
      </Head>
      <YdelseLayout
        heroImage="/images/ydelser/hegn.webp"
        heroTitle="Hegn"
        heroText="Vi bygger solide hegn der skaber privatliv og definerer din ejendom."
        imageTextImage="/images/ali-hmi/hegn.jpg"
        imageTextTitle="Skræddersyede hegn i høj kvalitet"
        imageTextDescription="Har du brug for et nyt hegn til din ejendom? Hos HMI Tømrermester specialiserer vi os i konstruktion af holdbare og æstetiske hegn i forskellige materialer og designs. Uanset om du ønsker et klassisk trætræmhegn, et moderne design eller noget helt tredje, hjælper vi dig med at finde den perfekte løsning.<br><br>Vi sørger for korrekt fundamentering, præcis montering og overholdelse af alle byggeregler. Med vores erfaring får du et hegn der holder i mange år."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      />
    </>
  );
}
