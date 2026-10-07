import React from 'react';
import { PrintingServiceTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: PrintingServiceTemplateData = rawData;
  const sectionData = templateData?.categories?.PrintingService?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col overflow-x-hidden">
      {/* Header overlaps Hero via absolute positioning */}
      <div className="relative">
        <Header data={sectionData.Header?.variants?.PrintingServiceHeader1} />
        <HeroSection data={sectionData.Hero?.variants?.PrintingServiceHero1} />
      </div>
      <AboutUsSection data={sectionData.AboutUs?.variants?.PrintingServiceAboutUs1} />
      <MarqueeSection data={sectionData.Marquee?.variants?.PrintingServiceMarquee1} />
      <ServicesSection data={sectionData.Services?.variants?.PrintingServiceServices1} isSlider={true} />
      <ProcessSection data={sectionData.Process?.variants?.PrintingServiceProcess1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.PrintingServiceTestimonials1} />
      <FaqSection data={sectionData.Faq?.variants?.PrintingServiceFaq1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
