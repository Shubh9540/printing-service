'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderData } from '@/types/templates.types';
import { FaBars, FaTimes, FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaRegCalendarAlt': return <FaRegCalendarAlt />;
    default: return null;
  }
};

export const Header = ({ data }: { data?: HeaderData }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  const navLinks = data.navLinksLeft || [];
  const contact = data.contactInfoRight?.[0];

  return (
    <header className="w-full relative z-50 bg-[var(--color-primary)] text-white">
      <div className="w-full max-w-[1300px] mx-auto flex min-h-20 items-center justify-between px-4 md:px-6">

        {/* Mobile Spacer to balance flex */}
        <div className="w-10 lg:hidden"></div>

        {/* Logo */}
        <Link href="/" className="flex items-center justify-center shrink-0 lg:border-r border-white/10 lg:pr-6 lg:mr-8 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <img src={data.logo} alt={data.logoAlt} className="h-10 lg:h-12 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.url || (link.subLinks && link.subLinks.some(sub => pathname.startsWith(sub.url)));
            
            if (link.subLinks && link.subLinks.length > 0) {
              return (
                <div key={link.id} className="relative group px-4 h-20 flex items-center whitespace-nowrap text-[13px] font-bold tracking-wider transition-colors text-gray-300 hover:text-white cursor-pointer">
                  {/* Active red sloped background */}
                  {isActive && (
                    <span className="absolute inset-y-5 -inset-x-1 bg-[var(--color-accent)] -skew-x-12 z-0 rounded-sm"></span>
                  )}
                  <span className={`relative z-10 flex items-center gap-1 ${isActive ? 'text-white' : ''}`}>
                    {link.label}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>

                  {/* Dropdown Menu */}
                  <div className="absolute top-20 left-0 w-48 bg-white shadow-lg rounded-b-lg border-t-2 border-[var(--color-accent)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col py-2">
                    {link.subLinks.map((subLink) => (
                      <Link key={subLink.id} href={subLink.url} className="px-4 py-2 text-[14px] font-medium text-gray-700 hover:text-[var(--color-accent)] hover:bg-gray-50 transition-colors">
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.id}
                href={link.url}
                className={`relative px-4 h-20 flex items-center whitespace-nowrap text-[13px] font-bold tracking-wider transition-colors 
                  ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              >
                {/* Active red sloped background */}
                {isActive && (
                  <span className="absolute inset-y-5 -inset-x-1 bg-[var(--color-accent)] -skew-x-12 z-0 rounded-sm"></span>
                )}
                <span className="relative z-10 flex items-center gap-1">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action Section */}
        <div className="hidden lg:flex items-center h-full ml-auto">
          {/* Sloped Divider */}
          <div className="w-0.5 h-20 bg-[var(--color-accent)] rotate-[20deg] mx-6"></div>

          {/* Contact Phone */}
          {contact && (
            <div className="flex items-center gap-4 mr-8">
              <div className="w-12 h-12 rounded-full bg-[#272f3d] flex items-center justify-center text-white text-lg">
                {renderIcon(contact.icon)}
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-sm font-bold">{contact.value}</span>
                <span className="text-gray-400 text-xs leading-tight">{contact.label}</span>
              </div>
            </div>
          )}

          {/* Quote Button */}
          {data.contactButton && (
            <Link href={data.contactButton.url} className="flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] transition-colors h-10 px-6 rounded-md text-white font-semibold whitespace-nowrap">
              {renderIcon(data.contactButton.icon || 'FaRegCalendarAlt')}
              {data.contactButton.text}
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-2xl p-2">
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 flex flex-col p-4 bg-[#0d131f]">
          {navLinks.map((link) => {
            if (link.subLinks && link.subLinks.length > 0) {
              return (
                <div key={link.id} className="flex flex-col border-b border-white/10">
                  <div className="py-3 px-4 text-sm font-semibold text-gray-300 flex items-center justify-between">
                    {link.label}
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                  <div className="flex flex-col pl-6 bg-white/5 py-1">
                    {link.subLinks.map((subLink) => (
                      <Link key={subLink.id} href={subLink.url} onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-4 text-sm font-medium text-gray-400 hover:text-white">
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link key={link.id} href={link.url} onClick={() => setMobileMenuOpen(false)} className={`py-3 px-4 text-sm font-semibold border-b border-white/10 ${pathname === link.url ? 'text-[#ef2323]' : 'text-gray-300'}`}>
                {link.label}
              </Link>
            );
          })}
          {contact && (
            <div className="py-4 px-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#272f3d] flex items-center justify-center text-white">
                {renderIcon(contact.icon)}
              </div>
              <div>
                <p className="font-bold text-white">{contact.value}</p>
                <p className="text-xs text-gray-400">{contact.label}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
