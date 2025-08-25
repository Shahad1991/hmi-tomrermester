'use client';
import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { useState, useEffect } from 'react';
import { Drill, Zap, Paintbrush } from 'lucide-react';

export default function CarportPage() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGalleryData() {
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
        const mappedGalleryImages = carportItems.map(item => ({
          url: item.imageUrl,
          alt: item.altText,
          id: item.id,
          title: item.title,
          description: item.description
        }));

        setGalleryImages(mappedGalleryImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
        setLoading(false);
      }
    }

    fetchGalleryData();
  }, []);

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
        icon: <Drill className="w-6 h-6" strokeWidth={1.5} />,
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

  if (loading) {
    return <div>Indlæser...</div>;
  }

  return (
    <YdelseLayout
      heroImage="/images/services/carport.jpeg"
      heroTitle="Carport i høj kvalitet"
      heroText="Få en skræddersyet carport, der beskytter din bil og matcher dit hjem – bygget med solide materialer og professionelt håndværk."
      imageTextImage="/images/ali-hmi/ali-carport.jpeg"
      imageTextTitle="Professionel carportløsning fra idé til montering"
      imageTextDescription="Skal du have bygget en carport? Hos HMI Tømrermester tilbyder vi skræddersyede løsninger til carporte, der beskytter din bil og tilføjer både funktion og æstetik til din bolig. Vi bygger robuste carporte i høj kvalitet – med mulighed for tilvalg som el-installationer og malerbehandling.<br><br> Vi hjælper dig hele vejen fra idé og tegning til færdig montering og myndighedsgodkendelse. Se eksempler i vores galleri og kontakt os for et uforpligtende tilbud."
      servicesSection={servicesSection}
      galleryImages={galleryImages}
    >
      
    </YdelseLayout>
  );
}
