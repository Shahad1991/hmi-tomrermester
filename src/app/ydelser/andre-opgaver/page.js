import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { Hammer, Wrench, Zap, Ruler } from 'lucide-react';


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
      id: item.id
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
          icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
          title: "Materialevalg",
          description: "Rådgivning om materialer og design til akustikpaneler og vindskeder."
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
        heroImage="/images/services/andre-opgaver.jpg"
        heroTitle="Andre Tømreropgaver"
        heroText="Vi udfører specialiserede tømreropgaver såsom montering af akustikpaneler og opsætning af vindskeder – altid med fokus på høj kvalitet og funktionalitet."
        imageTextImage="/images/ali-hmi/ali-andre-opgaver.png"
        imageTextTitle="Komplette løsninger til moderne byggeri"
        imageTextDescription="Akustikpaneler er en effektiv og moderne løsning til at reducere støj og forbedre lydforholdene i både private hjem, kontorer og kommercielle rum. Hos HMI Tømrermester har vi stor erfaring med rådgivning, tilpasning og montering af akustikløsninger, der matcher dit rum og dine behov. Vi tilbyder alt fra opmåling og akustisk vurdering til færdig montering, og vi anvender materialer i høj kvalitet med lang levetid. Uanset om du ønsker sorte lameller, egetræ eller specialdesigns, sørger vi for en elegant og funktionel løsning. Har dit tag behov for nye vindskeder? Vi udskifter eller opsætter vindskeder, der både beskytter mod fugt og giver dit hus et skarpt finish. Vores løsninger tager højde for både holdbarhed, æstetik og byggetekniske krav. Kontakt os for et uforpligtende tilbud – vi hjælper dig trygt gennem hele processen."
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
