import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';
import { Hammer, Ruler } from 'lucide-react';

// Export metadata for SEO
export const metadata = generateServiceMetadata('dor-vinduer');

export default async function DorVinduerPage() {
  try {
    const allItems = await getAllGalleryItems();
    console.log('All items:', allItems); // Debug log

    // Filter for dør og vinduer items - now using exact category match
    const dørVinduerItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'dor-og-vinduer' 
      )
    );

    console.log('Filtered dør og vinduer items:', dørVinduerItems); // Debug log

    // Map data til galleri-format
    const galleryImages = dørVinduerItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      id: item.id,
      description: item.description
    }));

    

    // Services section data for dør og vinduer
    const servicesSection = {
      title: "Faglige services til døre og vinduer",
      description: "Vi tilbyder specialiserede løsninger til installation af døre og vinduer",

      services: [
        {
          icon: <Ruler className="w-6 h-6" strokeWidth={1.5} />,
          title: "Opmåling",
          description: "Præcis opmåling og tilpasning af døre og vinduer."
        },
        {
          icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
          title: "Tømrer",
          description: "Professionel installation og montering af døre og vinduer."
        }
      ]
    };

    
    return (
      <YdelseLayout
        heroImage="/images/services/dør-vinduer.png"
        heroTitle="Dør & Vinduer"
        heroText="Vi leverer professionelle løsninger til installation af døre og vinduer."
        imageTextImage="/images/ali-hmi/ali-vindue.jpeg"
        imageTextTitle="Din professionelle dør og vindue specialist"
        imageTextDescription="Har du brug for nye døre eller vinduer til dit hjem? Hos HMI Tømrermester specialiserer vi os i installation af alle typer døre og vinduer. Vi håndterer hele processen fra opmåling og rådgivning til professionel installation. Vores erfarne håndværkere sikrer en perfekt pasform og finish med omhyggelig tilpasning og præcis montering. Uanset om det er enkelte døre, vinduer eller en komplet udskiftning, leverer vi kvalitetsarbejde der holder i mange år og forbedrer dit hjems energieffektivitet og komfort."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      >
        
      </YdelseLayout>
    );
  } catch (error) {
    console.error('Error in DørVinduerPage:', error);
    return <div>Fejl ved indlæsning af side</div>;
  }
}
