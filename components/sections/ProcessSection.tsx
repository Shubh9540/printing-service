import React from 'react';
import { ProcessData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

const DocumentIcon = ({ primary, secondary, className }: { primary: string, secondary: string, className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke={primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2V8H20" stroke={primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 13H16" stroke={secondary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 17H16" stroke={secondary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 9H10" stroke={secondary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DesignIcon = ({ primary, secondary, className }: { primary: string, secondary: string, className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 3C17.5304 2.46957 18.2501 2.17163 19 2.17163C19.7499 2.17163 20.4696 2.46957 21 3C21.5304 3.53043 21.8284 4.25014 21.8284 5C21.8284 5.74986 21.5304 6.46957 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke={primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 6L18 10" stroke={secondary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 14L10 20" stroke={secondary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PrinterIcon = ({ primary, secondary, className }: { primary: string, secondary: string, className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9V2H18V9" stroke={primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18" stroke={primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 14H18V22H6V14Z" stroke={primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 18H14" stroke={secondary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PackageIcon = ({ primary, secondary, className }: { primary: string, secondary: string, className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke={primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.27002 6.95996L12 12.01L20.73 6.95996" stroke={primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 22.08V12" stroke={primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 4.20996L16.5 9.40996" stroke={secondary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const renderIcon = (iconName: string, primary: string, secondary: string, className: string = "w-full h-full") => {
  switch (iconName) {
    case 'FiFileText': return <DocumentIcon primary={primary} secondary={secondary} className={className} />;
    case 'MdDesignServices': return <DesignIcon primary={primary} secondary={secondary} className={className} />;
    case 'FiPrinter': return <PrinterIcon primary={primary} secondary={secondary} className={className} />;
    case 'FiPackage': return <PackageIcon primary={primary} secondary={secondary} className={className} />;
    default: return <DocumentIcon primary={primary} secondary={secondary} className={className} />;
  }
};

export const ProcessSection = ({ data }: { data?: ProcessData }) => {
  if (!data) return null;

  const stepColors = [
    {
      bgCard: 'bg-[#f4f7fe]',
      badge: 'bg-[#407BFF]',
      glow: 'bg-[#e1edff]',
      primaryColor: '#051024',
      secondaryColor: '#407BFF',
    },
    {
      bgCard: 'bg-[#fff5ee]',
      badge: 'bg-[#ff6b2b]',
      glow: 'bg-[#ffe4d6]',
      primaryColor: '#051024',
      secondaryColor: '#ff6b2b',
    },
    {
      bgCard: 'bg-[#f0fff4]',
      badge: 'bg-[#48c946]',
      glow: 'bg-[#dcfce3]',
      primaryColor: '#051024',
      secondaryColor: '#48c946',
    },
    {
      bgCard: 'bg-[#fcf5ff]',
      badge: 'bg-[#895bf1]',
      glow: 'bg-[#f3e5ff]',
      primaryColor: '#051024',
      secondaryColor: '#895bf1',
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 lg:py-12">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <div className="mb-8 lg:mb-16 text-center max-w-[700px] mx-auto">
          {data.subtitle && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-[#ff5a00]" />
              <h4 className="text-[#ff5a00] font-bold text-sm tracking-widest uppercase">
                {data.subtitle}
              </h4>
              <div className="w-8 h-[2px] bg-[#ff5a00]" />
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#051024] leading-tight mb-5 tracking-tight">
            {data.title1} <span className="text-[#ff5a00]">{data.title2}</span>
          </h2>
          {data.description && (
            <p className="text-[#6b7280] text-[16px] leading-relaxed mx-auto max-w-[600px]">
              {data.description}
            </p>
          )}
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6 lg:gap-x-10 xl:gap-x-12 relative mt-16">

          {/* Decorative Dotted Line Background for Desktop */}
          <div className="hidden lg:block absolute top-[80px] left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-[#cbd5e1] z-0"></div>

          {data.steps.map((step, index) => {
            const colors = stepColors[index % stepColors.length];
            return (
              <div key={step.id} className="relative flex flex-col items-center group h-full">

                {/* Card Container */}
                <div className={`${colors.bgCard} rounded-[20px] w-full pt-20 pb-10 px-6 text-center relative z-10 flex-grow flex flex-col transition-transform duration-300 hover:-translate-y-2`}>

                  {/* Top Circle & Icon */}
                  <div className="absolute -top-[55px] left-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                      {/* Glow Circle */}
                      <div className={`w-[110px] h-[110px] rounded-full ${colors.glow} flex items-center justify-center p-3 relative`}>
                        {/* Inner White Circle */}
                        <div className="w-full h-full rounded-full bg-white shadow-sm flex items-center justify-center p-[20px] transition-transform duration-300 group-hover:scale-110">
                          {renderIcon(step.icon, colors.primaryColor, colors.secondaryColor)}
                        </div>
                      </div>

                      {/* Number Badge */}
                      <div className={`absolute top-0 -left-2 w-[34px] h-[34px] rounded-full ${colors.badge} flex items-center justify-center text-white text-[13px] font-bold shadow-md z-30 ring-4 ring-white`}>
                        {step.number}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-[19px] font-extrabold text-[#051024] mb-3 mt-4 leading-[1.3]">
                    {step.title}
                  </h3>
                  <p className="text-[#6b7280] text-[14.5px] leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Arrow */}
                {index < data.steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[80px] -right-[12px] lg:-right-[20px] xl:-right-[24px] translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white items-center justify-center text-[#ff5a00] text-[18px] z-20 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-[6px] border-white box-content">
                    <FaArrowRight />
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
