'use client';
import React, { useEffect, useState, useRef } from 'react';
import { FaUsers, FaLayerGroup, FaAward, FaTruck } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers': return <FaUsers />;
    case 'FaLayerGroup': return <FaLayerGroup />;
    case 'FaAward': return <FaAward />;
    case 'FaTruck': return <FaTruck />;
    default: return <FaUsers />;
  }
};

const CountUpItem = ({ text }: { text: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  // Try to parse number and suffix (e.g. "50K+" -> 50, "K+")
  const match = text.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : NaN;
  const suffix = match ? match[2] : text;

  useEffect(() => {
    if (isNaN(targetNumber)) return; // Don't animate if it's not a standard number starting string (like "24/7" might be handled if it's "24", but "24/7" gives num=24 suffix="/7" which is fine)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = targetNumber / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetNumber]);

  if (isNaN(targetNumber)) {
    return <span>{text}</span>;
  }

  return <span ref={ref}>{count}{suffix}</span>;
};

export const AnimatedStats = ({ stats }: { stats: { id: string; icon: string; number: string; label: string }[] }) => {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="mt-8 grid grid-cols-2 gap-y-6 gap-x-2 md:flex md:flex-row items-start md:items-center justify-between bg-white md:rounded-full rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-5 md:px-6 md:py-3 md:gap-2 w-full overflow-hidden">
      {stats.map((stat, index) => {
        const bgColors = ['bg-[#cde2ff]', 'bg-[#ffe6f0]', 'bg-[#ffe082]', 'bg-[#dcfce7]'];
        const iconColors = ['text-[#0d65ff]', 'text-[#ec4899]', 'text-[#eab308]', 'text-[#22c55e]'];
        const colorIndex = index % bgColors.length;

        return (
          <React.Fragment key={stat.id}>
            <div className="flex items-center gap-3 shrink-0">
              <div className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full flex shrink-0 items-center justify-center text-lg ${bgColors[colorIndex]} ${iconColors[colorIndex]}`}>
                {renderIcon(stat.icon)}
              </div>
              <div>
                <h4 className="text-[#051024] font-extrabold text-[16px] lg:text-[18px] leading-none mb-0.5">
                  <CountUpItem text={stat.number} />
                </h4>
                <p className="text-gray-500 text-[11px] lg:text-[12px] leading-tight whitespace-nowrap">{stat.label}</p>
              </div>
            </div>
            
            {/* Divider */}
            {index < stats.length - 1 && (
              <div className="hidden md:block w-[1px] h-8 bg-gray-200 shrink-0"></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
