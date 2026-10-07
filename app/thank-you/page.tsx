import React from 'react';
import { PrintingServiceTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import rawData from '@/data/templates.json';
import { ThankYouSection } from '@/components/sections/ThankYouSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ThankYouPage() {
  const templateData: PrintingServiceTemplateData = rawData;
  const sectionData = templateData?.categories?.PrintingService?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header data={sectionData.Header?.variants?.PrintingServiceHeader1} />
      
      {/* Thank You Section (covers the screen, no breadcrumb needed typically for this design) */}
      <div className="flex-grow flex items-center justify-center">
        <ThankYouSection data={sectionData.ThankYou?.variants?.PrintingServiceThankYou1} />
      </div>

      <Footer data={commonData.Footer} />
    </main>
  );
}
