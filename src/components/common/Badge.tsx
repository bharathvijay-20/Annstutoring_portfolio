import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'amber' | 'slate' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'brand',
  className = ''
}) => {
  const variantStyles = {
    brand: 'bg-brand-50 text-brand-700 border-brand-200/70',
    amber: 'bg-amber-50 text-amber-800 border-amber-200/80',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    outline: 'bg-transparent text-slate-600 border-slate-300'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
