import React from 'react';

interface SectionHeaderProps {
  tagline: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ tagline, title, description, className = '' }) => {
  return (
    <div className={`mb-10 ${className}`}>
      <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-accent-soft block mb-3">
        {tagline}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-brand-text-soft text-lg leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
};