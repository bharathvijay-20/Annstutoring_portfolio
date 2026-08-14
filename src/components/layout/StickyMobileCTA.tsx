import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, ArrowRight } from 'lucide-react';
import { openGoogleForm, getWhatsAppUrl } from '../../config/siteConfig';

export const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const contactEl = document.getElementById('contact');
      let isNearContact = false;

      if (contactEl) {
        const contactTop = contactEl.getBoundingClientRect().top;
        if (contactTop < window.innerHeight - 80) {
          isNearContact = true;
        }
      }

      setIsVisible(scrollY > 300 && !isNearContact);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={openGoogleForm}
          className="flex-2 py-2.5 px-4 rounded-lg bg-navy-900 hover:bg-brand-900 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
        >
          <Send className="w-3.5 h-3.5 text-amber-400" />
          <span>Enquire Now</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>
    </div>
  );
};
