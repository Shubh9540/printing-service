import React from 'react';
import { PrintingServiceTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { Footer } from '@/components/common/Footer';
import { TopBar } from '@/components/common/TopBar';

export const dynamic = 'force-dynamic';

export default function QuotePage() {
  const templateData: PrintingServiceTemplateData = rawData;
  const sectionData = templateData?.categories?.PrintingService?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.PrintingServiceTopBar1} />
      <Header data={sectionData.Header?.variants?.PrintingServiceHeader1} />
      <Breadcrumb data={{
        title: "Get A Quotes",
        bgImage: commonData.aboutBreadcrumb?.bgImage,
        paths: [
          { label: "Home", url: "/" },
          { label: "Get A Quotes" }
        ]
      }} />
      
      <QuoteSection data={sectionData.Quote?.variants?.PrintingServiceQuote1} /><Footer data={commonData.Footer} />
    </main>
  );
}
