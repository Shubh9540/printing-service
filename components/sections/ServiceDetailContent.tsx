'use client';

import React from 'react';
import { ServiceDetailData } from '@/types/templates.types';
import Link from 'next/link';
import { FiArrowRight, FiPhoneCall, FiMail, FiMapPin, FiFileText } from 'react-icons/fi';
import { FaCheckCircle, FaLaptopCode, FaMobileAlt, FaUsers, FaLightbulb, FaChartLine, FaShieldAlt, FaGem, FaPen, FaLayerGroup, FaTruck, FaPencilRuler, FaRegClock, FaWallet } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaGem': return <FaGem />;
    case 'FaPen': return <FaPen />;
    case 'FaLayerGroup': return <FaLayerGroup />;
    case 'FaTruck': return <FaTruck />;
    case 'FaPencilRuler': return <FaPencilRuler />;
    case 'FaRegClock': return <FaRegClock />;
    case 'FaWallet': return <FaWallet />;
    case 'FaLaptopCode': return <FaLaptopCode />;
    case 'FaMobileAlt': return <FaMobileAlt />;
    case 'FaUsers': return <FaUsers />;
    case 'FaCheckCircle': return <FaCheckCircle />;
    case 'FaLightbulb': return <FaLightbulb />;
    case 'FaChartLine': return <FaChartLine />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    default: return <FaGem />;
  }
};

