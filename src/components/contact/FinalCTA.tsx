import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenEnquiry: (targetSubject?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 text-white relative overflow-hidden">
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono font-bold uppercase tracking-academic">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Academic Guidance Ready For You
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Your next step starts with understanding.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Learn the concept. Practise the method. Build confidence.
        </p>

        <div className="pt-4">
          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200 group transform hover:-translate-y-0.5"
          >
            <span>START YOUR ENQUIRY</span>
            <ArrowRight className="w-5 h-5 text-navy-950 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
