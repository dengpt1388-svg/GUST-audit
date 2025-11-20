import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'soft' | 'highlight';
}

export const Card: React.FC<CardProps> = ({ children, className = '', variant = 'default' }) => {
  const baseStyles = "rounded-2xl transition-all duration-300 border backdrop-blur-md";
  
  const variants = {
    default: "bg-brand-card border-brand-border hover:border-brand-border-hover hover:-translate-y-1 shadow-lg shadow-black/20",
    soft: "bg-white/5 border-transparent hover:bg-white/10 hover:-translate-y-1",
    highlight: "bg-gradient-to-br from-brand-accent/10 to-brand-bg border-brand-accent/30 shadow-[0_0_30px_rgba(24,163,168,0.1)] hover:border-brand-accent/50 hover:-translate-y-1"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;