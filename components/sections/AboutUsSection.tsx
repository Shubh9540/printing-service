'use client';
import React from 'react';
import { AboutUsData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowRight, FaGem, FaCog, FaUsers, FaLayerGroup, FaAward, FaTruck } from 'react-icons/fa';
import { AnimatedStats } from '@/components/ui/AnimatedStats';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaGem': return <FaGem />;
    case 'FaCog': return <FaCog />;
    case 'FaUsers': return <FaUsers />;
    case 'FaLayerGroup': return <FaLayerGroup />;
    case 'FaAward': return <FaAward />;
    case 'FaTruck': return <FaTruck />;
    default: return <FaGem />;
  }
};

export const AboutUsSection = ({ data, hideButton = false }: { data?: AboutUsData, hideButton?: boolean }) => {
  if (!data) return null;

  return (
    <section className="w-full py-8 lg:py-16 bg-[#fcfcfc] relative">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-8 items-center">

        {/* Left Side: Images */}
        <div className="w-full lg:w-[45%] relative mt-12 lg:mt-0">

          {/* Main Image Container */}
          <div className="relative w-[90%] ml-auto rounded-[32px] border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-10 aspect-[3.5/4] overflow-hidden bg-[#f0f4f8]">
            <img src={data.imageMain} alt="About Us" className="w-full h-full object-cover" />
          </div>

          {/* Floating Image 1 (Top Left) */}
          {data.imageSmall1 && (
            <div className="absolute top-[-5%] left-[10%] w-[32%] rounded-[24px] border-[8px] border-white shadow-xl z-20 bg-[#cde2ff] overflow-hidden">
              <img src={data.imageSmall1} alt="T-Shirt" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
          )}

          {/* Floating Image 2 (Mid Left) */}
          {data.imageSmall2 && (
            <div className="absolute top-[35%] left-[-5%] w-[30%] rounded-[24px] border-[8px] border-white shadow-xl z-30 bg-[#ffe082] overflow-hidden">
              <img src={data.imageSmall2} alt="Mug" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
          )}

          {/* Floating Image 3 (Bottom Left) */}
          {data.imageSmall3 && (
            <div className="absolute bottom-[-10%] left-[5%] w-[35%] rounded-[24px] border-[8px] border-white shadow-xl z-20 bg-[#cde2ff] overflow-hidden">
              <img src={data.imageSmall3} alt="Cards" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
          )}

          {/* Decorative Arrow */}
          <div className="absolute bottom-[12%] left-[2%] z-0 hidden lg:block text-[#ff6b00]">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M90 10 C 60 10, 20 40, 20 90" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M40 90 L20 90 L20 70" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[55%] flex flex-col mt-10 lg:mt-0 lg:pl-10 relative z-10">

          {/* Subtitle */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[#ff6b00]"></span>
            <span className="text-gray-500 font-bold text-sm tracking-widest uppercase">
              {data.subtitle}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.2] mb-6 text-[#051024]">
            {data.title1} <br />
            <span className="text-[#ff6b00]">{data.title2}</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed text-[15px] lg:text-base mb-10 max-w-[95%]">
            {data.description}
          </p>

          {/* Features */}
          {data.features && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10">
              {data.features.map((feat, index) => {
                const bgColors = ['bg-[#e6f2ff] text-[#3b82f6]', 'bg-[#ffe6f0] text-[#ec4899]', 'bg-[#fff7cc] text-[#eab308]'];
                const colorClass = bgColors[index % bgColors.length];
                return (
                  <div key={feat.id} className="flex items-center gap-3 border-r last:border-r-0 border-gray-200 pr-6 w-full sm:w-1/3">
                    <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-xl ${colorClass}`}>
                      {renderIcon(feat.icon)}
                    </div>
                    <h3 className="text-[13px] font-bold text-[#051024] leading-snug">
                      {feat.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          )}

          {/* Button */}
          {!hideButton && data.button && (
            <div>
              <Link
                href={data.button.url}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff6b00] to-[#ff4500] text-white font-bold px-8 py-3.5 rounded-full transition-transform hover:scale-105 shadow-[0_8px_20px_rgba(255,107,0,0.3)]"
              >
                {data.button.text.replace('->', '').trim()}
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          )}

          {/* Bottom Stats */}
          {data.stats && <AnimatedStats stats={data.stats as any} />}

        </div>
      </div>
    </section>
  );
};
