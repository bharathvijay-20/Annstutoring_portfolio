import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { AcademicVisual } from './AcademicVisual';
import { siteConfig, openGoogleForm, getWhatsAppUrl } from '../../config/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#fafbfc] to-slate-100/50"
    >
      {/* Background architectural grid line decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-200/20 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Academic Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>{siteConfig.brand.name}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 leading-[1.15]">
              Learn. Understand.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-800 to-navy-900 block sm:inline">
                Excel.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {siteConfig.brand.shortDesc}
            </p>

            {/* Main Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={openGoogleForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-navy-900 hover:bg-brand-900 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>ENQUIRE NOW</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-sm shadow-sm transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WHATSAPP</span>
              </a>
            </div>

            {/* Trust Statement */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-medium text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>For School Students (Classes 6–10) • Civil Engineering Students</span>
            </div>

          </div>

          {/* Right Column: Academic & Technical Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <AcademicVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
