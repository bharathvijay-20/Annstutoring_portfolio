import React from 'react';
import { GraduationCap, Users, Check, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface StudentParentSectionProps {
  onOpenEnquiry: (targetSubject?: string) => void;
}

export const StudentParentSection: React.FC<StudentParentSectionProps> = ({ onOpenEnquiry }) => {
  const studentBenefits = [
    'Clear, judgment-free explanations of difficult mathematical concepts',
    'Step-by-step problem walkthroughs to eliminate fear and anxiety',
    'Mastery over CBSE HOTS, competency-based questions & case studies',
    'Systematic derivations and physical intuition for engineering theory'
  ];

  const parentBenefits = [
    'Experienced academic faculty with verified background in engineering and teaching',
    'Structured curriculum progress focused on conceptual depth and regular practice',
    'Honest, transparent guidance without exaggerated or unrealistic commercial claims',
    'Supportive learning environment encouraging student curiosity and exam discipline'
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="STUDENT & PARENT PERSPECTIVES"
          title="Learning That Fits the Student"
          subtitle="Whether you are a student striving for conceptual mastery or a parent seeking reliable academic mentorship, our approach is designed for clarity and peace of mind."
        />

        {/* Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* FOR STUDENTS */}
          <div className="bg-slate-50/70 hover:bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-slate-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold tracking-academic text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-md uppercase">
                  FOR STUDENTS
                </span>
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-700">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl text-navy-900 mb-2">
                Need help understanding a difficult topic?
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Get structured explanations, guided problem solving and focused practice without feeling overwhelmed by complex formulas.
              </p>

              <div className="space-y-3 mb-8">
                {studentBenefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/80">
              <button
                onClick={() => onOpenEnquiry('Student Consultation')}
                className="w-full py-3.5 px-6 rounded-xl bg-navy-900 hover:bg-brand-900 text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2 group"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* FOR PARENTS */}
          <div className="bg-slate-50/70 hover:bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-slate-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold tracking-academic text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-md uppercase">
                  FOR PARENTS
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-800">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl text-navy-900 mb-2">
                Looking for focused academic support?
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Explore the learning approach, subjects and academic resources available through ANNS TUTORING for your child’s academic journey.
              </p>

              <div className="space-y-3 mb-8">
                {parentBenefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/80">
              <button
                onClick={() => onOpenEnquiry('Parent Academic Inquiry')}
                className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-slate-50 text-navy-900 border border-slate-300 font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2 group"
              >
                <span>Make an Enquiry</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
