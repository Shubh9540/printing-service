'use client';
import React, { useState } from 'react';
import { FaqData } from '@/types/templates.types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const FaqPageSection = ({ data }: { data?: FaqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!data?.faqs?.length) return null;

  // Split FAQs into two columns
  const leftColumnFaqs = data.faqs.filter((_, i) => i % 2 === 0);
  const rightColumnFaqs = data.faqs.filter((_, i) => i % 2 !== 0);

  const renderFaq = (faq: any, index: number, isLeftColumn: boolean) => {
    // Calculate global index to maintain single open state
    const globalIndex = isLeftColumn ? index * 2 : (index * 2) + 1;
    const isOpen = openIndex === globalIndex;

    return (
      <div
        key={faq.id}
        className={`flex flex-col overflow-hidden rounded-[16px] transition-all duration-300 border ${isOpen ? 'bg-[#fff0f5] border-pink-100' : 'bg-white border-transparent shadow-[0_4px_25px_rgba(0,0,0,0.03)]'
          }`}
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
          className="flex items-center justify-between px-6 py-5 text-left w-full focus:outline-none"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[16px] shrink-0 transition-colors ${isOpen ? 'bg-[#800020] text-white' : 'bg-[#f3f4f6] text-[#4b5563]'
                }`}
            >
              ?
            </div>
            <span
              className={`text-[15px] sm:text-[16px] font-bold ${isOpen ? 'text-[#800020]' : 'text-[#051024]'
                }`}
            >
              {faq.question}
            </span>
          </div>

          <div
            className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-colors ml-4 ${isOpen ? 'bg-[#800020] text-white' : 'bg-white shadow-sm border border-gray-100 text-[#051024]'
              }`}
          >
            {isOpen ? <FaChevronUp className="text-[10px]" /> : <FaChevronDown className="text-[10px]" />}
          </div>
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 pt-0 pl-[72px] text-[14px] leading-relaxed text-[#4b5563]">
              {faq.answer}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-16 lg:py-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[2px] bg-[#ff5a00]" />
            <h4 className="text-[#051024] font-bold text-[13px] tracking-[0.2em] uppercase">
              {data.subtitle}
            </h4>
            <div className="w-10 h-[2px] bg-[#ff5a00]" />
          </div>

          <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#051024] leading-[1.2] mb-6">
            {data.title1} <br className="hidden md:block" />
            and <span className="text-[#ff5a00]">{data.title2}</span>
          </h2>

          <p className="text-[#6b7280] text-[15px] md:text-[16px] leading-[1.7] max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* 2-Column FAQ Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">

          {/* Left Column */}
          <div className="flex w-full lg:w-1/2 flex-col gap-5">
            {leftColumnFaqs.map((faq, index) => renderFaq(faq, index, true))}
          </div>

          {/* Right Column */}
          <div className="flex w-full lg:w-1/2 flex-col gap-5">
            {rightColumnFaqs.map((faq, index) => renderFaq(faq, index, false))}
          </div>

        </div>

      </div>
    </section>
  );
};
