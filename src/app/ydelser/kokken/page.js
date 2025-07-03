import YdelseLayout from '../YdelseLayout';
import { getAllGalleryItems } from '../../../lib/api';
import Image from 'next/image';
import { Hammer, Wrench, Zap, Ruler } from 'lucide-react';
import ContactButton from '../../components/buttons/ContactButton';
import Link from 'next/link';


export default async function KokkenPage() {
  try {
    const allItems = await getAllGalleryItems();
    console.log('All items:', allItems); // Debug log

    // Filter for køkken items - now using exact category match
    const kitchenItems = allItems.filter(item => 
      item.categories && item.categories.some(category => 
        category.slug === 'kokken'
      )
    );

    console.log('Filtered kitchen items:', kitchenItems); // Debug log

    // Map data til galleri-format
    const galleryImages = kitchenItems.map(item => ({
      url: item.imageUrl,
      alt: item.altText,
      title: item.title,
      id: item.id,
      description: item.description
    }));

    console.log('Kitchen gallery images:', galleryImages); // Debug log

    // Services section data for køkken
    const servicesSection = {
      title: "Faglige services til dit køkkenprojekt",
      description: "Vi tilbyder specialiserede løsninger til din køkkenrenovering",
      backgroundImage: "/images/backgrounds/om-os-service-bg.jpeg",
      services: [
        {
          icon: <Ruler className="w-6 h-6" strokeWidth={1.5} />,
          title: "Opmåling",
          description: "Præcis opmåling af dit køkken for perfekt tilpasning."
        },
        {
          icon: <Hammer className="w-6 h-6" strokeWidth={1.5} />,
          title: "Tømrer/ Snedker",
          description: "Professionel montering og tilpasning af køkkenelementer."
        },
        {
          icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
          title: "Elektriker",
          description: "El-installationer til belysning, stikkontakter og hvidevarer."
        },
        {
          icon: <Wrench className="w-6 h-6" strokeWidth={1.5} />,
          title: "VVS",
          description: "Vand og afløb til vask, opvaskemaskine og andre installationer."
        }
      ]
    };

    // Partnership section data for Epoq
    const partnershipSection = {
      title: "Komplet køkkenrenovering med Elgiganten og Epoq",
      description: "Vi er certificerede installatører af Epoq køkkener fra Elgiganten og tilbyder komplet renovering fra A til Z. Vi monterer og samler dit nye køkken og koordinerer hele renoveringen med vores netværk af specialiserede håndværkere - elektrikere, murere og malere. Du får alt fra én hånd, så du kan læne dig tilbage mens vi skaber dit drømmekøkken med professionel kvalitet i alle led.",
      image: "/images/services/køkken.png",
      imageAlt: "Komplet køkkenrenovering med Epoq køkken fra Elgiganten",
      partnerLogos: [
        {
          src: "/images/partners/epoq-logo.png",
          alt: "Epoq Køkken logo"
        }
      ],
      ctaButton: {
        text: "Se udvalg af Epoq køkkener",
        link: "https://www.elgiganten.dk/epoq/koekken"
      }
    };

    return (
      <YdelseLayout
        heroImage="/images/kontakt/kontakt-bg1.png"
        heroTitle="Køkkenrenovering"
        heroText="Vi gør dine køkkendrømme til virkelighed med kvalitet og funktionalitet."
        imageTextImage="/images/ali-hmi/ali-kokken.jpeg"
        imageTextTitle="Din kvalitetsbevidste køkkenmontør"
        imageTextDescription="Drømmer du om et nyt køkken, der kombinerer funktionalitet, æstetik og høj kvalitet? Hos HMI Tømrermester specialiserer vi os i køkkenrenovering og køkkenmontering for både private og erhverv. Uanset om du ønsker et moderne køkken-alrum, en klassisk løsning eller noget helt tredje, står vi klar med rådgivning, inspiration og solidt håndværk. Vi hjælper dig gennem hele processen – fra de første skitser til det færdige køkken. Med mange års erfaring sikrer vi, at du får en løsning, der matcher både dit hjem og din hverdag."
        servicesSection={servicesSection}
        galleryImages={galleryImages}
      >
        {/* Partnership Section - kun for køkken siden */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Left */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                  <Image 
                    src={partnershipSection.image}
                    alt={partnershipSection.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-darkblue rounded-full opacity-10"></div>
              </div>

              {/* Text Right */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-darkblue text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight">
                    {partnershipSection.title}
                  </h2>
                  <div className="w-24 h-1 bg-accent mb-8"></div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-700 text-xl leading-relaxed">
                    {partnershipSection.description}
                  </p>
                  
                  {/* Partner logos */}
                  <div className="flex flex-wrap gap-6 items-center pt-6">
                    {partnershipSection.partnerLogos.map((logo, index) => (
                      <div key={index} className="flex items-center">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={120}
                          height={60}
                          className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <ContactButton />
                    <Link href={partnershipSection.ctaButton.link} target="_blank" rel="noopener noreferrer">
                      <button className="w-full px-8 py-3 border-2 border-accent text-darkblue rounded-lg hover:bg-accent hover:text-white transition-all duration-300 font-semibold">
                        {partnershipSection.ctaButton.text}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </YdelseLayout>
    );
  } catch (error) {
    console.error('Error in KøkkenPage:', error);
    return <div>Fejl ved indlæsning af side</div>;
  }
}
