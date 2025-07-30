'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getGalleryPageItems } from '../../lib/api';

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % galleryItems.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(galleryItems[nextIndex].imageUrl);
  };

  const prevImage = () => {
    const prevIndex = selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(galleryItems[prevIndex].imageUrl);
  };

  // Preload adjacent images for faster navigation
  useEffect(() => {
    if (!selectedImage || galleryItems.length === 0) return;

    const preloadImage = (src) => {
      const img = new window.Image();
      img.src = src;
    };

    // Preload next and previous images
    const nextIndex = (selectedIndex + 1) % galleryItems.length;
    const prevIndex = selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1;
    
    if (galleryItems[nextIndex]?.imageUrl) {
      preloadImage(galleryItems[nextIndex].imageUrl);
    }
    if (galleryItems[prevIndex]?.imageUrl) {
      preloadImage(galleryItems[prevIndex].imageUrl);
    }
  }, [selectedIndex, selectedImage, galleryItems]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowRight') {
        const nextIndex = (selectedIndex + 1) % galleryItems.length;
        setSelectedIndex(nextIndex);
        setSelectedImage(galleryItems[nextIndex].imageUrl);
      }
      if (e.key === 'ArrowLeft') {
        const prevIndex = selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1;
        setSelectedIndex(prevIndex);
        setSelectedImage(galleryItems[prevIndex].imageUrl);
      }
      if (e.key === 'Escape') {
        setSelectedImage(null);
        setSelectedIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex, galleryItems]);


  useEffect(() => {
    async function fetchGalleryItems() {
      try {
        console.log('Fetching gallery items for gallery page...');
        const items = await getGalleryPageItems();
        console.log('Gallery page items received:', items.length);
        setGalleryItems(items);
      } catch (err) {
        setError('Failed to load gallery items');
        console.error('Gallery page error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchGalleryItems();
  }, []);

  if (loading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading gallery...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">{error}</div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen py-28 mt-28 bg-gray-900">
       {/* Main content with text left and images right */}
      <div className="max-w-9xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          {/* Images - Mobile first, then right side on desktop */}
          <div className="w-full overflow-hidden order-1 lg:order-2">
            <div className="overflow-x-auto">
              <div className="inline-flex space-x-6 pl-4 pr-[calc(100vw-100%)]">
                {galleryItems.length > 0 ? (
                  galleryItems.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="relative flex-shrink-0 h-[450px] w-auto rounded-xl overflow-hidden group transition-all duration-300 cursor-pointer"
                      onClick={() => openModal(item.imageUrl, index)}
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={350}
                        height={450}
                        quality={85}
                        className="w-auto h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Gul cirkel indikator */}
                      <div className="absolute top-4 right-4 z-30">
                        <div className="w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 z-30 text-white p-4" style={{background: 'linear-gradient(to top, rgba(15, 30, 69, 0.8), rgba(15, 30, 69, 0.6), transparent)'}}>
                        <h3 className="font-semibold text-2xl p-4 mt-40">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-darkblue text-center w-full">
                    <p className="text-xl">Ingen galleribilleder tilgængelige</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Text content - Mobile second, then left side on desktop */}
          <div className='p-6 md:p-20 order-2 lg:order-1'>
            <div className="">
              
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 font-serif leading-tight">
                Vores projekter fortæller historier
              </h3>
              <div className="w-24 h-1 bg-accent mb-8"></div>
            </div>
            
            <div className="space-y-6 ml-2 md:ml-0">
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
                  className="group inline-flex items-center gap-3 text-white font-semibold text-lg hover:text-accent transition-all duration-300"
                >
                  <span className="relative z-10">
                    Kontakt os for dit projekt
                  </span>
                  <span className="text-accent transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image with navigation */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Previous Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300 z-50 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ←
            </button>

            {/* Image */}
            <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt={galleryItems[selectedIndex]?.title || "Gallery image"}
                width={1200}
                height={800}
                quality={90}
                priority
                className="object-contain max-w-full max-h-screen transition-opacity duration-200"
              />
              
              {/* Image counter */}
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                {selectedIndex + 1} / {galleryItems.length}
              </div>
              
              {/* Image title */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                {galleryItems[selectedIndex]?.title}
              </div>
            </div>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300 z-50 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              →
            </button>

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 z-50 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}