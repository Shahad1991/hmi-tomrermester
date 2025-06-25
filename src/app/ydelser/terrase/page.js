import Image from 'next/image';

export default function SnedkeriPage() {
  return (
    <>
      {/* Info Section */}
      <section className="max-w-6xl mx-auto my-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-80 md:h-[500px]">
          <Image
            src="/snedker-info.jpg"
            alt="Snedkeri billede"
            fill
            className="object-cover rounded-xl shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-darkblue mb-4">
            Skræddersyet Snedkerarbejde
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Vi tilbyder unikt snedkerarbejde skræddersyet til dine behov – fra specialmøbler til køkken og indretning.
          </p>
        </div>
      </section>

      {/* Galleri */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-darkblue font-serif text-center mb-10">Galleri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['/snedker1.jpg', '/snedker2.jpg', '/snedker3.jpg'].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-md">
              <Image
                src={img}
                alt={`Galleri ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-80 object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
