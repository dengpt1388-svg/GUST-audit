import React from 'react';

const navItems = [
  { label: 'Идея', href: '#big-idea' },
  { label: 'Рынок', href: '#market' },
  { label: 'Аудитория', href: '#audience' },
  { label: 'Конкуренты', href: '#competitors' },
  { label: 'Продукты', href: '#products' },
  { label: 'Воронка', href: '#funnel' },
  { label: '90 дней', href: '#roadmap' },
  { label: 'Пакеты', href: '#packages' },
];

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
      <a href="#" className="flex items-center gap-3.5 group">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0d6b81] via-brand-accent to-brand-accent-soft flex items-center justify-center text-white font-extrabold text-xl shadow-[0_0_15px_rgba(24,163,168,0.4)] transition-transform group-hover:scale-105">
          G
        </div>
        <div>
          <div className="font-bold text-white uppercase tracking-widest text-base leading-none mb-1">Gust Print</div>
          <div className="text-[11px] text-brand-muted uppercase tracking-wider font-medium">operations · logistics · service</div>
        </div>
      </a>

      <nav className="flex flex-wrap justify-center md:justify-end gap-1.5">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-xs font-medium uppercase tracking-wider text-brand-text-soft px-3.5 py-2 rounded-full border border-transparent hover:border-brand-border hover:text-white hover:bg-white/5 transition-all"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;