import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import Card from '../ui/Card';

const steps = [
  {
    title: "Уровень 1: Видимость",
    items: ["SEO-лендинги по ключевым услугам", "Авито Бизнес (быстрые заявки)", "VK Ads + ретаргет"]
  },
  {
    title: "Уровень 2: Конверсия",
    items: ["CRM-воронка с SLA", "Скрипты под сегменты", "PDF-каталоги для диалога"]
  },
  {
    title: "Уровень 3: Продажа",
    items: ["B2B-подписка", "Апсейл фулфилмента", "Сквозная аналитика"]
  }
];

const Funnel: React.FC = () => {
  return (
    <section id="funnel" className="scroll-mt-24">
      <SectionHeader 
        tagline="Цифровая воронка"
        title="Система из трёх уровней"
      />

      <Card className="p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-border">
          {steps.map((step, idx) => (
            <div key={idx} className="p-8 bg-gradient-to-b from-white/[0.02] to-transparent relative">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent opacity-50"></div>
              
              <div className="text-[10px] uppercase tracking-widest text-brand-accent-soft mb-2">Этап {idx + 1}</div>
              <h3 className="text-lg font-bold text-white mb-4">{step.title.split(': ')[1]}</h3>
              <ul className="space-y-2.5">
                {step.items.map((item, i) => (
                  <li key={i} className="text-[13px] text-brand-text-soft pl-4 relative border-l border-brand-border">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Funnel;