'use client';
import React from 'react';
import { WhyChooseUsData } from '@/types/templates.types';
import { FaGem, FaCrosshairs, FaRegClock, FaWallet, FaPencilRuler, FaHeadset } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaGem': return <FaGem />;
    case 'FaCrosshairs': return <FaCrosshairs />;
    case 'FaRegClock': return <FaRegClock />;
    case 'FaWallet': return <FaWallet />;
    case 'FaPencilRuler': return <FaPencilRuler />;
    case 'FaHeadset': return <FaHeadset />;
    default: return <FaGem />;
  }
};

const colors = [
  { bg: 'bg-[#fdf2f8]', iconBg: 'bg-[#ec4899]' }, // Pink
  { bg: 'bg-[#eff6ff]', iconBg: 'bg-[#3b82f6]' }, // Blue
  { bg: 'bg-[#fff7ed]', iconBg: 'bg-[#f97316]' }, // Orange
  { bg: 'bg-[#f0fdf4]', iconBg: 'bg-[#22c55e]' }, // Green
  { bg: 'bg-[#faf5ff]', iconBg: 'bg-[#a855f7]' }, // Purple
  { bg: 'bg-[#fff1f2]', iconBg: 'bg-[#f43f5e]' }, // Rose
];

export const WhyChooseUsSection = ({ data }: { data?: WhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 lg:py-12 bg-white relative overflow-hidden">

      {/* Background Soft Blobs for the section */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col xl:flex-row items-stretch gap-8 xl:gap-12">

        {/* Left Side: Image Area (smaller now) */}
        <div className="w-full xl:w-[45%] relative flex flex-col">

          {/* Soft Shape Background behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-[30px] bg-gradient-to-tr from-blue-50 to-pink-50 z-0"></div>

          {/* Dotted Pattern (Top Left) */}
          <div className="absolute top-4 -left-8 z-20 opacity-30">
            <div className="grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#ec4899] rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="relative z-10 w-full h-full min-h-[400px] xl:min-h-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={data.imageMain || '/choose/choose.webp'}
              alt="Why Choose Us"
              className="w-full h-full object-cover absolute inset-0 rounded-xl"
            />
          </div>

        </div>

        {/* Right Side: Content Area (bigger now) */}
        <div className="w-full xl:w-[55%] flex flex-col justify-center relative z-10 py-4 xl:py-0">

          {/* Subtitle Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#ec4899]"></div>
            <span className="text-[#ec4899] font-bold text-sm tracking-[0.2em] uppercase">
              {data.subtitle}
            </span>
            <div className="w-8 h-[2px] bg-[#3b82f6]"></div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#051024] leading-[1.15] mb-4">
            {data.title1}{' '}
            <span className="text-[#ec4899]">Printing</span>{' '}
            <span className="text-[#3b82f6]">Partner</span>
          </h2>

          {/* Description */}
          <p className="text-[#6b7280] text-[15px] leading-relaxed mb-8 max-w-2xl">
            {data.description}
          </p>

          {/* Features Grid (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
            {data.features?.map((feat, index) => {
              const colorStyle = colors[index % colors.length];
              return (
                <div
                  key={feat.id}
                  className={`${colorStyle.bg} rounded-xl p-4 flex items-start gap-3 transition-transform duration-300 hover:-translate-y-1 shadow-sm`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-full ${colorStyle.iconBg} flex items-center justify-center text-white shrink-0 text-lg shadow-sm`}>
                    {renderIcon(feat.icon)}
                  </div>

                  {/* Text */}
                  <div className="flex-1 mt-0.5">
                    <h4 className="text-[#051024] font-bold text-[15px] mb-1 leading-tight">
                      {feat.title}
                    </h4>
                    <p className="text-[#6b7280] text-[12px] leading-relaxed pr-2">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
