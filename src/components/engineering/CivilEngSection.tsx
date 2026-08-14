import React from 'react';
import { ArrowRight, MessageCircle, Building2, Check, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { civilSubjectGroups, civilOverview } from '../../data/civilEngineering';
import { openGoogleForm, getWhatsAppUrl } from '../../config/siteConfig';

export const CivilEngSection: React.FC = () => {
  return (
    <section id="civil-engineering" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="CIVIL ENGINEERING"
          title={civilOverview.title}
          subtitle={civilOverview.description}
        />

        {/* Pure Academic Theory Disclaimer */}
        <div className="max-w-3xl mx-auto mb-10 bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
            <p className="text-xs text-slate-700 font-medium">
              Academic theory, equations, derivations, and exam problem-solving only.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-academic text-slate-500 font-semibold shrink-0 bg-white border border-slate-200 px-2 py-0.5 rounded">
            Theory Subjects
          </span>
        </div>

        {/* 2 Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 max-w-4xl mx-auto">
          {civilSubjectGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 hover:bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 hover:border-slate-300 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-academic text-brand-700 bg-brand-50 border border-brand-200/60 px-2 py-0.5 rounded">
                    {group.badge}
                  </span>
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                </div>

                <h3 className="font-display font-bold text-sm sm:text-base text-navy-900 mb-3.5">
                  {group.category}
                </h3>

                <div className="space-y-2">
                  {group.subjects.map((sub, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Action Strip */}
        <div className="max-w-2xl mx-auto bg-slate-50 rounded-xl p-5 border border-slate-200 text-center space-y-3">
          <p className="text-xs text-slate-600">
            Need guidance for a specific university theory paper or derivation?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openGoogleForm}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-brand-900 text-white font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5"
            >
              <span>Enquire for Civil Engineering</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>

            <a
              href={getWhatsAppUrl('Hello ANNS TUTORING, I would like to enquire about Civil Engineering theory guidance.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300/80 font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
