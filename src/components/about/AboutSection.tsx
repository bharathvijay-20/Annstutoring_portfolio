import React from 'react';
import { User } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { siteConfig } from '../../config/siteConfig';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="ABOUT ANNS TUTORING"
          title="Teaching focused on understanding, not memorisation."
          subtitle="Combining academic clarity, structured problem solving, and practical engineering experience to guide students toward genuine subject confidence."
        />

        {/* Profile Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-navy-950 rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 mb-5">
                <span className="text-[11px] font-mono uppercase tracking-academic text-amber-400 font-semibold">
                  Faculty Profile
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>

              {/* Avatar Photo Frame */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-brand-500/40 flex items-center justify-center text-slate-300 shrink-0">
                  <User className="w-8 h-8 text-brand-300" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                    {siteConfig.faculty.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {siteConfig.faculty.bio}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              ANNS TUTORING // Academic Guidance
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
