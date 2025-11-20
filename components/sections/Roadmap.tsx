import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

const months = [
  {
    month: "Месяц 1",
    focus: "Фундамент",
    tasks: ["Позиционирование GUST", "Продуктовая матрица", "Структура сайта + лендинги", "CRM-воронка"]
  },
  {
    month: "Месяц 2",
    focus: "Трафик",
    tasks: ["SEO и кейсы", "VK Ads и Авито", "Telegram-контент", "B2B-рассылки"]
  },
  {
    month: "Месяц 3",
    focus: "Масштаб",
    tasks: ["B2B-подписка", "Партнёрская программа", "Инвест-предложение"]
  }
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="scroll-mt-24">
      <SectionHeader 
        tagline="План на 90 дней"
        title="Что нужно сделать для лидерства"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {months.map((m, idx) => (
          <div key={idx} className="p-8 rounded-2xl border border-brand-border bg-brand-bg/30 relative group hover:bg-brand-card transition-colors">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"></div>
            
            <div className="text-[10px] uppercase tracking-widest text-brand-muted mb-2">{m.month}</div>
            <h3 className="text-xl font-bold text-white mb-6">{m.focus}</h3>
            
            <ul className="space-y-3">
              {m.tasks.map((task, i) => (
                <li key={i} className="text-sm text-brand-text-soft flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-accent mt-2"></span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;