import Image from "next/image";

export function ProcessSection() {
  const steps = [
    {
      id: 1,
      imageSrc: "/process1.png",
      altText: "Første møde og vurdering",
      title: "Første møde og vurdering",
      description:
        "Vi mødes hos dig for at forstå dine behov og vurdere projektet. Her vil vi gennemgå dine ønsker, budget og tidsramme, så vi kan udarbejde den perfekte løsning til dig.",
    },
    {
      id: 2,
      imageSrc: "/process-2.jpg",
      altText: "Tilbud og planlægning",
      title: "Tilbud og planlægning",
      description:
        "Efter vurderingen modtager du et detaljeret tilbud med præcis beskrivelse af arbejdet. Når tilbuddet er godkendt, planlægger vi projektet i fællesskab og sikrer minimal forstyrrelse af din hverdag.",
    },
    {
      id: 3,
      imageSrc: "/process3.jpg",
      altText: "Udførelse og aflevering",
      title: "Udførelse og aflevering",
      description:
        "Vores fagkyndige team udfører arbejdet med højeste kvalitet og respekt for dit hjem. Ved afslutning gennemgår vi projektet sammen, så du er helt tilfreds før vi rydder op og siger farvel.",
    },
  ];

  const bgVariants = ["bg-white", "bg-gray-50"];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-accent font-semibold mb-2 uppercase">SÅDAN GÅR PROCESSEN</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-darkblue mb-4">
            Vi guider dig sikkert gennem hele forløbet
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-accent ml-6 space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative pl-14 ${bgVariants[index % 2]} rounded-lg shadow-md`}
            >
              {/* Badge */}
              <div className="absolute -left-8 top-10 w-16 h-16 rounded-full bg-accent text-darkblue flex items-center justify-center font-bold text-2xl shadow-lg z-10">
                {step.id}
              </div>

              {/* Content Row */}
              <div className="flex flex-col lg:flex-row">
                {/* Text */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-darkblue mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
                </div>

                {/* Image */}
                <div className="lg:w-1/2 h-80 relative">
                  <Image
                    src={step.imageSrc}
                    alt={step.altText}
                    fill
                    className="object-cover rounded-b-lg lg:rounded-b-none lg:rounded-r-lg"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-darkblue bg-opacity-20 z-10 rounded-b-lg lg:rounded-r-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
