import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import { Drill, Ruler } from 'lucide-react';

// Server-side data fetching
async function getDorVinduerData() {
  try {
    const allItems = await getAllGalleryItems();
    
    console.log('Total items from API:', allItems.length);
    
    // Debug: Log alle kategorier for at se hvad der findes
    const allCategories = new Set();
    allItems.forEach(item => {
      if (item.categories) {
        item.categories.forEach(cat => {
          allCategories.add(cat.slug);
        });
      }
    });
    console.log('Available categories:', Array.from(allCategories));
    
    // Filter for dør og vinduer items - check flere mulige slugs
    const dorVinduerItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'dor-og-vinduer' || 
        category.slug === 'door-and-windows' ||
        category.slug === 'vinduer-og-dore' ||
        category.slug === 'gallery_category-dor-og-vinduer' ||
        category.name?.toLowerCase().includes('dør') ||
        category.name?.toLowerCase().includes('vindue')
      )
    );

    console.log('Filtered dør og vinduer items:', dorVinduerItems.length);
    
    // Debug: Log first few items to see structure
    if (dorVinduerItems.length > 0) {
      console.log('First item structure:', dorVinduerItems[0]);
    }

    // Map data til galleri-format og fjern dubletter
    const mappedGalleryImages = dorVinduerItems.map(item => ({
      id: item.id,
      url: item.imageUrl || '/images/services/dør-vinduer.png',
      alt: item.altText || item.title || 'Dør og vinduer projekt',
      title: item.title || 'Dør og vinduer',
      description: item.acf?.description || item.description || 'Professionel montering af døre og vinduer'
    }));

    // Fjern dubletter baseret på id
    const uniqueGalleryImages = mappedGalleryImages.filter((item, index, self) => 
      index === self.findIndex(t => t.id === item.id)
    );

    console.log('Final unique gallery images:', uniqueGalleryImages.length);
    
    return uniqueGalleryImages;
  } catch (error) {
    console.error('Error fetching dør og vinduer data:', error);
    return [];
  }
}

export default async function DorVinduerPage() {
  const galleryImages = await getDorVinduerData();

  // Services section data for dør og vinduer
  const servicesSection = {
    title: "Faglige services til døre og vinduer",
    description: "Vi tilbyder specialiserede løsninger til installation af døre og vinduer",
    services: [
      {
        icon: <Ruler className="w-6 h-6" strokeWidth={1.5} />,
        title: "Opmåling",
        description: "Præcis opmåling og tilpasning af døre og vinduer."
      },
      {
        icon: <Drill className="w-6 h-6" strokeWidth={1.5} />,
        title: "Tømrer",
        description: "Professionel installation og montering af døre og vinduer."
      }
    ]
  };

  return (
    <YdelseLayout
      heroImage="/images/services/dør-vinduer.png"
      heroTitle="Dør & Vinduer"
      heroText="Vi leverer professionelle løsninger til installation af døre og vinduer."
      imageTextImage="/images/ali-hmi/ali-vindue.jpeg"
      imageTextTitle="Kvalitetsløsninger til døre og vinduer"
      imageTextDescription="Skal dine døre eller vinduer udskiftes eller opgraderes? Hos HMI Tømrermester tilbyder vi professionelle løsninger til både nye og eksisterende boliger – uanset om det gælder enkelte elementer eller en komplet udskiftning.<br><br>Vi sørger for alt fra opmåling og rådgivning til præcis montering med fokus på finish, tæthed og holdbarhed. Vores løsninger er skræddersyet til dine ønsker og behov og lever op til nutidens krav til både æstetik, komfort og energieffektivitet.<br><br>Kontakt os i dag og få et uforpligtende tilbud på nye døre og vinduer – vi står klar til at hjælpe dig sikkert gennem hele processen."
      servicesSection={servicesSection}
      galleryImages={galleryImages}
    />
  );
}