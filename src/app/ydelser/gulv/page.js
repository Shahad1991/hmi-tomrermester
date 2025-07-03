import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { Hammer, Wrench, Drill } from 'lucide-react';


export default async function GulvPage() {
  try {
    const allItems = await getAllGalleryItems();
    console.log('All items:', allItems); // Debug log

    // Filter for gulv items - now using exact category match
    const gulvItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'gulv'
      )
    );

    console.log('Filtered gulv items:', gulvItems); // Debug log

    // Map data til galleri-format
    const galleryImages = gulvItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      title: item.title,
      id: item.id,
      description: item.description
    }));

    

    // Services section data for gulv
    const servicesSection = {
      title: "Faglige services til dit gulvprojekt",
      description: "Vi tilbyder specialiserede løsninger til din gulv installation",
      backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
      services: [
        {
          icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
          title: "Støj konstruktion",
          description: "Lydreducerende undergulve og støjdæmpende løsninger."
        },
        {
          icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
          title: "Gulvlægning",
          description: "Professionel installation af alle gulvtyper."
        },
        {
          icon: <Drill className="w-6 h-6" strokeWidth={1.5} />,
          title: "Tømrer/Snedker",
          description: "Specialiseret tømrer- og snedkerarbejde til gulvprojekter."
        }
      ]
    };

    
    return (
      <YdelseLayout
        heroImage="/images/services/gulv.png"
        heroTitle="Gulv"
        heroText="Vi leverer professionelle gulvløsninger der forvandler dit hjem."
        imageTextImage="/images/ali-hmi/ali-gulv.png"
        imageTextTitle="Din professionelle gulvspecialist"
        imageTextDescription="Drømmer du om nye gulve der forvandler dit hjem? Hos HMI Tømrermester specialiserer vi os i installation af alle typer gulve - fra klassisk parket og laminat til moderne vinyl og fliser. Vi håndterer hele processen fra rådgivning og materialevejledning til professionel installation. Vores erfarne håndværkere sikrer en perfekt finish med omhyggelig forberedelse af undergulvet og præcis montage. Uanset om det er et enkelt værelse eller hele huset, leverer vi kvalitetsarbejde der holder i mange år."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      >
        
      </YdelseLayout>
    );
  } catch (error) {
    console.error('Error in GulvPage:', error);
    return <div>Fejl ved indlæsning af side</div>;
  }
}
