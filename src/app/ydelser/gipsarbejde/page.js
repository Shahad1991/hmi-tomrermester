import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { Hammer, Paintbrush, Zap } from 'lucide-react';


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
        imageTextImage="/images/ali-hmi/hmi-ali.png"
        imageTextTitle="Din professionelle gips specialist"
        imageTextDescription="Har du brug for nye vægge, lofter eller renovering af eksisterende gipsoverflader? Hos HMI Tømrermester specialiserer vi os i alle former for gipsarbejde. Vi håndterer hele processen fra opsætning af gipsvægge og lofter til sparkling, grundbehandling og færdig maling. Vores erfarne håndværkere sikrer en perfekt finish med glatte overflader og præcis udførelse. Vi koordinerer også el-installationer bag gipsvæggene, så du får en komplet løsning. Uanset om det er nye skillevægge, loftssænkning eller reparation, leverer vi kvalitetsarbejde der holder i mange år."
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
