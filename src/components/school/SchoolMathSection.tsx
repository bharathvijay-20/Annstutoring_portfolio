import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, BookOpen } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { mathHighlights, mathOverview } from '../../data/mathematics';
import { openGoogleForm, getWhatsAppUrl } from '../../config/siteConfig';

export const SchoolMathSection: React.FC = () => {
  return (
    <section id="school-math" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="SCHOOL MATHEMATICS"
          title={mathOverview.title}
          subtitle={mathOverview.description}
        />

        {/* Crisp Card Presentation */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Key Focus Points */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-academic text-brand-700">
                <BookOpen className="w-4 h-4" />
                <span>Curriculum Focus</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {mathHighlights.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quick Action Box */}
            <div className="lg:col-span-5 bg-slate-50/80 rounded-xl p-5 sm:p-6 border border-slate-200 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-amber-700 uppercase tracking-academic block mb-1">
                  Targeted Learning
                </span>
                <h4 className="font-display font-bold text-base text-navy-900 mb-1">
                  Classes 6 to 10 CBSE
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured explanations, step-by-step solutions, and exam preparation designed to remove fear and build genuine problem-solving ability.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={openGoogleForm}
                  className="w-full py-2.5 px-4 rounded-lg bg-navy-900 hover:bg-brand-900 text-white font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Enquire for Mathematics</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href={getWhatsAppUrl('Hello ANNS TUTORING, I would like to enquire about CBSE Mathematics classes.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300/80 font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
