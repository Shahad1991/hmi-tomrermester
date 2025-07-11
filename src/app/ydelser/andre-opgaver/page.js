import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { generateServiceMetadata } from '../../../metadata/MetaDataCollection';
import { Hammer, Drill, Ruler } from 'lucide-react';

// Export metadata for SEO
export const metadata = generateServiceMetadata('andre-opgaver');


export default async function AndreOpgaverPage() {
  try {
    const allItems = await getAllGalleryItems();
    console.log('All items:', allItems); // Debug log

    // Filter for andre opgaver items - now using exact category match
    const andreOpgaverItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'andre-opgaver' || category.slug === 'andre_opgaver'
      )
    );

    console.log('Filtered andre opgaver items:', andreOpgaverItems); // Debug log

    // Map data til galleri-format
    const galleryImages = andreOpgaverItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      title: item.title,
      id: item.id,
      description: item.description
    }));

    

    // Services section data for andre opgaver
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
      <YdelseLayout
        heroImage="/images/services/andre-opgaver.png"
        heroTitle="Andre Tømreropgaver"
        heroText="Vi udfører specialiserede tømreropgaver såsom montering af akustikpaneler og opsætning af vindskeder – altid med fokus på høj kvalitet og funktionalitet."
        imageTextImage="/images/ali-hmi/ali-andre-opgaver.png"
        imageTextTitle="Komplette løsninger til moderne byggeri"
        imageTextDescription="Hos HMI Tømrermester hjælper vi med en bred vifte af tømreropgaver – fra opsætning af akustikpaneler og udskiftning af vindskeder til mindre tagarbejde og specialopgaver.

         <br> Vi tilbyder komplette løsninger med fokus på kvalitet, holdbarhed og godt håndværk. Uanset om du har brug for bedre lydforhold i hjemmet, vedligeholdelse af udhæng eller præcise bygningsdetaljer, står vi klar med rådgivning, opmåling og professionel montering.

         <br><br> Vi benytter robuste materialer og arbejder altid med øje for både funktionalitet og æstetik.

          Kontakt os i dag for et uforpligtende tilbud – vi skræddersyr løsningen efter dine behov."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      >
        
      </YdelseLayout>
    );
  } catch (error) {
    console.error('Error in AndreOpgaverPage:', error);
    return <div>Fejl ved indlæsning af side</div>;
  }
}
