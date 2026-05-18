import Head from 'next/head';
import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';
import { Drill, BrickWall, Paintbrush, Zap, Wrench } from 'lucide-react';

// SEO metadata
export const metadata = generateServiceMetadata('badevaerelse');

export default async function BadevaerelsePage() {
  try {
    const allItems = await getAllGalleryItems();

    // Filter badeværelse items
    const bathroomItems = allItems.filter(item =>
      item.categories &&
      item.categories.some(category => category.slug === 'bathroom')
    );

    const galleryImages = bathroomItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      title: item.title,
      id: item.id,
      description: item.description
    }));

    // SERVICES (SEO-optimeret og relevant)
    const servicesSection = {
      title: "Komplette faglige services til totalrenovering",
      description: "Vi koordinerer alle håndværksfag og leverer komplet totalrenovering fra A til Z",
      backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
      services: [
        {
          icon: <Drill className="w-6 h-6" strokeWidth={1.5} />,
          title: "Tømrer/ Snedker",
          description: "Professionel tømrerarbejde til totalrenovering og ombygning."
        },
        {
          icon: <BrickWall className="w-6 h-6" strokeWidth={1.5} />,
          title: "Murer",
          description: "Murerarbejde, flisesætning og støbning til totalrenovering."
        },
        {
          icon: <Paintbrush className="w-6 h-6" strokeWidth={1.5} />,
          title: "Maler",
          description: "Komplet malerarbejde og overfladebehandling."
        },
        {
          icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
          title: "Elektriker",
          description: "Opdatering af el-installationer til moderne standarder."
        },
        {
          icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
          title: "VVS",
          description: "Komplet VVS-renovering, rør og sanitetsarbejde."
        },
      ]
    };

    return (
      <>
        <Head>
          <link
            rel="canonical"
            href="https://hmi-tomrermester.dk/ydelser/badevaerelse"
          />
        </Head>

        <YdelseLayout
          heroImage="/images/ydelser/badeværelse-grøn-1.png"
          heroTitle="Badeværelse renovering"
          heroText="Eksperter i moderne og funktionelle badeværelser i Taastrup."
          imageTextImage="/images/ali-hmi/renovering.jpg"
          imageTextTitle="Komplette løsninger til badeværelser"
          imageTextDescription="Hos HMI Tømrermester tilbyder vi professionel badeværelsesrenovering fra start til slut. Vi hjælper med alt fra opmåling og planlægning til montering og færdiggørelse af dit nye badeværelse. Uanset om du ønsker en mindre opgradering eller en totalrenovering, leverer vi solidt håndværk og holdbare løsninger med fokus på kvalitet og æstetik. Kontakt os i dag for et uforpligtende tilbud – vi skræddersyr løsningen efter dine behov."
          servicesSection={servicesSection}
          galleryImages={galleryImages}
        />
      </>
    );

  } catch (error) {
    return <div>Fejl ved indlæsning af side</div>;
  }
}