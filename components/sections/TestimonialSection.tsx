'use client';
import React, { useState, useEffect } from 'react';
import { TestimonialsData } from '@/types/templates.types';
import { FaArrowRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import Link from 'next/link';

export const TestimonialSection = ({ data }: { data?: TestimonialsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  if (!data || !data.testimonials || data.testimonials.length === 0) return null;

  const total = data.testimonials.length;

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % total);
      setIsAnimating(false);
    }, 400); // Wait for fade out, then change content and fade in
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [total, isAnimating]);

  const activeTestimonial = data.testimonials[activeIndex];

  return (
    <section className="bg-[#022c5e] py-8 lg:py-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

        {/* Left Side Content */}
        <div className="w-full lg:w-5/12 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-[2px] bg-[#ff5a00]" />
            <h4 className="text-white font-bold text-[15px] tracking-wide">
              {data.subtitle}
            </h4>
          </div>
          <h2 className="text-4xl md:text-[50px] lg:text-[56px] font-extrabold text-white leading-[1.1] mb-6">
            {data.title1} <span className="text-[#ff5a00]">{data.title2}</span>
          </h2>
          <p className="text-[#a0abb8] text-[16px] md:text-[18px] leading-[1.7] mb-12 max-w-[500px]">
            {data.description}
          </p>

          {/* Button */}
          {data.button && (
            <Link href={data.button.url || '/contact'} className="inline-block rounded-full bg-gradient-to-r from-white via-[#a259ff] to-[#ff5a00] p-[2px] cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="flex items-center bg-white rounded-full p-2 pl-7 pr-2">
                <span className="text-[#051024] font-bold text-[16px] mr-6">{data.button.text}</span>
                <div className="w-10 h-10 bg-[#ff5a00] rounded-full flex items-center justify-center text-white text-[16px]">
                  <FaArrowRight />
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Right Side Slider */}
        <div className="w-full lg:w-7/12 relative flex justify-end">

          <div className="relative w-full max-w-[700px] mt-10 lg:mt-0">

            {/* Stacked Background Card (Decorative) */}
            <div className="absolute right-[-15px] bottom-[-20px] lg:right-[-25px] lg:bottom-[-25px] w-full h-[100%] bg-[#102040] rounded-[24px] z-0 shadow-lg"></div>

            {/* Active Card Container */}
            <div
              className={`relative bg-white rounded-[24px] p-6 sm:p-10 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-400 ease-in-out ${isAnimating ? 'opacity-0 translate-y-4 scale-[0.98]' : 'opacity-100 translate-y-0 scale-100'}`}
            >
              {/* Decorative Pink Blob */}
              <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-gradient-to-tl from-[#fff0f5] to-transparent rounded-tl-full rounded-br-[24px] opacity-100 z-0 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-8 lg:gap-10">

                {/* Avatar Section */}
                <div className="relative shrink-0 mx-auto sm:mx-0">
                  <div className="w-[180px] h-[220px] rounded-[16px] overflow-hidden bg-[#ffebd6]">
                    <img src={activeTestimonial.avatar} alt={activeTestimonial.name} className="w-full h-full object-cover" />
                  </div>
                  {/* Quote Badge */}
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-full shadow-[0_10px_20px_rgba(255,71,126,0.2)] flex items-center justify-center">
                    <FaQuoteLeft className="text-[#ff477e] text-2xl" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-[22px] font-bold text-[#051024]">{activeTestimonial.name}</h3>
                      <p className="text-[#6b7280] text-[15px] mt-1">{activeTestimonial.location}</p>
                    </div>
                    <div className="flex gap-1 mt-1 sm:mt-0">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`text-[17px] ${i < activeTestimonial.rating ? 'text-[#ffb800]' : 'text-gray-200'}`} />
                      ))}
                    </div>
                  </div>

                  <p className="text-[#4a4a4a] text-[15.5px] leading-[1.8] mb-8 font-medium">
                    “{activeTestimonial.quote}”
                  </p>

                  {data.tag && (
                    <div className="mt-auto">
                      <span className="inline-block px-4 py-2 bg-[#fff0f5] text-[#ff477e] text-[12px] font-bold rounded-full tracking-widest uppercase">
                        {data.tag}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Dots Pagination */}
            <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-3 z-20">
              {data.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (isAnimating || idx === activeIndex) return;
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 400);
                  }}
                  className={`relative flex items-center justify-center transition-all duration-300 ${activeIndex === idx ? 'w-6 h-6' : 'w-2 h-2 mt-2'}`}
                >
                  {activeIndex === idx ? (
                    <>
                      <div className="absolute inset-0 rounded-full border border-[#ff5a00]"></div>
                      <div className="w-2 h-2 bg-[#ff5a00] rounded-full"></div>
                    </>
                  ) : (
                    <div className="w-2 h-2 bg-[#4a5568] hover:bg-[#8a99af] rounded-full transition-colors"></div>
                  )}
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
