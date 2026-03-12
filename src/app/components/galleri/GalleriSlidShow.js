'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function GalleriSlidShow({ galleryItems }) {
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
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex, galleryItems]);

  return (
    <div className="w-full overflow-hidden">
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
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                {selectedIndex + 1} / {galleryItems.length}
              </div>
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
    </div>
  );
}