'use client';
import React, { useState } from 'react';
import { GalleryData } from '@/types/templates.types';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

export const GallerySection = ({ data }: { data?: GalleryData }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!data) return null;

  const categories = data.categories || ['All'];
  const filteredImages = activeTab === 'All' 
    ? data.images 
    : data.images.filter(img => img.category === activeTab);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1));
    }
  };

  return (
    <section className="w-full py-12 lg:py-16 bg-[#fcfcfc] relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <div className="mb-10 text-center max-w-[800px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#051024] leading-tight mb-4 tracking-tight">
            {data.title1} <span className="text-[#ff5a00]">{data.title2}</span>
          </h2>
          {data.description && (
            <p className="text-[#6b7280] text-[16px] leading-relaxed mx-auto">
              {data.description}
            </p>
          )}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                activeTab === category
                  ? 'bg-[#890023] text-white shadow-md'
                  : 'bg-[#f0f4f8] text-[#051024] hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredImages.map((item, idx) => (
            <div 
              key={item.id} 
              className="relative aspect-[4/3] rounded-[16px] overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition-shadow"
              onClick={() => openLightbox(idx)}
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-[#ff5a00] p-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4 lg:p-10 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white hover:text-[#ff5a00] transition-colors z-50 p-2"
            onClick={closeLightbox}
          >
            <FaTimes size={30} />
          </button>

          {/* Nav Buttons */}
          <button 
            className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-50"
            onClick={showPrev}
          >
            <FaChevronLeft size={20} />
          </button>

          <button 
            className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-50"
            onClick={showNext}
          >
            <FaChevronRight size={20} />
          </button>

          {/* Main Image */}
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredImages[lightboxIndex].image} 
              alt={filteredImages[lightboxIndex].alt} 
              className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm animate-scale-up" 
            />
            {filteredImages[lightboxIndex].category && (
              <div className="mt-4 text-white text-lg font-medium">
                {filteredImages[lightboxIndex].category}
              </div>
            )}
            <div className="absolute bottom-[-30px] text-white/70 text-sm">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
