import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import Image from 'next/image';
import { Hammer, Paintbrush, Zap, Wrench, BrickWall, Shovel } from 'lucide-react';
import ContactButton from '../../components/buttons/ContactButton';
import Link from 'next/link';
import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';


// Export metadata for SEO
export const metadata = generateServiceMetadata('renovering');

export default async function RenoveringPage() {
  try {
    const allItems = await getAllGalleryItems();
    console.log('All items:', allItems); // Debug log

    // Filter for renovering items - now using exact category match
    const renoveringItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'renovering'
      )
    );

    console.log('Filtered renovering items:', renoveringItems); // Debug log

    // Map data til galleri-format
    const galleryImages = renoveringItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      id: item.id,
      title: item.title,
      description: item.description
    }));

    console.log('Final galleryImages for renovering:', galleryImages); // Debug log

    // Add some test data if no gallery images are found
    const finalGalleryImages = galleryImages.length > 0 ? galleryImages : [
      {
        id: 'test-1',
        url: '/images/services/renovering.png',
        alt: 'Test renovering billede',
        title: 'Test Renovering Projekt',
        description: 'Dette er et test billede for at sikre galleri funktionalitet'
      }
    ];

    console.log('Using gallery images:', finalGalleryImages);

    // Services section data for renovering
    const servicesSection = {
      title: "Faglige services til dit renoveringsprojekt",
      description: "Vi tilbyder komplette løsninger med alle fagområder til renovering af dit hjem",
      backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
      services: [
        {
          icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
          title: "Tømrer/ Snedker",
          description: "Professionel tømrerarbejde til alle renoveringsprojekter."
        },
        
        {
          icon: <BrickWall className="w-6 h-6" strokeWidth={1.5} />,
          title: "Murer",
          description: "Murerarbejde, flisesætning og støbning."
        },
        {
          icon: <Paintbrush className="w-6 h-6" strokeWidth={1.5} />,
          title: "Maler",
          description: "Komplet malerarbejde og overfladebehandling."
        },
        {
          icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
          title: "Elektriker",
          description: "El-installationer og opdatering af elektriske anlæg."
        },
        {
          icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
          title: "VVS",
          description: "Komplet VVS-arbejde, rør og sanitet."
        },
        {
          icon: <Shovel className="w-6 h-6" strokeWidth={1.5} />,
          title: "Gravarbejde",
          description: "Udgravning, fundamentering og jordarbejde."
        }
      ]
    };

    
    return (
      <YdelseLayout
        heroImage="/images/services/renovering.png"
        heroTitle="Renovering"
        heroText="Vi gennemfører omfattende renoveringer der giver dit hjem nyt liv og øget værdi."
        imageTextImage="/images/ali-hmi/ali-renovering.jpeg"
        imageTextTitle="Renovering med overblik og kvalitet"
        imageTextDescription="Skal dit hjem have en kærlig hånd eller en større renovering? Hos HMI Tømrermester tager vi os af alt fra mindre reparationer til omfattende renoveringer. Vi koordinerer alle håndværksfag og sikrer, at dit projekt gennemføres professionelt og til tiden.<br><br>Vores erfaring spænder fra badrenovering og køkkenrenovering til komplet husrenovering. Vi hjælper dig med planlægning, materialevalg og udførelse, så du får det drømmehjem du ønsker dig."
        servicesSection={servicesSection}
        galleryImages={finalGalleryImages}
      >
        
      </YdelseLayout>
    );
  } catch (error) {
    console.error('Error in RenoveringPage:', error);
    return <div>Fejl ved indlæsning af side</div>;
  }
}
