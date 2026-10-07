import React from 'react';
import { PrintingServiceTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const templateData: PrintingServiceTemplateData = rawData;
  const sectionData = templateData?.categories?.PrintingService?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.PrintingServiceTopBar1} logoData={sectionData.Header?.variants?.PrintingServiceHeader1} />
      <Header data={sectionData.Header?.variants?.PrintingServiceHeader1} />
      <Breadcrumb data={commonData.contactBreadcrumb} />
      
      {/* Contact Section */}
      <ContactSection data={sectionData.contact?.variants?.PrintingServiceContact1} /><Footer data={commonData.Footer} />
    </main>
  );
}
