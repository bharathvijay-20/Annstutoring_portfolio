import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { siteConfig, openGoogleForm, getWhatsAppUrl } from '../../config/siteConfig';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="CONTACT & ADMISSIONS"
          title="Ready to Learn with Clarity?"
          subtitle="For CBSE Mathematics and Civil Engineering academic enquiries, get in touch with ANNS TUTORING."
        />

        {/* Conversion Action Card */}
        <div className="bg-gradient-to-br from-navy-950 via-slate-900 to-navy-950 rounded-2xl p-7 sm:p-10 text-white shadow-xl border border-slate-800 mb-10 text-center relative overflow-hidden">
          
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 text-xs font-mono font-bold uppercase tracking-academic">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Academic Admissions & Inquiries
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Start your learning journey with a simple enquiry.
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Submit your course requirements through our official Google Form or connect directly on WhatsApp for prompt academic assistance.
            </p>

            {/* Two Primary Conversion Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={openGoogleForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>ENQUIRE NOW (GOOGLE FORM)</span>
                <ArrowRight className="w-4 h-4 text-navy-950 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Phone */}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="p-4.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center text-amber-400 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-academic text-slate-400 font-semibold">
                Phone
              </div>
              <div className="text-xs sm:text-sm font-bold text-navy-900 group-hover:text-brand-700 transition-colors">
                {siteConfig.contact.displayPhone}
              </div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-academic text-slate-400 font-semibold">
                WhatsApp
              </div>
              <div className="text-xs sm:text-sm font-bold text-navy-900 group-hover:text-emerald-700 transition-colors">
                {siteConfig.contact.displayWhatsapp}
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="p-4.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center text-brand-300 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <div className="text-[10px] font-mono uppercase tracking-academic text-slate-400 font-semibold">
                Email
              </div>
              <div className="text-xs font-bold text-navy-900 group-hover:text-brand-700 transition-colors truncate">
                {siteConfig.contact.email}
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-academic text-slate-400 font-semibold">
                Learning Mode
              </div>
              <div className="text-xs font-bold text-navy-900">
                {siteConfig.contact.location}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
