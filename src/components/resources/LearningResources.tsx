import React from 'react';
import { Target, Brain, Award, BookOpen, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { learningResources } from '../../data/resources';

interface LearningResourcesProps {
  onOpenEnquiry: (targetSubject?: string) => void;
}

export const LearningResources: React.FC<LearningResourcesProps> = ({ onOpenEnquiry }) => {
  const iconMap: Record<string, React.ElementType> = {
    Target,
    Brain,
    Award,
    BookOpen,
    CheckCircle2,
    Zap
  };

  return (
    <section id="resources" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="LEARNING RESOURCES"
          title="Useful academic content designed for continuous learning."
          subtitle="Carefully structured study materials, conceptual frameworks, and practice question sets designed to build deep problem-solving capability."
        />

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {learningResources.map((res) => {
            const Icon = iconMap[res.icon] || BookOpen;
            return (
              <div
                key={res.id}
                className="bg-slate-50/80 hover:bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-slate-300 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-academic uppercase px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-800 border border-brand-200">
                      {res.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-navy-900 mb-2">
                    {res.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {res.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-200/70">
                    {res.topics.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenEnquiry(`Academic Resource Access: ${res.title}`)}
                    className="w-full py-2 px-3 rounded-lg border border-slate-200 hover:border-navy-900 text-xs font-semibold text-slate-700 hover:text-navy-900 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Resource Pack</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Responsible Academic Disclaimer */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-center max-w-2xl mx-auto">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            All practice modules are developed from standard academic syllabi and cognitive learning principles. Materials are curated strictly to enhance conceptual grasp rather than make unverified prediction claims.
          </p>
        </div>

      </div>
    </section>
  );
};
