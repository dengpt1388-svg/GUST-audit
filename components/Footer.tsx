import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-muted text-xs tracking-wide">
      <div>© 2025 GUST Strategy. Denis Alekhin.</div>
      <div>Consulting · Marketing · Investment Packaging</div>
    </footer>
  );
};

export default Footer;