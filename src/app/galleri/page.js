'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getAllGalleryItems } from '../../lib/api';

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
    <section className="relative min-h-screen py-12 mt-28 bg-gradient-to-b from-darkblue to-gray-900">
      

      {/* Main content with text left and images right */}
      <div className="max-w-9xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-start">
          {/* Text content - Left side */}
          <div className='space-x-8 p-20'>
            <div className="space-x-8">
              
              <h3 className="text-white px-8 text-3xl md:text-4xl font-bold mb-6 font-serif leading-tight">
                Vores projekter fortæller historier
              </h3>
              <div className="w-24 h-1 bg-accent mb-8"></div>
            </div>
            
            <div className="space-y-6">
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
                  className="group inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg shadow-lg border-2 border-accent hover:bg-accent hover:text-darkblue transition-all duration-300 text-lg transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Kontakt os for dit projekt
                  </span>
                  <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
              </div>
            </div>
          </div>

          {/* Images - Right side */}
          <div className="w-full overflow-hidden">
            <div className="overflow-x-auto">
              <div className="inline-flex space-x-6 pl-4 pr-[calc(100vw-100%)]">
                {galleryItems.length > 0 ? (
                  galleryItems.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="relative flex-shrink-0 h-[450px] w-auto rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-white/20 cursor-pointer"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                      <div className="absolute bottom-4 left-4 z-20 text-white">
                        <h3 className="font-bold text-2xl bg-darkblue/90 px-4 py-2 rounded-lg">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-white text-center w-full">
                    <p className="text-xl">Ingen galleribilleder tilgængelige</p>
                  </div>
                )}
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