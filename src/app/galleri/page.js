import Image from 'next/image';

const projects = [
  {
    id: 1,
    src: '/projekt1.jpg',
    title: 'Terrasse i eg',
    description: 'Specialdesignet til sommerhus. Udført med FSC-certificeret træ.',
  },
  {
    id: 2,
    src: '/projekt2.jpg',
    title: 'Køkkenrenovering',
    description: 'Moderne snedkerkøkken med massivt egetræ og skjult opbevaring.',
  },
  {
    id: 3,
    src: '/projekt3.jpg',
    title: 'Ny carport',
    description: 'Elegant og funktionel løsning, integreret med husets arkitektur.',
  },
  {
    id: 4,
    src: '/projekt4.jpg',
    title: 'Tagkonstruktion',
    description: 'Solidt håndværk. Bygget til at modstå det danske vejr i mange år.',
  },
  {
    id: 5,
    src: '/projekt5.jpg',
    title: 'Indbygget reol',
    description: 'Håndlavet opbevaringsløsning i minimalistisk design og høj kvalitet.',
  },
  {
    id: 6,
    src: '/projekt6.jpg',
    title: 'Udendørs træterrasse',
    description: 'Skabt til afslapning og hyggelige aftener med familien og venner.',
  },
];

export default function Galleri() {
  return (
    <div className="mx-auto mt-28 max-w-7xl px-6">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center text-center overflow-hidden">
        <div className="relative z-20 max-w-2xl px-5 py-12 text-center">
          <h1 className="text-darkblue text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
            Galleri
          </h1>
          <p className="text-darkblue text-lg md:text-xl lg:text-2xl mb-8">
            Se et udvalg af vores tidligere projekter og få inspiration til dit næste byggeri.
          </p>
        </div>
      </section>

      {/* Galleri grid */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-md">
            {/* Billede */}
            <Image
              src={project.src}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover-overlay (valgfri effekt) */}
            <div className="absolute inset-0 bg-darkblue bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Titel og beskrivelse (fast synligt) */}
            <div className="bg-white px-4 py-4 text-darkblue">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm leading-snug line-clamp-2">{project.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
