import React from 'react';
import { Lightbulb, ListOrdered, Target, Award } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { learningApproachData } from '../../data/process';

export const LearningApproach: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Lightbulb,
    ListOrdered,
    Target,
    Award
  };

  return (
    <section id="learning-approach" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="LEARNING APPROACH"
          title="How We Learn"
          subtitle="A structured 4-pillar methodology designed for deep understanding and examination confidence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {learningApproachData.map((item) => {
            const Icon = iconMap[item.iconName] || Lightbulb;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-navy-900 group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors">
                      <Icon className="w-4 h-4 text-brand-700" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-navy-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
