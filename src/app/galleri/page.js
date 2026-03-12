import Head from 'next/head';
import { getGalleryPageItems } from '../../lib/api';
import GalleriSlidShow from '../components/galleri/GalleriSlidShow';

export const dynamic = 'force-dynamic';

export default async function GalleryPage() {
  const galleryItems = await getGalleryPageItems();

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://hmi-tomrermester.dk/galleri`} />
      </Head>
    <section className="relative min-h-screen py-28 mt-28 bg-gray-900">
      <div className="max-w-9xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          {/* Images - Mobile first, then right side on desktop */}
          <div className="w-full overflow-hidden order-1 lg:order-2">
            <GalleriSlidShow galleryItems={galleryItems} />
          </div>
          {/* Text content - Mobile second, then left side on desktop */}
          <div className='p-6 md:p-20 order-2 lg:order-1'>
            <div className="">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 font-serif leading-tight">
                Vores projekter fortæller historier
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-orange-400  mb-8"></div>
            </div>
            <div className="space-y-6 md:ml-0">
              <p className="text-white text-xl leading-relaxed opacity-90">
                Hvert projekt er unikt og fortæller sin egen historie. Fra køkkenrenoveringer til komplette byggerenovering, har vi stolt dokumenteret vores arbejde gennem årene.
              </p>
              <p className="text-white text-lg leading-relaxed opacity-80">
                Browse gennem vores galleri og se hvordan vi transformerer rum med kvalitet, præcision og opmærksomhed på detaljer. Hvert billede repræsenterer vores engagement i at levere exceptionelle resultater.
              </p>
              <p className="text-white text-lg leading-relaxed opacity-80">
                Har du et projekt i tankerne? Vi vil gerne hjælpe dig med at bringe dine visioner til live.
              </p>
              <div className="pt-6">
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-white font-semibold rounded-lg hover:bg-accent hover:text-darkblue transition-all duration-300"
                >
                  Kontakt os for dit projekt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}