import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';
import { Hammer, Zap, Paintbrush } from 'lucide-react';

// Export metadata for SEO
export const metadata = generateServiceMetadata('carport');




export default async function CarportPage() {
  try {
    const allItems = await getAllGalleryItems();
    console.log('All items:', allItems); // Debug log

    // Filter for carport items - now using exact category match
    const carportItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'carport'
      )
    );

    console.log('Filtered carport items:', carportItems); // Debug log

    // Map data til galleri-format
    const galleryImages = carportItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      id: item.id,
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
          icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
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
      <YdelseLayout
        heroImage="/images/services/carport.jpeg"
        heroTitle="Carporte i høj kvalitet"
        heroText="Få en skræddersyet carport, der beskytter din bil og matcher dit hjem – bygget med solide materialer og professionelt håndværk."
        imageTextImage="/images/ali-hmi/ali-carport.png"
        imageTextTitle="Carport i høj kvalitet | Specialbygget af HMI Tømrermester"
        imageTextDescription="Skal du have bygget en carport? Hos HMI Tømrermester tilbyder vi skræddersyede løsninger til carporte, der beskytter din bil og tilføjer både funktion og æstetik til din bolig. Vi bygger robuste carporte i høj kvalitet – med mulighed for tilvalg som el-installationer og malerbehandling. Vi hjælper dig hele vejen fra idé og tegning til færdig montering og myndighedsgodkendelse. Se eksempler i vores galleri og kontakt os for et uforpligtende tilbud."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      >
        
      </YdelseLayout>
    );
  } catch (error) {
    console.error('Error in CarportPage:', error);
    return <div>Fejl ved indlæsning af side</div>;
  }
}
