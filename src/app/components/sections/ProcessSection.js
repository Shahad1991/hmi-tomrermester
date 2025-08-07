import Image from "next/image";

export function ProcessSection() {
  const steps = [
    {
      id: "01",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Første møde og vurdering",
      description:
        "Vi mødes hos dig for at forstå dine behov og vurdere projektet. Her vil vi gennemgå dine ønsker, budget og tidsramme, så vi kan udarbejde den perfekte løsning til dig.",
    },
    {
      id: "02",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Tilbud og planlægning",
      description:
        "Efter vurderingen modtager du et detaljeret tilbud med præcis beskrivelse af arbejdet. Når tilbuddet er godkendt, planlægger vi projektet i fællesskab og sikrer minimal forstyrrelse af din hverdag.",
    },
    {
      id: "03",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Udførelse og aflevering",
      description:
        "Vores fagkyndige team udfører arbejdet med højeste kvalitet og respekt for dit hjem. Ved afslutning gennemgår vi projektet sammen, så du er helt tilfreds før vi rydder op og siger farvel.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-accent font-semibold mb-2 uppercase">SÅDAN GÅR PROCESSEN</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-darkblue mb-4">
            Vi guider dig sikkert gennem hele processen
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Numbered circles with connecting line - desktop only */}
        <div className="relative justify-center mb-16 hidden md:flex">
          <div className="absolute top-1/2 h-1 bg-gray-300 w-2/3 -translate-y-1/2 z-0"></div>
          <div className="flex justify-between w-2/3 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="w-16 h-16 rounded-full bg-accent text-darkblue flex items-center justify-center font-bold text-2xl shadow-lg"
              >
                {step.id}
              </div>
            ))}
          </div>
        </div>

        {/* Process steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              {/* Number circle - mobile only, outside the card */}
              <div className="flex md:hidden mb-4">
                <div className="w-16 h-16 rounded-full bg-accent text-darkblue flex items-center justify-center font-bold text-2xl shadow-lg mr-4 flex-shrink-0">
                  {step.id}
                </div>
              </div>
              
              {/* Card container */}
              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white min-h-80 md:min-h-0">
                {/* Icon container */}
                <div className="p-6 md:p-8 flex justify-center bg-gray-50">
                  <div className="text-accent p-6 md:p-6 rounded-full bg-white shadow-md group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <div className="p-6 md:p-6 text-center">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-darkblue mb-4 md:mb-4">
                    {step.title}
                  </h3>
                </div>
                
                {/* Hidden description that appears on hover */}
                <div className="absolute inset-0 bg-accent bg-opacity-90 p-4 md:p-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}