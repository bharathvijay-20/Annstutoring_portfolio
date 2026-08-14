import React from 'react';
import { ArrowUpRight, Youtube, Instagram, MessageCircle, BookOpen, Building2 } from 'lucide-react';
import { siteConfig, openGoogleForm, getWhatsAppUrl } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800/80 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center text-white font-display font-bold text-lg border border-brand-500/40 shrink-0">
                <span className="text-amber-400">A</span>
                <span className="text-brand-300">T</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight block">
                  {siteConfig.brand.name}
                </span>
                <span className="text-xs uppercase tracking-academic text-amber-400 font-semibold">
                  {siteConfig.brand.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.brand.shortDesc}
            </p>

            <div className="text-xs text-slate-400">
              <span className="text-slate-200 font-semibold">Faculty: </span>
              {siteConfig.faculty.name}
            </div>

            {/* Social Icons */}
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-950 text-slate-300 hover:text-red-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-950 text-slate-300 hover:text-pink-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-950 text-slate-300 hover:text-emerald-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Academic Categories */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-academic text-slate-200">
              Academic Offerings
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => handleScrollTo('school-math')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  <BookOpen className="w-3 h-3 text-amber-400" />
                  <span>CBSE Mathematics (Classes 6–10)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('civil-engineering')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  <Building2 className="w-3 h-3 text-brand-400" />
                  <span>Core Civil Engineering Theory</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('learning-approach')}
                  className="hover:text-white transition-colors text-left"
                >
                  How We Learn (4-Pillar Approach)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('videos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Educational Video Lessons
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Enquiries */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-academic text-slate-200">
              Admissions
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={openGoogleForm}
                  className="text-amber-400 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Enquire via Google Form <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <a 
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Direct WhatsApp Chat <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li className="text-slate-400 pt-1">
                Phone: {siteConfig.contact.displayPhone}
              </li>
              <li className="text-slate-400">
                Email: {siteConfig.contact.email}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © 2026 <span className="text-slate-300 font-medium">{siteConfig.brand.name}</span>. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-[11px] text-slate-400">
            CBSE Mathematics & Civil Engineering Theory Tutoring
          </div>
        </div>
      </div>
    </footer>
  );
};
