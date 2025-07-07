import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { Hammer, Paintbrush, Zap } from 'lucide-react';
import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';

// Export metadata for SEO
export const metadata = generateServiceMetadata('gipsarbejde');

export default async function GipsarbejdePage() {
  try {
    const allItems = await getAllGalleryItems();
    console.log('All items:', allItems); // Debug log

    // Filter for gipsarbejde items - now using exact category match
    const gipsarbejdeItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'gipsarbejde'
      )
    );

    console.log('Filtered gipsarbejde items:', gipsarbejdeItems); // Debug log

    // Map data til galleri-format
    const galleryImages = gipsarbejdeItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      id: item.id,
      description: item.description
    }));

    

    // Services section data for gipsarbejde
    const servicesSection = {
      title: "Faglige services til gipsarbejde",
      description: "Vi tilbyder specialiserede løsninger til gipsarbejde og indretning",
      backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
      services: [
        {
          icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
          title: "Tømrer",
          description: "Professionel opsætning af gipsvægge og lofter."
        },
        {
          icon: <Paintbrush className="w-6 h-6" strokeWidth={1.5} />,
          title: "Maler",
          description: "Sparkling, grundbehandling og maling af gipsoverflader."
        },
        {
          icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
          title: "Elektriker",
          description: "El-installationer bag gipsvægge og i lofter."
        }
      ]
    };

    
    return (
      <YdelseLayout
        heroImage="/images/services/gipsarbejde.jpeg"
        heroTitle="Gipsarbejde"
        heroText="Vi leverer professionelle gipsløsninger til vægge og lofter."
        imageTextImage="/images/ali-hmi/ali-gipsarbejde.png"
        imageTextTitle="Gipsarbejde i høj kvalitet til vægge og lofter "
        imageTextDescription="Hos HMI Tømrermester tilbyder vi professionelt gipsarbejde til både nybyg, renovering og ombygning. Vi udfører alt fra opsætning af gipsvægge og lofter til spartling, grundbehandling og malerklargøring – altid med fokus på et flot og holdbart resultat.<br><br>

        Vores erfarne håndværkere sikrer præcise afslutninger og glatte overflader, uanset om der er tale om nye rumopdelinger, loftssænkninger eller reparation af eksisterende konstruktioner.

        Har du brug for el bag væggene? Vi sørger også for koordinering af installationer, så du får en komplet og gennemtænkt løsning."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      >
        
      </YdelseLayout>
    );
  } catch (error) {
    console.error('Error in GipsarbejdePage:', error);
    return <div>Fejl ved indlæsning af side</div>;
  }
}
