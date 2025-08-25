'use client';
import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Hammer, Drill, Layers } from 'lucide-react';
import ContactButton from '../../components/buttons/ContactButton';
import Link from 'next/link';

export default function GulvPage() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGalleryData() {
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
        const mappedGalleryImages = gulvItems.map(item => ({
          url: item.imageUrl,
          alt: item.altText,
          id: item.id,
          title: item.title,
          description: item.description
        }));

        console.log('Final galleryImages for gulv:', mappedGalleryImages); // Debug log
        setGalleryImages(mappedGalleryImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
        setLoading(false);
      }
    }

    fetchGalleryData();
  }, []);

  // Services section data for gulv
  const servicesSection = {
    title: "Faglige services til dit gulvprojekt",
    description: "Vi tilbyder specialiserede løsninger til din gulv installation",
    backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
    services: [
      {
        icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
        title: "Støj konstruktion",
        description: "Lydreducerende undergulve og støjdæmpende løsninger."
      },
      {
        icon: <Layers className="w-6 h-6" strokeWidth={1.5} />,
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

  if (loading) {
    return <div>Indlæser...</div>;
  }

  return (
    <YdelseLayout
      heroImage="/images/services/gulv.png"
      heroTitle="Gulv"
      heroText="Vi leverer professionelle gulvløsninger der forvandler dit hjem."
      imageTextImage="/images/ali-hmi/ali-gulv.png"
      imageTextTitle="Din professionelle gulvspecialist"
      imageTextDescription="Drømmer du om nye gulve der forvandler dit hjem? Hos HMI Tømrermester specialiserer vi os i installation af alle typer gulve - fra klassisk parket og laminat til moderne vinyl og fliser. Vi håndterer hele processen fra rådgivning og materialevejledning til professionel installation.<br><br>Vores erfarne håndværkere sikrer en perfekt finish med omhyggelig forberedelse af undergulvet og præcis montage. Uanset om det er et enkelt værelse eller hele huset, leverer vi kvalitetsarbejde der holder i mange år."
      servicesSection={servicesSection}
      galleryImages={galleryImages}
    >
      
    </YdelseLayout>
  );
}
