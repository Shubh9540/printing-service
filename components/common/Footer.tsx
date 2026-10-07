'use client';
import React, { useEffect, useState } from 'react';
import { FooterData } from '@/types/templates.types';
import Link from 'next/link';
import { 
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaAngleRight, FaArrowUp,
  FaTruck, FaGem, FaCog, FaHeadset, FaRegClock
} from 'react-icons/fa';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaYoutube': return <FaYoutube />;
    case 'FaTwitter': return <FaTwitter />;
    default: return <FaFacebookF />;
  }
};

const renderFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaTruck': return <FaTruck />;
    case 'FaGem': return <FaGem />;
    case 'FaCog': return <FaCog />;
    case 'FaHeadset': return <FaHeadset />;
    default: return <FaCog />;
  }
};

export const Footer = ({ data }: { data?: FooterData }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!data) return null;

  return (
    <footer className="w-full relative bg-[#001d42] pt-8 lg:pt-16 overflow-hidden">
      
      {/* Decorative background arcs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#000a18] to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#000a18] to-transparent rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none opacity-80"></div>

      <div className="max-w-[1350px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 pb-8 lg:pb-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">
          
          {/* Column 1: Brand & Features */}
          <div className="lg:w-[35%] lg:pr-8">
            <Link href="/">
              <img src="/main logo/logo.webp" alt={data.logoAlt} className="h-16 lg:h-20 object-contain mb-6" />
            </Link>
            <p className="text-gray-300 text-[15px] leading-[1.8] mb-10 pr-4">
              {data.description}
            </p>
            
            <div className="grid grid-cols-4 gap-4">
              {data.features?.map((feature) => (
                <div key={feature.id} className="flex flex-col items-center text-center gap-3">
                  <div 
                    className="w-[50px] h-[50px] rounded-full border-2 flex items-center justify-center text-xl shrink-0"
                    style={{ borderColor: feature.color, color: feature.color }}
                  >
                    {renderFeatureIcon(feature.icon)}
                  </div>
                  <span className="text-white text-[12px] font-semibold leading-tight px-1">
                    {feature.title.split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word}
                        {i !== feature.title.split(' ').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="lg:w-[20%]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              {data.servicesTitle || 'Our Services'}
            </h3>
            <div className="w-12 h-1 bg-[#0d65ff] mb-8"></div>
            <ul className="flex flex-col gap-4">
              {data.servicesLinks.map(link => (
                <li key={link.id}>
                  <Link href={link.url} className="text-gray-300 text-[15px] hover:text-white transition-colors flex items-center gap-3 group">
                    <FaAngleRight className="text-[#0d65ff] text-sm group-hover:translate-x-1 transition-transform" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="lg:w-[25%]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              {data.contactTitle || 'Contact Us'}
            </h3>
            <div className="w-12 h-1 bg-[#0d65ff] mb-8"></div>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#122240] flex items-center justify-center text-[#0d65ff] shrink-0 mt-1">
                  <FaPhoneAlt size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-[15px]">Call Us</span>
                  <span className="text-gray-400 text-[14px]">{data.contactInfo.phone}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#122240] flex items-center justify-center text-[#0d65ff] shrink-0 mt-1">
                  <FaEnvelope size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-[15px]">Email Us</span>
                  <span className="text-gray-400 text-[14px]">{data.contactInfo.email}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#122240] flex items-center justify-center text-[#0d65ff] shrink-0 mt-1">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-[15px]">Our Address</span>
                  <span className="text-gray-400 text-[14px] leading-relaxed">{data.contactInfo.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#122240] flex items-center justify-center text-[#0d65ff] shrink-0 mt-1">
                  <FaRegClock size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-[15px]">Working Hours</span>
                  <span className="text-gray-400 text-[14px] leading-relaxed">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Gallery */}
          <div className="lg:w-[20%]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              {data.galleryTitle || 'Gallery'}
            </h3>
            <div className="w-12 h-1 bg-[#0d65ff] mb-8"></div>
            <div className="grid grid-cols-3 gap-3">
              {data.gallery?.map(item => (
                <div key={item.id} className="relative w-full aspect-square rounded-lg overflow-hidden group">
                  <img src={item.image} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[#0d65ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Links Bar */}
      <div className="border-t border-white/10 bg-[#00122e]">
        <div className="max-w-[1350px] mx-auto px-4 md:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-gray-400 text-sm">
            {data.copyrightText}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {data.socialLinks?.map(social => {
                let colorClass = "bg-[#3b5998]"; // FB
                if (social.icon === 'FaInstagram') colorClass = "bg-[#e1306c]";
                else if (social.icon === 'FaLinkedinIn') colorClass = "bg-[#0077b5]";
                else if (social.icon === 'FaYoutube') colorClass = "bg-[#ff0000]";
                else if (social.icon === 'FaTwitter') colorClass = "bg-[#1da1f2]";
                
                return (
                  <Link 
                    key={social.id} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform ${colorClass}`}
                  >
                    {renderSocialIcon(social.icon)}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Links */}
            <div className="hidden sm:flex items-center gap-3 border-l border-white/20 pl-6">
              {data.bottomLinks?.map((link, idx) => (
                <React.Fragment key={link.id}>
                  <Link href={link.url} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                  {idx < data.bottomLinks.length - 1 && (
                    <span className="text-gray-600 text-xs">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Fixed Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#0d65ff] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(13,101,255,0.4)] hover:bg-[#0b56d9] hover:-translate-y-1 transition-all duration-300 animate-fade-in"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

    </footer>
  );
};
