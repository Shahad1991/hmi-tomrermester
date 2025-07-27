'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ContactButton from '../components/buttons/ContactButton';
import Link from 'next/link';

export default function YdelseLayout({ 
  heroImage, 
  heroTitle, 
  heroText, 
  imageTextImage, 
  imageTextTitle, 
  imageTextDescription,
  servicesSection = null, // New prop for services section
  galleryImages = [],
  children 
}) {
  // Modal state for billede visning
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before showing interactive elements
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openModal = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setSelectedIndex(index);
    // Lock scroll on background
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(0);
    // Unlock scroll
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % galleryImages.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex].url);
  };

  const prevImage = () => {
    const prevIndex = selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex].url);
  };

  // Preload adjacent images for faster navigation
  useEffect(() => {
    if (!selectedImage || galleryImages.length === 0) return;

    const preloadImage = (src) => {
      const img = new window.Image();
      img.src = src;
    };

    // Preload next and previous images
    const nextIndex = (selectedIndex + 1) % galleryImages.length;
    const prevIndex = selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1;
    
    if (galleryImages[nextIndex]?.url) {
      preloadImage(galleryImages[nextIndex].url);
    }
    if (galleryImages[prevIndex]?.url) {
      preloadImage(galleryImages[prevIndex].url);
    }
  }, [selectedIndex, selectedImage, galleryImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowRight') {
        const nextIndex = (selectedIndex + 1) % galleryImages.length;
        setSelectedIndex(nextIndex);
        setSelectedImage(galleryImages[nextIndex].url);
      }
      if (e.key === 'ArrowLeft') {
        const prevIndex = selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1;
        setSelectedIndex(prevIndex);
        setSelectedImage(galleryImages[prevIndex].url);
      }
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex, galleryImages]);

  // Cleanup scroll lock on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  return (
    <main> {/* Tilføj en main wrapper */}
      <div className="mx-auto pt-28">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[80vh] md:min-h-[800px] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            {heroImage && (
              <Image 
                src={heroImage} 
                alt={heroTitle || 'Hero billede'} 
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            )}
          </div>
          <div className="absolute inset-0 bg-darkblue bg-opacity-70 z-10"></div>
          <div className="relative z-20 max-w-4xl px-5 text-primary">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">{heroTitle}</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
              {heroText}
            </p>
            <ContactButton/>
          </div>
        </section>

        {/* image-text Section */}
        <section className="bg-gradient-to-br from-darkblue to-gray-800 text-white py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Left */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight">
                    {imageTextTitle}
                  </h2>
                  <div className="w-24 h-1 bg-accent mb-8"></div>
                </div>
                
                <div className="space-y-6">
                  <div 
                    className="text-white text-xl leading-relaxed opacity-90"
                    dangerouslySetInnerHTML={{ __html: imageTextDescription }}
                  />
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  
                    <button className="px-8 py-3 border-2 border-accent text-white rounded-lg hover:bg-accent hover:text-white transition-all duration-300 font-semibold">
                      Se vores arbejde
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  {imageTextImage && (
                    <Image 
                      src={imageTextImage}
                      alt={imageTextTitle || 'Image Text billede'}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  )}
                  
                  {/* Opacity overlay */}
                  <div className="absolute inset-0 bg-darkblue bg-opacity-40 z-10"></div>
                  
                  {/* Decorative overlay - now using group-hover and positioned to not interfere */}                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full opacity-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        {servicesSection && (
          <section className="relative px-6 py-16 md:py-24 bg-darkblue overflow-hidden items-center content-center">
            <div className="relative max-w-4xl mx-auto text-center mb-16 z-10">
              <span className="text-accent font-medium uppercase tracking-wider text-sm">Services vi tilbyder</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-2 mb-4">
                {servicesSection.title}
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
              <p className="text-white mt-6 max-w-2xl mx-auto">
                {servicesSection.description}
              </p>
            </div>
            
            <div className="relative max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
              {servicesSection.services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1 w-full sm:w-64 md:w-72"
                >
                  <div className="bg-white text-accent p-4 md:p-6 rounded-full shadow-inner hover:shadow-accent transition-all duration-300 border border-accent/20">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-darkblue mb-2 mt-4">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Child Content - positioned before gallery */}
        {children}

        {/* Galleri Section */}
        {galleryImages && galleryImages.length > 0 && (
          <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-darkblue mb-6 font-serif">Galleri</h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-accent to-orange-400 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Se et udvalg af vores tidligere opgaver og bliv inspireret af vores arbejde med kvalitet og præcision.
                </p>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages.map((img, index) => (
                  <div 
                    key={img.id || index} 
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden bg-gray-100">
                      <Image 
                        src={img.url}
                        alt={img.alt || `Galleri billede ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* View Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(img.url, index);
                          }}
                          className="bg-white/90 text-darkblue px-6 py-3 rounded-full font-semibold shadow-lg transform scale-90 group-hover:scale-100 active:scale-95 transition-transform duration-300 hover:bg-white"
                        >
                          Se billede
                        </button>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {img.title && (
                        <h3 className="text-xl font-bold text-darkblue mb-2 group-hover:text-accent transition-colors duration-300">
                          {img.title}
                        </h3>
                      )}
                      {img.description && <p className="text-sm text-gray-600">{img.description}</p>}
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16">
                <p className="text-lg text-gray-600 mb-6">Interesseret i at se mere af vores arbejde?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ContactButton />
                  <Link href="/galleri">
                  <button className="w-full px-8 py-3 border-2 border-accent text-darkblue rounded-lg hover:bg-accent hover:text-white transition-all duration-300 font-semibold">
                    Se alt galleri
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Modal for enlarged image with navigation */}
        {isMounted && selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
            onClick={closeModal}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Previous Arrow */}
              {galleryImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300 z-50 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200"
                >
                  ←
                </button>
              )}

              {/* Image */}
              <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={selectedImage}
                  alt={galleryImages[selectedIndex]?.title || galleryImages[selectedIndex]?.alt || "Gallery image"}
                  width={1200}
                  height={800}
                  quality={90}
                  priority
                  className="object-contain max-w-full max-h-screen transition-opacity duration-200"
                />
                
                {/* Image counter */}
                {galleryImages.length > 1 && (
                  <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                    {selectedIndex + 1} / {galleryImages.length}
                  </div>
                )}
                
                {/* Image title */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                  {galleryImages[selectedIndex]?.title || `Projekt ${selectedIndex + 1}`}
                </div>
              </div>

              {/* Next Arrow */}
              {galleryImages.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300 z-50 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200"
                >
                  →
                </button>
              )}

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 z-50 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200"
              >
                ✕
              </button>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
