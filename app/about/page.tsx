import React from 'react';
import { PrintingServiceTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: PrintingServiceTemplateData = rawData;
  const sectionData = templateData?.categories?.PrintingService?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="relative">
        <Header data={sectionData.Header?.variants?.PrintingServiceHeader1} />
        <Breadcrumb data={commonData.aboutBreadcrumb} />
      </div>
      
      {/* About Us Section */}
      <AboutUsSection data={sectionData.AboutUs?.variants?.PrintingServiceAboutUs1} hideButton={true} />{/* Process Section */}
      <ProcessSection data={sectionData.Process?.variants?.PrintingServiceProcess1} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.PrintingServiceWhyChooseUs1} /><Footer data={commonData.Footer} />
    </main>
  );
}
