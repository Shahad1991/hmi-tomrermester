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
    const dorVinduerItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'dor-og-vinduer' 
      )
    );

    console.log('Filtered dør og vinduer items:', dorVinduerItems); // Debug log

    // Map data til galleri-format
    const galleryImages = dorVinduerItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      id: item.id,
      title: item.title,
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
        imageTextTitle="Kvalitetsløsninger til døre og vinduer"
        imageTextDescription="Skal dine døre eller vinduer udskiftes eller opgraderes? Hos HMI Tømrermester tilbyder vi professionelle løsninger til både nye og eksisterende boliger – uanset om det gælder enkelte elementer eller en komplet udskiftning.<br><br>Vi sørger for alt fra opmåling og rådgivning til præcis montering med fokus på finish, tæthed og holdbarhed. Vores løsninger er skræddersyet til dine ønsker og behov og lever op til nutidens krav til både æstetik, komfort og energieffektivitet.<br><br>Kontakt os i dag og få et uforpligtende tilbud på nye døre og vinduer – vi står klar til at hjælpe dig sikkert gennem hele processen."
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
