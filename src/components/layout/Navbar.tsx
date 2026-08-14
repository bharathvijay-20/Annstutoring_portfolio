import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig, openGoogleForm, getWhatsAppUrl } from '../../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'School Mathematics', href: '#school-math' },
    { name: 'Civil Engineering', href: '#civil-engineering' },
    { name: 'Learning Approach', href: '#learning-approach' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center text-white font-display font-bold text-lg shadow-sm border border-brand-500/30 group-hover:border-amber-400/80 transition-colors shrink-0">
                <span className="text-amber-400">A</span>
                <span className="text-brand-300">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-navy-900 group-hover:text-brand-700 transition-colors leading-none">
                  {siteConfig.brand.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-academic uppercase text-slate-500 mt-1">
                  {siteConfig.brand.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-1.5 rounded-md text-xs font-semibold text-slate-700 hover:text-navy-900 hover:bg-slate-100/70 transition-all duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Primary Action Buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300/80 text-xs font-semibold transition-colors"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={openGoogleForm}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-900 hover:bg-brand-900 text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 group"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={openGoogleForm}
                className="px-3 py-1.5 rounded-md bg-navy-900 text-white text-xs font-semibold"
              >
                Enquire
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between z-50 border-l border-slate-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-navy-900 flex items-center justify-center text-white font-bold text-sm">
                    <span className="text-amber-400">A</span>T
                  </div>
                  <span className="font-display font-bold text-sm text-navy-900">
                    {siteConfig.brand.name}
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-700 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openGoogleForm();
                }}
                className="w-full py-3 px-4 rounded-lg bg-navy-900 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Enquire Now (Google Form)</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
