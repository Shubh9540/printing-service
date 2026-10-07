import React from 'react';
import { PrintingServiceTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { GallerySection } from '@/components/sections/GallerySection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const templateData: PrintingServiceTemplateData = rawData;
  const sectionData = templateData?.categories?.PrintingService?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <div className="relative">
        <Header data={sectionData.Header?.variants?.PrintingServiceHeader1} />
        <Breadcrumb data={commonData.galleryBreadcrumb} />
      </div>
      
      {/* Gallery Section */}
      <GallerySection data={sectionData.Gallery?.variants?.PrintingServiceGallery1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
