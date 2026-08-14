import React from 'react';
import { ArrowRight, BookOpen, Building2, Check } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface LearningPathsProps {
  onOpenEnquiry: (targetSubject?: string) => void;
}

export const LearningPaths: React.FC<LearningPathsProps> = ({ onOpenEnquiry }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const mathFeatures = [
    'Classes 6–10 Comprehensive Syllabus',
    'CBSE & NCERT Focused Curriculum',
    'Chapter-wise Concept Foundations',
    'Important & Board Blueprint Questions',
    'HOTS (Higher Order Thinking Skills)',
    'Competency-Based & Case Studies',
    'Step-by-Step Marking Scheme Solutions',
    'Full Board Exam Preparation Strategy'
  ];

  const civilSubjects = [
    'Engineering Mechanics & SOM',
    'Structural Analysis & Theory of Structures',
    'Soil Mechanics & Foundation Engineering',
    'Fluid Mechanics & Hydraulics',
    'Building Materials & Construction Tech',
    'Construction Management & Estimation',
    'Environmental & Transportation Eng',
    'Surveying & Engineering Geology'
  ];

  return (
    <section id="learning-paths" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="TWO CORE LEARNING PATHS"
          title="Choose Your Learning Path"
          subtitle="Focused academic support for two different learning journeys."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* CARD 1 — SCHOOL MATHEMATICS */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            
            <div className="p-7 sm:p-9">
              {/* Card Label & Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold tracking-academic text-brand-700 bg-brand-50 border border-brand-200/60 px-3 py-1 rounded-md uppercase">
                  01 / SCHOOL MATHEMATICS
                </span>
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-700">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-3 tracking-tight">
                CBSE Mathematics | Classes 6–10
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Build strong mathematical foundations, understand concepts clearly and develop confidence through structured problem solving.
              </p>

              {/* Visual diagrammatic element */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 mb-6 font-mono text-xs text-slate-700 flex items-center justify-between">
                <span className="text-brand-800 font-semibold">f(x) = ax² + bx + c</span>
                <span className="text-slate-400">|</span>
                <span className="text-amber-700 font-semibold">sin²θ + cos²θ = 1</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-800 font-semibold">BPT Theorem</span>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-academic text-slate-400 mb-1">
                  Curriculum Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  {mathFeatures.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card CTA Footer */}
            <div className="p-6 sm:px-9 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => handleScrollTo('school-math')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm text-navy-900 group-hover:text-brand-700 transition-colors"
              >
                <span>Explore School Mathematics</span>
                <ArrowRight className="w-4 h-4 text-brand-600 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenEnquiry('CBSE Mathematics (Class 6-10)')}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-navy-900 hover:bg-brand-900 text-white font-medium text-xs shadow-sm transition-colors"
              >
                Enquire for Maths
              </button>
            </div>

          </div>

          {/* CARD 2 — CIVIL ENGINEERING */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            
            <div className="p-7 sm:p-9">
              {/* Card Label & Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold tracking-academic text-amber-800 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-md uppercase">
                  02 / CIVIL ENGINEERING
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-3 tracking-tight">
                Civil Engineering Theory
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Strengthen your understanding of core Civil Engineering theory through clear explanations, structured concepts and problem-solving guidance.
              </p>

              {/* Visual diagrammatic element */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 mb-6 font-mono text-xs text-slate-700 flex items-center justify-between">
                <span className="text-amber-800 font-semibold">σ = (M · y) / I</span>
                <span className="text-slate-400">|</span>
                <span className="text-brand-800 font-semibold">τ = VQ / Ib</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-800 font-semibold">q_ult = cNc + qNq</span>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-academic text-slate-400 mb-1">
                  16 Core Theory Subjects
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  {civilSubjects.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card CTA Footer */}
            <div className="p-6 sm:px-9 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => handleScrollTo('civil-engineering')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm text-navy-900 group-hover:text-amber-700 transition-colors"
              >
                <span>Explore Civil Engineering</span>
                <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenEnquiry('Civil Engineering Theory')}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-navy-900 hover:bg-brand-900 text-white font-medium text-xs shadow-sm transition-colors"
              >
                Enquire for Civil
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
