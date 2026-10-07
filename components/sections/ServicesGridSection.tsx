import React from 'react';
import { ServicesData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const bgColors = [
  'bg-[#e8f4ff]', 'bg-[#fff5eb]', 'bg-[#eefcf2]', 'bg-[#fffbeb]',
  'bg-[#f5eeff]', 'bg-[#fff0f0]', 'bg-[#e8f4ff]', 'bg-[#eefcf2]',
  'bg-[#fff5eb]', 'bg-[#eefcf2]', 'bg-[#fff0f0]', 'bg-[#e8f4ff]'
];

export const ServicesGridSection = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 lg:py-12 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#ff8a00]"></div>
          <span className="text-[#6b7280] font-bold text-sm tracking-[0.15em] uppercase">
            {data.subtitle || 'OUR SERVICES'}
          </span>
          <div className="w-10 h-[2px] bg-[#ff8a00]"></div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#051024] mb-4">
          {data.title1} <span className="text-[#ff8a00]">{data.title2}</span>
        </h2>

        {/* Description */}
        <p className="text-[#6b7280] text-lg max-w-2xl mx-auto mb-12">
          {data.description}
        </p>

        {/* Services Grid (4 Columns as per screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {data.services?.map((service, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            const bgClass = bgColors[index % bgColors.length];

            return (
              <div
                key={service.id}
                className={`relative group ${bgClass} rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-4 bg-white text-[#051024] font-bold text-[17px] rounded-lg w-10 h-10 flex items-center justify-center shadow-md z-10">
                  {num}
                </div>

                {/* Image Area */}
                <div className="w-full h-[220px] relative overflow-hidden flex items-center justify-center p-6 pt-10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out mix-blend-multiply"
                  />
                </div>

                {/* Bottom Bar */}
                <div className="mt-auto bg-[#051024] p-4 flex items-center justify-between transition-colors duration-300 group-hover:bg-[#ff8a00]">
                  <h4 className="text-white font-bold text-[15px] xl:text-[17px] text-left line-clamp-1 pr-2">
                    {service.title}
                  </h4>
                  <Link
                    href={service.url || `/services/${service.id}`}
                    className="w-[34px] h-[34px] rounded-full bg-[#ff8a00] group-hover:bg-white text-white group-hover:text-[#ff8a00] flex items-center justify-center shrink-0 transition-colors shadow-md"
                  >
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
