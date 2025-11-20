import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

const takeaways = [
  "Рынок типографий перенасыщен, но пуст в сегменте экосистем.",
  "Спрос смещается к логистике и селлерам.",
  "Конкуренты сильны в SEO, но не в сервисе.",
  "Деньги рынка — в комплексных задачах.",
  "Фулфилмент (+34%) — драйвер долгих контрактов.",
  "R&D почти не развито, у GUST здесь преимущество.",
  "ЦА хочет одного оператора брендинга.",
  "У GUST есть мощности, но нет системного маркетинга.",
  "Цифровая воронка даст 20–40 B2B-заявок/мес.",
  "Инвест-упаковка — условие роста."
];

const Summary: React.FC = () => {
  return (
    <section id="summary" className="scroll-mt-24">
      <SectionHeader 
        tagline="Executive summary"
        title="10 главных выводов исследования"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {takeaways.map((text, idx) => (
          <div key={idx} className="p-5 rounded-xl bg-white/[0.02] border border-brand-border hover:bg-white/[0.04] transition-colors">
            <div className="text-[10px] font-bold text-brand-muted mb-2">{(idx + 1).toString().padStart(2, '0')}</div>
            <div className="text-[13px] text-brand-text-soft font-medium leading-snug">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Summary;