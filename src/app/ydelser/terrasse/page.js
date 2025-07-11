import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { Hammer, Ruler } from 'lucide-react';
import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';


// Export metadata for SEO
export const metadata = generateServiceMetadata('terrasse');

export default async function TerrassePage() {
  try {
    const allItems = await getAllGalleryItems();
    console.log('All items:', allItems); // Debug log

    // Filter for terrasse items - now using exact category match
    const terrasseItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'terrasse'
      )
    );

    console.log('Filtered terrasse items:', terrasseItems); // Debug log
    
    // Map data til galleri-format
    const galleryImages = terrasseItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      id: item.id,
      title: item.title,
      description: item.description
    }));

    

    // Services section data for terrasse
    const servicesSection = {
      title: "Faglige services til dit terrasseprojekt",
      description: "Vi tilbyder specialiserede løsninger til din terrasse konstruktion",
      backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
      services: [
        {
          icon: <Ruler className="w-6 h-6" strokeWidth={1.5} />,
          title: "Opmåling",
          description: "Præcis opmåling og planlægning af din terrasse."
        },
        {
          icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
          title: "Tømrer/ Snedker",
          description: "Professionel konstruktion og montering af terrasse."
        }
      ]
    };

    
    return (
      <YdelseLayout
        heroImage="/images/services/terrasse.jpg"
        heroTitle="Terrasse"
        heroText="Vi bygger smukke terrasser der udvider dit hjem og skaber det perfekte uderum."
        imageTextImage="/images/ali-hmi/ali-terrasse.jpeg"
        imageTextTitle="Terrasser med fokus på kvalitet, design og holdbarhed"
        imageTextDescription="Hos HMI Tømrermester bygger vi terrasser, der forlænger dit uderum og skaber rammen om hyggelige stunder året rundt. Vi tilbyder skræddersyede løsninger i både klassisk træ og moderne komposit – altid tilpasset din bolig og dine ønsker.<br><br>Vores erfarne fagfolk sikrer et solidt fundament, præcis opbygning og en flot finish, der kan modstå det danske vejr. Uanset om du drømmer om en enkel hævet træterrasse eller en større, niveaudelt løsning, står vi klar til at rådgive dig gennem hele processen.<br><br>Med fokus på kvalitet, funktionalitet og æstetik får du en terrasse, der både holder og klæder dit hjem. Kontakt os i dag for en uforpligtende snak om dit terrasseprojekt."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      >
        
      </YdelseLayout>
    );
  } catch (error) {
    console.error('Error in TerrassePage:', error);
    return <div>Fejl ved indlæsning af side</div>;
  }
}
