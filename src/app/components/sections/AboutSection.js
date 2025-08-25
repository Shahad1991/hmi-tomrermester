import Image from 'next/image';
import AboutButton from '../buttons/AboutButton';

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Billede-sektion med overlappende badge */}
          <div className="relative w-full h-72 sm:h-96 md:h-full rounded-lg overflow-hidden shadow-lg min-h-[300px]">
            <Image
              src="/images/ali-hmi/hmi-ali.png"
              alt="HMI Tømrermester i både private hjem og erhvervsprojekter"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover filter sepia-40 brightness-95 saturate-110 hue-rotate-5"
              priority
            />
            {/* 25+ års erfaring badge */}
            <div className="absolute -left-0 -top-0">
              <div className="relative flex flex-col items-center justify-center w-28 h-24 bg-accent shadow-xl z-10">
                <span className="text-4xl font-bold font-serif text-darkblue">+10</span>
                <span className="text-xs font-medium text-darkblue uppercase tracking-wider text-center">
                  Års Erfaring
                </span>
              </div>
            </div>
          </div>

          {/* Tekst-sektion */}
          <div>
            <div className="mb-8">
              <p className="text-accent font-medium mb-2">HVORFOR VÆLGE OS SOM DIN TØMRER?</p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-darkblue mb-4">
                Pålidelig tømrermester til dine projekter
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-orange-400"></div>
              <p className="text-lg text-gray-600 mt-4 mb-6">
                Vi leverer <strong>præcist håndværk</strong> til både private og virksomheder. Uanset om du skal renovere dit køkken eller 
                udføre en større erhvervsopgave, sørger vi for <strong>kvalitet, punktlighed og fair priser</strong>.
              </p>
            </div>

            {/* Fordele til både privat og erhverv */}
            <div className="space-y-6 mb-8">
              {[
                "Høj arbejdskvalitet - Vi sætter altid kvalitet fremfor pris, hvilket er din garanti for en veludført opgave",
                "Samarbejde med andre fag - Vi koordinerer VVS, elektriker og maler",
                "Pålidelighed og kvalitet i hvert projekt",
                "Din tilfredshed er vores prioritet - Vi tilbyder personlig rådgivning, så du får præcis det, du ønsker"
              ].map((text, idx) => (
                <div className="flex items-start" key={idx}>
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <strong>{text.split(" - ")[0]}</strong>
                    {text.includes(" - ") && <> - {text.split(" - ")[1]}</>}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <AboutButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}