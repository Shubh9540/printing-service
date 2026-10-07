import React from 'react';
import { MarqueeData } from '@/types/templates.types';
import { FaArrowUp } from 'react-icons/fa';

export const MarqueeSection = ({ data }: { data?: MarqueeData }) => {
  if (!data) return null;

  const repeatedText = [...Array(10)].fill(null);

  return (
    <section className="relative w-full h-[150px] lg:h-[200px] bg-white overflow-hidden flex items-center justify-center my-10 lg:my-16">
      
      {/* Background Yellow Strip (Angled Down) */}
      <div className="absolute w-[120%] h-[55px] lg:h-[70px] bg-[#ffd500] shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center transform rotate-[8deg] lg:rotate-[6deg] -left-[10%]">
        <div className="flex w-max animate-marquee">
          {repeatedText.map((_, i) => (
            <div key={`y1-${i}`} className="flex items-center mx-3 lg:mx-6 space-x-2 lg:space-x-4">
              <span className="text-black text-lg lg:text-2xl font-medium tracking-widest whitespace-nowrap">{data.text1}</span>
              <span className="text-black text-xl lg:text-3xl font-black rotate-45">
                <FaArrowUp />
              </span>
            </div>
          ))}
          {repeatedText.map((_, i) => (
            <div key={`y2-${i}`} className="flex items-center mx-3 lg:mx-6 space-x-2 lg:space-x-4">
              <span className="text-black text-lg lg:text-2xl font-medium tracking-widest whitespace-nowrap">{data.text1}</span>
              <span className="text-black text-xl lg:text-3xl font-black rotate-45">
                <FaArrowUp />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Foreground Blue Strip (Angled Up) */}
      <div className="absolute w-[120%] h-[55px] lg:h-[70px] bg-[#0095ff] shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center transform -rotate-[8deg] lg:-rotate-[6deg] -left-[10%] z-10">
        <div className="flex w-max animate-marquee-reverse">
          {repeatedText.map((_, i) => (
            <div key={`b1-${i}`} className="flex items-center mx-3 lg:mx-6 space-x-2 lg:space-x-4">
              <span className="text-black text-lg lg:text-2xl font-medium tracking-widest whitespace-nowrap">{data.text2}</span>
              <span className="text-[#a855f7] text-xl lg:text-3xl font-black rotate-45">
                <FaArrowUp />
              </span>
            </div>
          ))}
          {repeatedText.map((_, i) => (
            <div key={`b2-${i}`} className="flex items-center mx-3 lg:mx-6 space-x-2 lg:space-x-4">
              <span className="text-black text-lg lg:text-2xl font-medium tracking-widest whitespace-nowrap">{data.text2}</span>
              <span className="text-[#a855f7] text-xl lg:text-3xl font-black rotate-45">
                <FaArrowUp />
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
