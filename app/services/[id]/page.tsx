import React from 'react';
import { PrintingServiceTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: PrintingServiceTemplateData = rawData;
  const sectionData = templateData?.categories?.PrintingService?.sections;
  const commonData = templateData?.common;
  
  // Get data for specific service
  const serviceDetail = sectionData?.ServiceDetail?.variants?.[id];

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;
  if (!serviceDetail) return <div className="text-black p-10">Service not found</div>;

  const breadcrumbData = {
    title: serviceDetail.title2,
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Services', url: '/services' },
      { label: serviceDetail.title2 }
    ],
    bgImage: '/main logo/breadcrumb.webp'
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <div className="relative">
        <Header data={sectionData.Header?.variants?.PrintingServiceHeader1} />
        <Breadcrumb data={breadcrumbData} />
      </div>
      <ServiceDetailContent 
        data={serviceDetail} 
        serviceId={id} 
        servicesList={sectionData.Services?.variants?.PrintingServiceServices1?.services || []} 
      />

      <Footer data={commonData.Footer} />
    </main>
  );
}
