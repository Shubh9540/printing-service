import React from 'react';
import { ThankYouData } from '@/types/templates.types';
import Link from 'next/link';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

export const ThankYouSection = ({ data }: { data?: ThankYouData }) => {
  if (!data) return null;

  return (
    <section className="w-full bg-white flex items-center justify-center py-20 lg:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">

        {/* Animated Checkmark with Confetti */}
        <div className="relative mb-8">
          {/* Confetti Lines (CSS built for simplicity) */}
          <div className="absolute top-[-10px] left-[-20px] w-6 h-1.5 bg-[#00a2ff] rounded-full rotate-[-45deg]"></div>
          <div className="absolute top-[-25px] left-[50%] -translate-x-1/2 w-1.5 h-6 bg-[#ff1b6b] rounded-full"></div>
          <div className="absolute top-[-10px] right-[-20px] w-6 h-1.5 bg-[#ffcc00] rounded-full rotate-[45deg]"></div>
          <div className="absolute bottom-[20%] left-[-30px] w-5 h-1.5 bg-[#ff1b6b] rounded-full rotate-[30deg]"></div>
          <div className="absolute bottom-[20%] right-[-30px] w-5 h-1.5 bg-[#00a2ff] rounded-full rotate-[-30deg]"></div>

          {/* Circles */}
          <div className="w-32 h-32 bg-[#eef8ff] rounded-full flex items-center justify-center">
            <div className="w-24 h-24 bg-[#00a2ff] rounded-full flex items-center justify-center shadow-lg animate-bounce-short">
              <FaCheck className="text-white text-4xl" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="text-[#051024]">{data.title1}</span>{' '}
          <span className="text-[#00a2ff]">{data.title2}</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#051024] mb-4">
          {data.subtitle}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {data.description}
        </p>

        {/* Button */}
        {data.button && (
          <Link href={data.button.url} className="inline-flex items-center gap-2 bg-[#00a2ff] hover:bg-[#008ce6] text-white font-semibold text-lg rounded-full py-3 px-8 transition-colors shadow-md hover:shadow-lg">
            {data.button.text}
            <FaArrowRight className="text-sm ml-1" />
          </Link>
        )}
      </div>
    </section>
  );
};
