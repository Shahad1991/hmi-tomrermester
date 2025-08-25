'use client';
import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Drill, Paintbrush, Zap, Wrench, BrickWall, Shovel } from 'lucide-react';
import ContactButton from '../../components/buttons/ContactButton';
import Link from 'next/link';

export default function TotalRenoveringPage() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGalleryData() {
      try {
        const allItems = await getAllGalleryItems();
        console.log('All items:', allItems); // Debug log

        // Filter for total-renovering items - now using exact category match
        const totalRenoveringItems = allItems.filter(item => 
          item.categories && item.categories.some(category => 
            category.slug === 'total-renovering' || category.slug === 'total-renovering'
          )
        );

        console.log('Filtered total renovering items:', totalRenoveringItems); // Debug log

        // Map data til galleri-format
        const mappedGalleryImages = totalRenoveringItems.map(item => ({
          url: item.imageUrl,
          alt: item.altText,
          id: item.id,
          title: item.title,
          description: item.description
        }));

        console.log('Final galleryImages for total-renovering:', mappedGalleryImages); // Debug log
        setGalleryImages(mappedGalleryImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
        setLoading(false);
      }
    }

    fetchGalleryData();
  }, []);

  // Services section data for total renovering
  const servicesSection = {
    title: "Komplette faglige services til totalrenovering",
    description: "Vi koordinerer alle håndværksfag og leverer komplet totalrenovering fra A til Z",
    backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
    services: [
      {
        icon: <Drill className="w-6 h-6" strokeWidth={1.5} />,
        title: "Tømrer/ Snedker",
        description: "Professionel tømrerarbejde til totalrenovering og ombygning."
      },
      
      {
        icon: <BrickWall className="w-6 h-6" strokeWidth={1.5} />,
        title: "Murer",
        description: "Murerarbejde, flisesætning og støbning til totalrenovering."
      },
      {
        icon: <Paintbrush className="w-6 h-6" strokeWidth={1.5} />,
        title: "Maler",
        description: "Komplet malerarbejde og overfladebehandling."
      },
      {
        icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
        title: "Elektriker",
        description: "Opdatering af el-installationer til moderne standarder."
      },
      {
        icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
        title: "VVS",
        description: "Komplet VVS-renovering, rør og sanitetsarbejde."
      },
      {
        icon: <Shovel className="w-6 h-6" strokeWidth={1.5} />,
        title: "Gravarbejde",
        description: "Udgravning, fundamentering og jordarbejde til større projekter."
      }
    ]
  };

  if (loading) {
    return <div>Indlæser...</div>;
  }

  return (
    <YdelseLayout
      heroImage="/images/services/total-renovering.jpeg"
      heroTitle="Total Renovering"
      heroText="Vi gennemfører komplette renoveringer fra bund til top og giver dit hjem en total transformation."
      imageTextImage="/images/ali-hmi/ali-total-renovering.jpeg"
      imageTextTitle="Din partner til totalrenovering"
      imageTextDescription="Drømmer du om at give dit hjem en komplet makeover? Hos HMI Tømrermester specialiserer vi os i totalrenoveringer, hvor vi koordinerer alle håndværksfag og sikrer et sammenhængende resultat. Fra planlægning til færdigt resultat tager vi os af alt - strukturelle ændringer, el og VVS, overflader og finish.<br><br>Vi har erfaring med både ældre ejendomme og moderne huse, og vi sikrer at dit hjem både får et nyt look og opfylder moderne standarder for energi og komfort."
      servicesSection={servicesSection}
      galleryImages={galleryImages}
    >
      
    </YdelseLayout>
  );
}