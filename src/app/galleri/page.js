"use client"; // Vigtigt for client-side hooks

// Tilføj denne import
import { useState, useEffect } from 'react';
import { getAllGalleryItems } from '@/lib/api';

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGalleryItems() {
      try {
        const items = await getAllGalleryItems();
        setGalleryItems(items);
      } catch (err) {
        setError('Failed to load gallery items');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchGalleryItems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Baggrundsbillede */}
      <div className="absolute inset-0 z-0">
        <img
          src="/galleri-bg.png"
          alt="Galleri baggrund"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-blue-900/70 z-10" />
      </div>

      {/* Galleriindhold */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto px-6 py-24 gap-12">
        {/* Venstre side: tekst */}
        <div className="text-white space-y-6">
           <h2 className="text-3xl md:text-4xl font-bold text-darkblue mb-6 font-serif">Vores seneste projekter</h2>
            <div className="w-24 h-1 bg-accent"></div>
          <p className="text-lg text-darkblue ">
            Se et udvalg af vores tidligere opgaver, og bliv inspireret af vores arbejde.
          </p>
        </div>

        {/* Højre side: scrollbart galleri */}
        <div className="overflow-x-auto whitespace-nowrap flex gap-6 pb-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative min-w-[250px] h-[300px] rounded-lg overflow-hidden group">
              <img
                src={item.imageUrl}
                alt={item.altText || item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder-image.jpg';
                }}
              />
               <div className="absolute inset-0 bg-darkblue bg-opacity-30 z-10"></div>
              <div className="absolute bottom-4 left-4 z-20 text-white font-semibold text-lg">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}