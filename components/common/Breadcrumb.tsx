import React from 'react';
import Link from 'next/link';

export const Breadcrumb = ({ data }: { data?: any }) => {
  if (!data) return null;

  return (
    <section 
      className="w-full relative pt-32 pb-20 md:pt-40 md:pb-28 z-0 bg-cover bg-center"
      style={{ backgroundImage: `url('${data.bgImage || '/main logo/breadcrumb.webp'}')` }}
    >
      {/* White transparent overlay */}
      <div className="absolute inset-0 bg-white/70 z-0"></div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Red Pill Badge for Paths */}
        <div className="inline-flex items-center justify-center bg-[#ff0000] text-white rounded-full px-6 py-1.5 text-sm md:text-base font-bold uppercase tracking-wider mb-4 shadow-md">
          {data.paths?.map((path: any, index: number) => (
            <React.Fragment key={index}>
              {path.url ? (
                <Link href={path.url} className="hover:text-gray-200 transition-colors">
                  {path.label}
                </Link>
              ) : (
                <span>{path.label}</span>
              )}
              {index < data.paths.length - 1 && (
                <span className="mx-2 font-black">.</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#051024]">
          {data.title}
        </h1>
      </div>
    </section>
  );
};
