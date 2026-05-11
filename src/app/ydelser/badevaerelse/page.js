import Head from 'next/head';
import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';
import { Hammer, Drill, Ruler } from 'lucide-react';

// Export metadata for SEO
export const metadata = generateServiceMetadata('badevaerelse');


export default async function BadevaerelsePage() {
  try {
    const allItems = await getAllGalleryItems();
    // Filter for badværelse items - now using exact category match
    const bathroomItems = allItems.filter(item =>
      item.categories && item.categories.some(category =>
        category.slug === 'bathroom'
      )
    );

    // Map data til galleri-format
    const galleryImages = bathroomItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      title: item.title,
      id: item.id,
      description: item.description
    }));

    // Services section data for badevaerelse
    const servicesSection = {
      title: "Faglige services til specialiserede tømreropgaver",
      description: "Vi tilbyder professionelle løsninger til akustikpaneler og vindskeder",
      backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
      services: [
        {
          icon: <Ruler className="w-6 h-6" strokeWidth={1.5} />,
          title: "Opmåling",
          description: "Præcis opmåling og akustisk vurdering af rum og behov."
        },
        {
          icon: <Drill className="w-6 h-6" strokeWidth={1.5} />,
          title: "Tømrer/Snedker",
          description: "Professionel tømrer- og snedkerarbejde til specialiserede opgaver."
        },
        {
          icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
          title: "Montage",
          description: "Professionel installation og finish med fokus på kvalitet og detaljer."
        }
      ]
    };
    
    return (
      <>
      <Head>
        <link rel="canonical" href="https://hmi-tomrermester.dk/ydelser/badevaerelse" />
      </Head>
      <YdelseLayout
        heroImage="/images/ydelser/badevaerelse.webp"
        heroTitle="Badeværelse"
        heroText="Professionel renovering og tømrerarbejde til badeværelse i Taastrup – altid med fokus på kvalitet, funktionalitet og æstetik."
        imageTextImage="/images/ali-hmi/andre-opgaver.jpg"
        imageTextTitle="Badeværelsesrenovering i høj kvalitet"
        imageTextDescription="Vi har stor erfaring med både små og store badeværelsesprojekter, og vi benytter kun robuste materialer, der sikrer et flot og langtidsholdbart resultat. Uanset om du ønsker et klassisk eller moderne badeværelse, står vi klar til at skræddersy løsningen efter dine behov og ønsker.

<br>Kontakt os i dag for et uforpligtende tilbud på tømrerarbejde til badeværelse i Taastrup og omegn – vi garanterer professionel service, gennemsigtig kommunikation og et resultat, du bliver glad for."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      /> 
    </>
    );
  } catch (error) {
    return <div>Fejl ved indlæsning af side</div>;
  }
}
