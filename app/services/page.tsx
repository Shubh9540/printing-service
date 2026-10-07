import React from 'react';
import { PrintingServiceTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServicesGridSection } from '@/components/sections/ServicesGridSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: PrintingServiceTemplateData = rawData;
  const sectionData = templateData?.categories?.PrintingService?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="relative">
        <Header data={sectionData.Header?.variants?.PrintingServiceHeader1} />
        <Breadcrumb data={commonData.servicesBreadcrumb} />
      </div>
      
      {/* Services Grid Section */}
      <ServicesGridSection data={sectionData.Services?.variants?.PrintingServiceServices1} />

      {/* FAQ Section (Home page FAQ) */}
      <FaqSection data={sectionData.Faq?.variants?.PrintingServiceFaq1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
