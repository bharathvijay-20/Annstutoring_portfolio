import React from 'react';
import { Award, BookOpen, Cpu, ShieldCheck, Bookmark, Building } from 'lucide-react';
import { credentialsData } from '../../data/credentials';

export const Credibility: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    'Assistant Professor': BookOpen,
    'Design Engineer': Building,
    'Published Author': Bookmark,
    'Patent Holder': Cpu,
    'ISTE Life Member': ShieldCheck,
    'Member, Institution of Civil Engineers': Award
  };

  return (
    <div className="pt-6 border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-academic mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
          Academic Background
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mb-3">
          Academic Experience Meets Engineering Knowledge
        </h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Teaching experience combined with professional Civil Engineering knowledge provides a strong foundation for concept-focused academic guidance.
        </p>
      </div>

      {/* Grid of Verified Credentials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {credentialsData.map((cred, idx) => {
          const Icon = iconMap[cred.title] || Award;
          return (
            <div 
              key={idx}
              className="bg-slate-50/70 hover:bg-white rounded-xl p-6 border border-slate-200/90 hover:border-slate-300 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center text-white mb-4">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="font-display font-bold text-base text-navy-900 mb-1">
                  {cred.title}
                </h4>
                <div className="text-xs font-semibold text-brand-700 mb-2">
                  {cred.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cred.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