export const ServiceDetailContent = ({ data, serviceId, servicesList }: { data?: ServiceDetailData, serviceId?: string, servicesList?: any[] }) => {

  if (!data) return null;

  return (
    <section className="w-full py-10 lg:py-12 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
          {/* Left Side: Main Content */}
          <div className="w-full lg:w-[70%] order-2 lg:order-1">
          
          {/* Main Image */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] mb-8 overflow-hidden bg-gray-50 border border-gray-100 rounded-3xl">
            <img src={data.imageMain || "/portfolio/app/1.webp"} alt={data.title1} className="w-full h-full object-cover" />
          </div>

          {/* Title */}
          <h1 className="text-[36px] md:text-[44px] font-extrabold text-[#051024] mb-4 leading-[1.1]">
            {data.title1} <span className="text-[#e2272e]">{data.title2}</span>
          </h1>

          {/* Description */}
          <p className="text-[#6b7280] text-[15px] leading-[1.8] mb-8">
            {data.description || "Flyers and brochures are one of the most effective marketing tools to showcase your brand, products and services. We provide high-quality, eye-catching flyer and brochure printing solutions in various sizes, finishes and paper options to make your message stand out."}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            {data.features?.map((feat, i) => {
              const featureColors = [
                { bg: 'bg-[#f4ebff]', text: 'text-[#9333ea]' },
                { bg: 'bg-[#e0f2fe]', text: 'text-[#0ea5e9]' },
                { bg: 'bg-[#fef9c3]', text: 'text-[#eab308]' },
                { bg: 'bg-[#f4ebff]', text: 'text-[#9333ea]' }
              ];
              const color = featureColors[i % 4];
              
              return (
              <div key={feat.id || i} className="flex flex-col items-center text-center">
                <div className={`w-[90px] h-[90px] rounded-full flex items-center justify-center text-4xl mb-5 ${color.bg} ${color.text}`}>
                     {renderIcon(feat.icon)}
                </div>
                <h4 className="text-[#051024] font-bold text-[16px] leading-tight px-2">
                  {feat.title}
                </h4>
              </div>
            )})}
          </div>

          {/* Why Choose Us */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
            <div className="w-full md:w-[45%]">
              <img src={data.overviewImage || "/portfolio/ui/1.webp"} alt="Why Choose Us" className="w-full h-auto rounded-2xl object-cover shadow-lg" />
            </div>
            <div className="w-full md:w-[55%]">
              <h3 className="text-[28px] font-extrabold text-[#051024] mb-4 leading-[1.2]">
                {data.overviewTitle || "Why Choose Our Flyers & Brochures Printing?"}
              </h3>
              <p className="text-[#6b7280] text-[14px] leading-relaxed mb-6">
                {data.overviewText?.[0] || "We combine creativity, quality and advanced printing technology to deliver flyers and brochures that leave a lasting impression."}
              </p>
              
              <div className="flex flex-col gap-4">
                {(data.processSteps?.length > 0 ? data.processSteps : [
                  { title: "High-resolution and vibrant printing" },
                  { title: "Multiple sizes and folding options" },
                  { title: "Premium quality paper and finishing" },
                  { title: "Fully customizable designs" },
                  { title: "Suitable for business promotions, events and campaigns" },
                  { title: "Affordable pricing with fast delivery" }
                ]).map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#e2272e] flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[#4a5568] text-[15px] font-medium">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
        </div>
        </div>

        {/* Right Side: Sidebar */}
        <div className="w-full lg:w-[30%] flex flex-col gap-6 order-1 lg:order-2">
          
          {/* Services Menu */}
          <div className="bg-[#fcfcff] border border-gray-100 p-0 flex flex-col shadow-sm">
            {servicesList?.map(service => {
              const isActive = serviceId ? service.url.includes(serviceId) : false;
              return (
                <Link 
                  key={service.id} 
                  href={service.url} 
                  className={`flex items-center justify-between px-6 py-4 text-[14px] font-bold transition-all border-b border-gray-100 last:border-b-0 ${
                    isActive 
                      ? 'bg-red-50 text-[#e2272e]' 
                      : 'bg-white text-[#6b7280] hover:text-[#e2272e] hover:bg-gray-50'
                  }`}
                >
                  {service.title}
                  <FiArrowRight className={`text-[16px] ${isActive ? 'text-[#e2272e]' : 'text-gray-400'}`} />
                </Link>
              );
            })}
          </div>

          {/* Need Quote Widget */}
          <div className="bg-[#fcfcff] border border-gray-100 p-6 flex flex-col shadow-sm relative overflow-hidden group">
            {/* Background Icon */}
            <div className="absolute top-4 right-4 text-[#e2272e]/5 text-[60px] group-hover:scale-110 transition-transform duration-500">
               <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-[20px] font-extrabold text-[#051024] mb-1">
                {data.sidebar?.quoteForm?.title || `Need ${data.title1}?`}
              </h3>
              <p className="text-[#6b7280] text-[13px] mb-5">
                {data.sidebar?.quoteForm?.description || "Get a Free Quote Today!"}
              </p>
              <Link href="/quote" className="w-full bg-[#e2272e] hover:bg-[#c11c22] text-white font-bold text-[14px] py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors mb-6">
                Get a Quote <FiArrowRight />
              </Link>

              <div className="flex flex-col gap-5 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#e2272e] shrink-0 text-[18px]">
                    <FiPhoneCall />
                  </div>
                  <div>
                    <p className="text-[#6b7280] text-[12px]">Call Us</p>
                    <h5 className="text-[#051024] font-bold text-[14px] leading-tight">+1 000000000</h5>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#e2272e] shrink-0 text-[18px]">
                    <FiMail />
                  </div>
                  <div>
                    <p className="text-[#6b7280] text-[12px]">Email Us</p>
                    <h5 className="text-[#051024] font-bold text-[14px] leading-tight">info@xyz.com</h5>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#e2272e] shrink-0 text-[18px]">
                    <FiMapPin />
                  </div>
                  <div>
                    <p className="text-[#6b7280] text-[12px]">Our Address</p>
                    <h5 className="text-[#051024] font-bold text-[14px] leading-tight">123 Main St, New York, NY, USA</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>

        {/* Bottom CTA Banner (Full Width) */}
        <div className="w-full bg-gradient-to-r from-[#fff0f5] to-[#f0f8ff] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
             
           <div className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto text-center md:text-left">
             <div className="w-[70px] h-[70px] shrink-0 bg-white rounded-full flex items-center justify-center text-[#ff3366] text-4xl shadow-sm border border-pink-100">
                <FiFileText />
             </div>
             <div>
               <h4 className="text-[22px] md:text-[28px] font-extrabold text-[#051024] mb-2">
                 Looking for Custom <span className="italic">{data.title1}</span>?
               </h4>
               <p className="text-[#6b7280] text-[15px]">
                 Get premium quality, custom designs and fast delivery at the best prices.
               </p>
             </div>
           </div>
           
           <Link href="/quote" className="w-full md:w-auto shrink-0 bg-[#e2272e] hover:bg-[#c11c22] text-white font-bold text-[15px] py-4 px-10 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-500/20">
             Get a Free Quote <FiArrowRight />
           </Link>
        </div>

      </div>
    </section>
  );
};

