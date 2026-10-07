'use client';
import React from 'react';
import { ContactData } from '@/types/templates.types';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeadset, FaFileAlt, FaCog, FaStar, FaUser, FaGlobe, FaListUl, FaCommentDots, FaArrowRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaHeadset': return <FaHeadset />;
    case 'FaFileAlt': return <FaFileAlt />;
    case 'FaCog': return <FaCog />;
    case 'FaStar': return <FaStar />;
    default: return <FaStar />;
  }
};

export const ContactSection = ({ data }: { data?: ContactData }) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[#f8f9fc] pb-10">
      
      {/* Top Contact Info Cards */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone Card */}
          <div className="bg-[#fff0f5] rounded-xl p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#ff3366] flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-[#ff3366]/30">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-[#ff3366] text-[13px] font-bold mb-1">{data.contactCards.phoneTitle}</p>
              <h4 className="text-[#051024] font-extrabold text-[16px] leading-tight mb-1">{data.contactCards.phone}</h4>
              <p className="text-[#6b7280] text-[12px]">{data.contactCards.phoneDesc}</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-[#f0f5ff] rounded-xl p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#0d65ff] flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-[#0d65ff]/30">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-[#0d65ff] text-[13px] font-bold mb-1">{data.contactCards.emailTitle}</p>
              <h4 className="text-[#051024] font-extrabold text-[16px] leading-tight mb-1">{data.contactCards.email}</h4>
              <p className="text-[#6b7280] text-[12px]">{data.contactCards.emailDesc}</p>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-[#fff9e6] rounded-xl p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#ffb000] flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-[#ffb000]/30">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-[#ffb000] text-[13px] font-bold mb-1">{data.contactCards.addressTitle}</p>
              <h4 className="text-[#051024] font-bold text-[14px] leading-tight mb-1">{data.contactCards.address}</h4>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 pb-10">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Form Area */}
          <div className="w-full lg:w-[65%] bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] p-6 md:p-8 relative overflow-hidden">
             
             {/* Decorative Shape */}
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#fff0f5] to-transparent rounded-tl-full opacity-60 pointer-events-none"></div>

             <div className="relative z-10">
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-6 h-[2px] bg-[#ff3366]"></div>
                 <h4 className="text-[#ff3366] font-bold text-[12px] tracking-[0.15em] uppercase">{data.form.subtitle}</h4>
               </div>

               <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#051024] leading-[1.2] mb-3">
                 {data.form.title1} <span className="text-[#ff3366]">{data.form.title2}</span>
               </h2>
               
               <p className="text-[#6b7280] text-[14px] mb-6 leading-relaxed max-w-[90%]">
                 {data.form.description}
               </p>

               <form className="space-y-4">
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div className="relative">
                     <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaUser /></span>
                     <input type="text" placeholder="Enter your name *" className="w-full rounded-lg border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-[14px] outline-none focus:border-[#ff3366] transition-colors" />
                   </div>
                   <div className="relative">
                     <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaEnvelope /></span>
                     <input type="email" placeholder="Enter your email *" className="w-full rounded-lg border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-[14px] outline-none focus:border-[#ff3366] transition-colors" />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div className="relative">
                     <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaPhoneAlt /></span>
                     <input type="tel" placeholder="Enter your number *" className="w-full rounded-lg border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-[14px] outline-none focus:border-[#ff3366] transition-colors" />
                   </div>
                   <div className="relative">
                     <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaGlobe /></span>
                     <input type="url" placeholder="Enter your website" className="w-full rounded-lg border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-[14px] outline-none focus:border-[#ff3366] transition-colors" />
                   </div>
                 </div>

                 <div className="relative">
                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaListUl /></span>
                   <select className="w-full appearance-none rounded-lg border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-[14px] text-gray-500 outline-none focus:border-[#ff3366] transition-colors">
                     <option>Select Service Interested In</option>
                     <option>Business Cards</option>
                     <option>Flyers & Brochures</option>
                     <option>Custom Banners</option>
                   </select>
                 </div>

                 <div className="relative">
                   <span className="absolute left-4 top-4 text-gray-400"><FaCommentDots /></span>
                   <textarea rows={4} placeholder="Enter your message *" className="w-full resize-none rounded-lg border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-[14px] outline-none focus:border-[#ff3366] transition-colors"></textarea>
                 </div>

                 <div className="flex items-start gap-3 mt-2">
                   <input type="checkbox" id="save-info" className="mt-1 border-gray-300 rounded text-[#ff3366] focus:ring-[#ff3366]" />
                   <label htmlFor="save-info" className="text-[13px] text-[#6b7280]">
                     Save my name, email, and website in this browser for the next time I comment.
                   </label>
                 </div>

                 <button type="button" className="mt-4 bg-gradient-to-r from-[#ff3366] to-[#ff6b00] hover:from-[#e62e5c] hover:to-[#e66000] text-white font-bold text-[14px] py-4 px-8 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-[#ff3366]/20">
                   {data.form.buttonText} <FaArrowRight />
                 </button>
               </form>
             </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[35%] bg-[#051024] rounded-2xl overflow-hidden shadow-xl flex flex-col">
             
             {/* Top Image */}
             <div className="w-full h-48 relative">
               <img src={data.sidebar.image} alt="Contact Building" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#051024]"></div>
             </div>

             <div className="p-6 flex-1">
               <h3 className="text-white text-[20px] font-extrabold mb-6">{data.sidebar.title}</h3>

               <div className="flex flex-col gap-6">
                 {data.sidebar.reasons.map((reason) => (
                   <div key={reason.id} className="flex items-start gap-4">
                     <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-[26px] shrink-0 shadow-lg ${reason.colorClass}`}>
                       {renderIcon(reason.icon)}
                     </div>
                     <div>
                       <h4 className="text-white font-bold text-[15px] mb-1">{reason.title}</h4>
                       <p className="text-gray-400 text-[13px] leading-snug">{reason.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 pb-8">
        <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100">
          <iframe 
            src={data.mapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </section>
  );
};
