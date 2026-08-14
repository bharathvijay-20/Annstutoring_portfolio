import React from 'react';
import { Lightbulb, Target, ListTree, Award } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Lightbulb,
      title: 'Concept First',
      description: 'Clear understanding before memorisation.'
    },
    {
      icon: Target,
      title: 'Exam Focused',
      description: 'Questions and preparation aligned with academic requirements.'
    },
    {
      icon: ListTree,
      title: 'Step-by-Step',
      description: 'Complex problems explained systematically.'
    },
    {
      icon: Award,
      title: 'Experienced Guidance',
      description: 'Teaching supported by academic and engineering experience.'
    }
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-start gap-4 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-navy-900 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-sm sm:text-base text-navy-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
