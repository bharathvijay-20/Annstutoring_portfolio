import React from 'react';
import { Compass, Sparkles, BookOpen, Layers } from 'lucide-react';

export const AcademicVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center p-4">
      
      {/* Background glow and subtle coordinate grid */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/10 via-amber-500/5 to-transparent rounded-3xl blur-2xl -z-10" />
      
      {/* Main Academic Frame */}
      <div className="relative w-full h-full bg-navy-950 rounded-2xl border border-slate-800/90 shadow-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between">
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        
        {/* Header of the Academic Slate */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 font-medium">
              ANNS // CONCEPT MATRIX
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand-950/80 border border-brand-800 text-[10px] font-mono text-brand-300">
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
              THEORY & RIGOR
            </span>
          </div>
        </div>

        {/* Dynamic Vector Linework (Mathematics + Civil Engineering) */}
        <div className="relative my-auto py-4 z-10">
          <svg
            viewBox="0 0 400 240"
            className="w-full h-auto text-slate-300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Coordinate Grid lines */}
            <line x1="40" y1="20" x2="40" y2="220" stroke="#1e293b" strokeWidth="1" />
            <line x1="200" y1="20" x2="200" y2="220" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="360" y1="20" x2="360" y2="220" stroke="#1e293b" strokeWidth="1" />
            <line x1="20" y1="120" x2="380" y2="120" stroke="#334155" strokeWidth="1.5" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="#1e293b" strokeWidth="1" />

            {/* Engineering Truss Structure */}
            <path
              d="M40 200 L120 120 L200 200 L280 120 L360 200 Z"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeLinejoin="round"
              className="drop-shadow"
            />
            <path
              d="M120 120 L280 120"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <line x1="120" y1="120" x2="120" y2="200" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="280" y1="120" x2="280" y2="200" stroke="#0284c7" strokeWidth="1.5" />
            
            {/* Truss Nodes */}
            <circle cx="40" cy="200" r="4.5" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="120" cy="120" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="4.5" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="280" cy="120" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="360" cy="200" r="4.5" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />

            {/* Mathematical Harmonic Wave / Parabola (Bending Moment / Sinusoid) */}
            <path
              d="M40 120 Q120 30, 200 120 T360 120"
              stroke="#f59e0b"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Vectors & Load Indicators */}
            <line x1="120" y1="60" x2="120" y2="110" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            <polygon points="120,118 116,108 124,108" fill="#ef4444" />
            <text x="126" y="85" fill="#f87171" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">P (kN)</text>

            <line x1="280" y1="60" x2="280" y2="110" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            <polygon points="280,118 276,108 284,108" fill="#ef4444" />
            <text x="286" y="85" fill="#f87171" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">P (kN)</text>

            {/* Mathematical Annotations */}
            <text x="50" y="45" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono">
              f(x) = a·x² + b·x + c
            </text>
            <text x="250" y="45" fill="#cbd5e1" fontSize="10" fontFamily="JetBrains Mono">
              σ = (M · y) / I
            </text>
            <text x="50" y="185" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">
              Σ Fy = 0  |  Σ M = 0
            </text>
            <text x="270" y="185" fill="#64748b" fontSize="9" fontFamily="JetBrains Mono">
              θ = tan⁻¹(dy/dx)
            </text>
          </svg>
        </div>

        {/* Dual Pillar Preview Footer */}
        <div className="relative z-10 grid grid-cols-2 gap-3 pt-3 border-t border-slate-800/80">
          <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 flex items-center gap-2.5">
            <div className="p-1.5 rounded bg-brand-500/10 text-brand-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-white">CBSE Maths</div>
              <div className="text-[9px] text-slate-400">Classes 6 to 10</div>
            </div>
          </div>

          <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 flex items-center gap-2.5">
            <div className="p-1.5 rounded bg-amber-500/10 text-amber-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-white">Civil Engineering</div>
              <div className="text-[9px] text-slate-400">16 Theory Subjects</div>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Mini Academic Badge */}
      <div className="absolute -bottom-2 -left-2 sm:bottom-2 sm:left-0 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-slate-200/90 flex items-center gap-3 hidden sm:flex z-20">
        <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center text-amber-400 font-bold">
          <Compass className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-navy-900">Concept-Based</div>
          <div className="text-[10px] text-slate-500">First Principles Approach</div>
        </div>
      </div>

    </div>
  );
};
