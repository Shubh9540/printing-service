'use client';

import React, { useState } from 'react';
import { QuoteData } from '@/types/templates.types';
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperclip,
  FaArrowRight,
  FaRegFileAlt,
  FaRupeeSign,
  FaBolt,
  FaUsers,
  FaListUl,
  FaFileAlt
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaRegFileAlt': return <FaRegFileAlt />;
    case 'FaRupeeSign': return <FaRupeeSign />;
    case 'FaBolt': return <FaBolt />;
    case 'FaUsers': return <FaUsers />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    default: return <FaRegFileAlt />;
  }
};

export const QuoteSection = ({ data }: { data?: QuoteData }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  if (!data) return null;

  return (
    <section className="w-full bg-[#f8f9fc] py-12 lg:py-16">
      <div className="mx-auto max-w-[1300px] px-4 md:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* =========================
              LEFT COLUMN: FORM
          ========================== */}
          <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 xl:p-10">
            
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#051024] mb-2 tracking-tight">
              {data.form.title}
            </h2>
            <p className="text-[#657187] text-[15px] mb-8">
              {data.form.description}
            </p>

            <form className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-bold text-[#051024] mb-2">Full Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FaUser />
                    </span>
                    <input type="text" placeholder="John Doe" className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-[14px] outline-none focus:border-[#051024] focus:ring-1 focus:ring-[#051024] transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#051024] mb-2">Email Address <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FaEnvelope />
                    </span>
                    <input type="email" placeholder="you@printvista.com" className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-[14px] outline-none focus:border-[#051024] focus:ring-1 focus:ring-[#051024] transition-all" />
                  </div>
                </div>
              </div>

              {/* Row 2: Phone & Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-bold text-[#051024] mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FaPhoneAlt />
                    </span>
                    <input type="tel" placeholder="+91 98765 43210" className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-[14px] outline-none focus:border-[#051024] focus:ring-1 focus:ring-[#051024] transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#051024] mb-2">Print Product / Service <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FaListUl />
                    </span>
                    <select className="w-full appearance-none rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-[14px] text-gray-500 outline-none focus:border-[#051024] focus:ring-1 focus:ring-[#051024] transition-all">
                      <option>Select a Service</option>
                      <option>Business Cards</option>
                      <option>Flyers & Brochures</option>
                      <option>Banners</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Quantity & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-bold text-[#051024] mb-2">Quantity (Approx)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FaRegFileAlt />
                    </span>
                    <input type="text" placeholder="e.g. 1000 pieces" className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-[14px] outline-none focus:border-[#051024] focus:ring-1 focus:ring-[#051024] transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-[#051024] mb-2">Delivery Location</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FaMapMarkerAlt />
                    </span>
                    <input type="text" placeholder="City, State, ZIP" className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-[14px] outline-none focus:border-[#051024] focus:ring-1 focus:ring-[#051024] transition-all" />
                  </div>
                </div>
              </div>

              {/* Row 4: Project Details */}
              <div>
                <label className="block text-[13px] font-bold text-[#051024] mb-2">Project Details <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-4 top-4 text-gray-400">
                    <FaFileAlt />
                  </span>
                  <textarea rows={4} placeholder="Tell us about your printing requirements, design preferences, size, material, finishing, or any specific details..." className="w-full resize-none rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-[14px] outline-none focus:border-[#051024] focus:ring-1 focus:ring-[#051024] transition-all"></textarea>
                  <div className="text-right text-[12px] text-gray-400 mt-1">0/500</div>
                </div>
              </div>

              {/* File Upload */}
              <div className="flex flex-col sm:flex-row items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                <div className="flex items-center gap-2 mb-2 sm:mb-0 sm:mt-1 shrink-0">
                  <FaPaperclip className="text-gray-600 text-lg" />
                  <span className="text-[13px] font-bold text-[#051024] block sm:hidden">Attach Files (Optional)</span>
                </div>
                <div className="flex-1 w-full">
                  <span className="hidden sm:block text-[13px] font-bold text-[#051024] mb-2">Attach Files (Optional)</span>
                  <label className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-dashed border-gray-300 hover:border-gray-400 transition-colors rounded-lg p-3 bg-white w-full cursor-pointer relative overflow-hidden">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" multiple onChange={handleFileChange} />
                    <div className="flex items-center gap-3 relative z-10">
                       <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 text-lg">
                         <FaPaperclip />
                       </div>
                       <div>
                         <p className="text-[13px] font-bold text-[#051024]">Upload your design file, reference image or artwork</p>
                         <p className="text-[11px] text-gray-500">PDF, JPG, PNG, AI, PSD (Max 10MB)</p>
                       </div>
                    </div>
                    <div className="bg-gray-100 group-hover:bg-gray-200 text-[#051024] text-[13px] font-bold px-4 py-2 rounded-md transition-colors shrink-0 border border-gray-200 relative z-10">
                      Choose Files
                    </div>
                  </label>

                  {/* Display selected files */}
                  {selectedFiles.length > 0 && (
                    <div className="mt-3 flex flex-col gap-2 relative z-10">
                      {selectedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between gap-2 bg-white border border-gray-200 rounded-md p-2 shadow-sm">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <FaRegFileAlt className="text-gray-400 shrink-0" />
                            <span className="text-[12px] font-medium text-gray-700 truncate">{file.name}</span>
                          </div>
                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-[11px] text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const newFiles = [...selectedFiles];
                                newFiles.splice(index, 1);
                                setSelectedFiles(newFiles);
                              }}
                              className="text-red-400 hover:text-red-600 font-bold text-[14px]"
                            >
                              &times;
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit */}
              <button type="submit" onClick={(e) => e.preventDefault()} className="w-full flex items-center justify-center gap-2 bg-[#051024] hover:bg-[#0a1f44] text-white font-bold text-[15px] py-4 rounded-lg transition-colors shadow-lg shadow-[#051024]/10 mt-2">
                {data.form.buttonText} <FaArrowRight className="text-[12px]" />
              </button>
            </form>

          </div>

          {/* =========================
              RIGHT COLUMN: SIDEBAR
          ========================== */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
            
            {/* Why Choose Card */}
            <div className="bg-[#051024] rounded-2xl p-8 text-white relative overflow-hidden shadow-lg shadow-[#051024]/10">
               {/* Decorative Element */}
               <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-90">
                 <div className="absolute right-10 bottom-10 w-14 h-14 bg-[#e82a7a] rounded-tl-full rounded-br-full origin-bottom-right rotate-45"></div>
                 <div className="absolute right-4 bottom-4 w-14 h-14 bg-[#0ea5e9] rounded-tl-full rounded-br-full origin-bottom-right -rotate-15"></div>
                 <div className="absolute right-10 bottom-0 w-14 h-14 bg-[#eab308] rounded-tl-full rounded-br-full origin-bottom-right rotate-105"></div>
               </div>

               <div className="relative z-10">
                 <div className="w-8 h-1 bg-[#eab308] mb-6 rounded-full"></div>
                 <h3 className="text-[26px] md:text-[28px] font-extrabold leading-[1.2] mb-4">
                   {data.sidebar.whyTitle1} <span className="text-[#0ea5e9]">{data.sidebar.whyTitle2}</span>
                 </h3>
                 <p className="text-gray-300 text-[14px] leading-relaxed mb-8">
                   {data.sidebar.whyDescription}
                 </p>

                 <div className="flex flex-col gap-6">
                   {data.sidebar.features.map((feat) => (
                     <div key={feat.id} className="flex items-start gap-4">
                       <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-[22px] shrink-0 ${feat.colorClass || 'bg-blue-500'}`}>
                         {renderIcon(feat.icon)}
                       </div>
                       <div className="pt-0.5">
                         <h4 className="font-bold text-[15px] mb-1 leading-tight">{feat.title}</h4>
                         <p className="text-gray-400 text-[13px] leading-relaxed pr-4">{feat.description}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#fcfcff] border border-gray-100 rounded-2xl p-8 relative overflow-hidden shadow-sm">
               {/* Decorative Element */}
               <div className="absolute -bottom-12 -right-12 w-40 h-40 opacity-40">
                 <div className="absolute right-10 bottom-10 w-16 h-16 bg-[#e82a7a] rounded-tl-full rounded-br-full origin-bottom-right rotate-45"></div>
                 <div className="absolute right-4 bottom-4 w-16 h-16 bg-[#0ea5e9] rounded-tl-full rounded-br-full origin-bottom-right -rotate-15"></div>
                 <div className="absolute right-10 bottom-0 w-16 h-16 bg-[#eab308] rounded-tl-full rounded-br-full origin-bottom-right rotate-105"></div>
               </div>

               <div className="relative z-10">
                 <h3 className="text-[22px] font-extrabold text-[#051024] mb-2 tracking-tight">
                   {data.sidebar.contactTitle}
                 </h3>
                 <p className="text-[#657187] text-[14px] mb-8 leading-relaxed">
                   {data.sidebar.contactDescription}
                 </p>

                 <div className="flex flex-col gap-6">
                   
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#e82a7a] flex items-center justify-center text-white text-[16px] shrink-0 shadow-md shadow-[#e82a7a]/20">
                       <FaPhoneAlt />
                     </div>
                     <div>
                       <p className="text-[12px] font-bold text-[#657187] mb-0.5">{data.sidebar.contactInfo.phoneTitle}</p>
                       <p className="text-[15px] font-bold text-[#051024] leading-tight">{data.sidebar.contactInfo.phone}</p>
                     </div>
                   </div>

                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white text-[16px] shrink-0 shadow-md shadow-[#0ea5e9]/20">
                       <FaEnvelope />
                     </div>
                     <div>
                       <p className="text-[12px] font-bold text-[#657187] mb-0.5">{data.sidebar.contactInfo.emailTitle}</p>
                       <p className="text-[15px] font-bold text-[#051024] leading-tight">{data.sidebar.contactInfo.email}</p>
                     </div>
                   </div>

                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#eab308] flex items-center justify-center text-white text-[16px] shrink-0 shadow-md shadow-[#eab308]/20">
                       <FaMapMarkerAlt />
                     </div>
                     <div>
                       <p className="text-[12px] font-bold text-[#657187] mb-0.5">{data.sidebar.contactInfo.locationTitle}</p>
                       <p className="text-[14px] font-bold text-[#051024] leading-snug max-w-[200px]">{data.sidebar.contactInfo.location}</p>
                     </div>
                   </div>

                 </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};