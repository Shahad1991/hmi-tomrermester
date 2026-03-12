'use client';
import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { useState, useEffect } from 'react';
import { Hammer, Ruler, Drill } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HegnPage() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGalleryData() {
      try {
        const allItems = await getAllGalleryItems();
        const hegnItems = allItems.filter(item => 
          item.categories && item.categories.some(category => 
            category.slug === 'hegn'
          )
        );
        const mappedGalleryImages = hegnItems.map(item => ({
          url: item.imageUrl,
          alt: item.altText,
          id: item.id,
          title: item.title,
          description: item.description
        }));
        setGalleryImages(mappedGalleryImages);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchGalleryData();
  }, []);

  const servicesSection = {
    title: "Faglige services til dit hegnprojekt",
    description: "Vi tilbyder specialiserede løsninger til din hegn konstruktion",
    backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
    services: [
      {
        icon: <Ruler className="w-6 h-6" strokeWidth={1.5} />,
        title: "Opmåling",
        description: "Præcis opmåling og planlægning af dit hegn."
      },
      {
        icon: <Drill className="w-6 h-6" strokeWidth={1.5} />,
        title: "Tømrer",
        description: "Professionel konstruktion og montering af hegn."
      },
      {
        icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
        title: "Støbning af stolper",
        description: "Professionel støbning og etablering af stabile hegnstolper."
      }
    ]
  };

  if (loading) {
    return <div>Indlæser...</div>;
  }

  return (
    <YdelseLayout
      heroImage="/images/services/hegn.jpg"
      heroTitle="Hegn"
      heroText="Vi bygger solide hegn der skaber privatliv og definerer din ejendom."
      imageTextImage="/images/ali-hmi/ali-hegn.jpeg"
      imageTextTitle="Skræddersyede hegn i høj kvalitet"
      imageTextDescription="Har du brug for et nyt hegn til din ejendom? Hos HMI Tømrermester specialiserer vi os i konstruktion af holdbare og æstetiske hegn i forskellige materialer og designs. Uanset om du ønsker et klassisk trætræmhegn, et moderne design eller noget helt tredje, hjælper vi dig med at finde den perfekte løsning.<br><br>Vi sørger for korrekt fundamentering, præcis montering og overholdelse af alle byggeregler. Med vores erfaring får du et hegn der holder i mange år."
      servicesSection={servicesSection}
      galleryImages={galleryImages}
    />
  );
}
