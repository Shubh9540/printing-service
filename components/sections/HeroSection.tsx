'use client';
import React, { useState } from 'react';
import { HeroData } from '@/types/templates.types';
import { FaArrowRight, FaPrint, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

export const HeroSection = ({ data }: { data?: HeroData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!data) return null;

  const slides = data.slides || [
    {
      id: 'default-1',
      subtitle: data.subtitle || '',
      title1: data.title1 || '',
      title2: data.title2 || '',
      description: data.description || '',
      image: data.image1 || '',
      primaryButton: data.button || { text: '', url: '' },
    },
    ...(data.image2 ? [{
      id: 'default-2',
      subtitle: data.subtitle || '',
      title1: data.title1 || '',
      title2: data.title2 || '',
      description: data.description || '',
      image: data.image2,
      primaryButton: data.button || { text: '', url: '' },
    }] : []),
    ...(data.image3 ? [{
      id: 'default-3',
      subtitle: data.subtitle || '',
      title1: data.title1 || '',
      title2: data.title2 || '',
      description: data.description || '',
      image: data.image3,
      primaryButton: data.button || { text: '', url: '' },
    }] : []),
  ];

  if (slides.length === 0) return null;

  const activeSlide = slides[currentSlide];

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative w-full flex items-center bg-[#051024] overflow-hidden" style={{ minHeight: '450px' }}>
      {/* Background Image Wrapper */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url(${activeSlide.image})` }}
      ></div>

      {/* Left Large Gradient Circle Overlay */}
      <div 
        className="absolute -left-[30%] md:-left-[10%] top-1/2 -translate-y-1/2 w-[160%] md:w-[120%] lg:w-[55%] h-[150%] rounded-[50%] z-10 opacity-95 lg:opacity-100"
        style={{ 
          background: 'linear-gradient(135deg, #ff1b6b 0%, #45caff 100%)',
          boxShadow: '20px 0 50px rgba(0,0,0,0.1)'
        }}
      ></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20 flex justify-between items-center w-full">
        
        {/* Left Nav Arrow */}
        <button onClick={prevSlide} className="hidden lg:flex w-12 h-12 bg-white rounded-full items-center justify-center text-gray-800 shadow-lg hover:bg-gray-100 absolute left-4 z-30">
          <FaChevronLeft />
        </button>

        {/* Content */}
        <div key={activeSlide.id} className="w-full lg:w-1/2 max-w-xl text-white py-20 lg:py-0 lg:ml-8 flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-in-up">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ff1b6b] rounded-full p-1 pr-4 mb-6">
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#ff1b6b]">
              <FaPrint className="text-xs" />
            </span>
            <span className="text-xs font-semibold tracking-wide">{activeSlide.subtitle}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[50px] font-bold leading-[1.1] mb-4">
            {activeSlide.title1} <br/> {activeSlide.title2}
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base mb-8 max-w-md leading-relaxed font-medium">
            {activeSlide.description}
          </p>

          {/* Button */}
          {activeSlide.primaryButton && (
            <Link href={activeSlide.primaryButton.url} className="inline-flex items-center gap-3 bg-white text-[#051024] font-bold text-base rounded-full py-1.5 pl-6 pr-1.5 hover:bg-gray-100 transition-colors">
              {activeSlide.primaryButton.text}
              <span className="w-8 h-8 rounded-full bg-[#ff1b6b] flex items-center justify-center text-white">
                <FaArrowRight className="text-xs -rotate-45" />
              </span>
            </Link>
          )}
        </div>

        {/* Right Nav Arrow */}
        <button onClick={nextSlide} className="hidden lg:flex w-12 h-12 bg-white rounded-full items-center justify-center text-gray-800 shadow-lg hover:bg-gray-100 absolute right-4 z-30">
          <FaChevronRight />
        </button>

      </div>

      {/* Slider Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-[#ff1b6b]' : 'bg-white/50 hover:bg-white'} transition-colors`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
