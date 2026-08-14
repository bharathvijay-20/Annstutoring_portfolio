import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'center',
  light = false
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-academic uppercase mb-4 ${
        light 
          ? 'bg-white/10 text-amber-300 border border-white/15' 
          : 'bg-brand-50 text-brand-700 border border-brand-200/60'
      }`}>
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
        {label}
      </div>

      <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.2] mb-4 ${
        light ? 'text-white' : 'text-navy-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
