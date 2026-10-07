import React from 'react';
import { ServicesData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const ServicesSection = ({ data, isSlider = false }: { data?: ServicesData, hideButton?: boolean, isSlider?: boolean }) => {
  if (!data) return null;

  const bgColors = [
    'bg-[#eef5fd]', // Light Blue
    'bg-[#ffede8]', // Light Pink/Orange
    'bg-[#e9f6eb]', // Light Green
    'bg-[#fff8e5]', // Light Yellow
    'bg-[#f2f0fd]', // Light Purple
    'bg-[#fce6e6]', // Light Red/Pink
  ];

  return (
    <section className="w-full py-8 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#ff5a00]" />
            <h4 className="text-[#051024] font-semibold text-sm tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="w-12 h-[2px] bg-[#ff5a00]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#051024]">
            {data.title1} <span className="text-[#ff5a00]">{data.title2}</span>
          </h2>
          {data.description && (
            <p className="text-[#6b7280] mt-4 max-w-2xl text-[16px]">
              {data.description}
            </p>
          )}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {data.services.slice(0, 6).map((service, index) => (
            <div
              key={service.id}
              className={`${bgColors[index % bgColors.length]} rounded-[20px] relative flex flex-col h-[380px] overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all`}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-white text-[#051024] font-bold text-lg rounded-[10px] w-12 h-10 flex items-center justify-center z-10 shadow-sm">
                {service.icon}
              </div>

              {/* Image */}
              <div className="flex-grow flex items-center justify-center p-8 pb-24">
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                />
              </div>

              {/* Bottom Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#051024] rounded-[15px] p-4 flex items-center justify-between">
                <h3 className="text-white font-semibold text-[17px] leading-tight pr-4">
                  {service.title}
                </h3>
                <Link
                  href={service.url}
                  className="w-8 h-8 rounded-full bg-[#ff5a00] flex-shrink-0 flex items-center justify-center text-white hover:bg-white hover:text-[#ff5a00] transition-colors"
                >
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>
          ))}

          {/* Featured Block */}
          {data.featuredBlock && (
            <div className="col-span-1 md:col-span-2 xl:col-span-2 bg-white rounded-[20px] p-8 lg:p-10 relative border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden min-h-[380px] flex flex-col justify-center">

              {/* Featured Image floating in background */}
              <div className="absolute bottom-0 right-0 w-[35%] h-[60%] z-0 pointer-events-none hidden sm:block">
                <img
                  src={data.featuredBlock.image}
                  alt="Featured"
                  className="w-full h-full object-contain object-right-bottom drop-shadow-xl"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full sm:w-[80%] lg:w-[80%]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-[#ff5a00]" />
                  <span className="text-[#6b7280] text-[15px] font-medium">{data.featuredBlock.subtitle}</span>
                </div>
                <h3 className="text-3xl lg:text-[36px] font-extrabold text-[#051024] leading-[1.2] mb-4">
                  {data.featuredBlock.title1} <span className="text-[#ff5a00]">{data.featuredBlock.title2}</span>
                </h3>
                <p className="text-[#6b7280] text-[15px] mb-8 leading-relaxed">
                  {data.featuredBlock.description}
                </p>
                <Link
                  href={data.button.url}
                  className="inline-flex items-center justify-center gap-2 bg-[#ff5a00] text-white px-7 py-3.5 rounded-[8px] font-semibold hover:bg-[#051024] transition-colors"
                >
                  {data.button.text}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
