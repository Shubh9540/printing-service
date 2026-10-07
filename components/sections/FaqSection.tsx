'use client';
import React, { useState } from 'react';
import { FaqData } from '@/types/templates.types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const iconColors = [
  'bg-[#ff5a00]', // Orange
  'bg-[#407bff]', // Blue
  'bg-[#48c946]', // Green
  'bg-[#cc66ff]'  // Purple
];

export const FaqSection = ({ data }: { data?: FaqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  if (!data?.faqs?.length) return null;

  return (
    <section className="bg-white py-20 lg:py-12 relative overflow-hidden">
      {/* Background Decorative Dots */}
      <div className="absolute left-[-20px] top-[30%] text-[#e0e7ff] text-[28px] tracking-[0.5em] leading-[1.8] opacity-60 z-0 select-none">
        . . . . . <br />
        . . . . . <br />
        . . . . .
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Left Side Images */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] sm:min-h-[650px] flex items-center justify-center lg:pr-8">
          
          {/* Background Decorative Shapes */}
          <div className="absolute top-[10%] right-[10%] w-[60%] h-[50%] bg-[#f0f4fa] rounded-bl-[100px] rounded-tr-[40px] z-0"></div>
          <div className="absolute bottom-[5%] left-[5%] w-[50%] h-[40%] bg-[#fff5ee] rounded-tr-[80px] rounded-bl-[40px] z-0"></div>

          {/* Top Left Image */}
          {data.image1 && (
            <div className="absolute top-0 left-0 w-[65%] h-[75%] rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-[10px] border-white z-10">
              <img src={data.image1} alt="FAQ Background" className="w-full h-full object-cover" />
            </div>
          )}
          
          {/* Bottom Right Image */}
          {data.image2 && (
            <div className="absolute bottom-[5%] right-0 w-[70%] h-[55%] rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-[10px] border-white z-20">
              <img src={data.image2} alt="FAQ Foreground" className="w-full h-full object-cover" />
            </div>
          )}

          {/* Decorative Elements */}
          <div className="absolute bottom-[2%] left-[2%] text-[#ff5a00] text-2xl tracking-[0.5em] leading-[1.8] opacity-80 z-0 select-none">
            . . . . <br />
            . . . . <br />
            . . . .
          </div>
          <div className="absolute top-[15%] right-[5%] text-[#407bff] text-2xl tracking-[0.5em] leading-[1.8] opacity-50 z-20 select-none">
            . . . <br />
            . . . <br />
            . . .
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2">

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-[#ff5a00]" />
              <h4 className="text-[#051024] font-bold text-[14px] tracking-[0.2em] uppercase">
                {data.subtitle}
              </h4>
              <div className="w-8 h-[2px] bg-[#ff5a00]" />
            </div>

            <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#051024] leading-[1.2] mb-5">
              {data.title1} <span className="text-[#ff5a00]">{data.title2}</span>
            </h2>

            <p className="text-[#6b7280] text-[15px] md:text-[16px] leading-[1.7] max-w-[95%]">
              {data.description}
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-5">
            {data.faqs.slice(0, 4).map((faq, index) => {
              const isOpen = openIndex === index;
              const colorClass = iconColors[index % iconColors.length];

              return (
                <div
                  key={faq.id}
                  className={`flex flex-col overflow-hidden rounded-[20px] transition-all duration-300 ${isOpen ? 'bg-[#fff5ee] shadow-sm' : 'bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)]'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 text-left w-full focus:outline-none"
                  >
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className={`w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full flex items-center justify-center text-white font-bold text-[16px] sm:text-[18px] shrink-0 ${colorClass}`}>
                        ?
                      </div>
                      <span className={`text-[15px] sm:text-[17px] font-extrabold ${isOpen ? 'text-[#051024]' : 'text-[#051024]'}`}>
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-[36px] h-[36px] rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ml-4 ${isOpen ? 'bg-[#ff5a00] text-white shadow-md' : 'bg-transparent text-[#051024]'}`}>
                      {isOpen ? <FaChevronUp className="text-[12px]" /> : <FaChevronDown className="text-[12px]" />}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-8 pb-6 pt-0 pl-[68px] sm:pl-[80px] text-[14px] sm:text-[15px] leading-[1.7] text-[#6b7280]">
                        {faq.answer}
                      </div>
                    </div>
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
