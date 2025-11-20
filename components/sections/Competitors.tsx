import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import Card from '../ui/Card';

const competitors = [
  { name: "ASK Union", pro: "Мощный SEO, каталог", con: "Нет фулфилмента и R&D" },
  { name: "Столичная Печать", pro: "Онлайн-калькуляторы", con: "Формат «print-shop»" },
  { name: "PRODV", pro: "Активный маркетинг", con: "Нет мощностей фулфилмента" },
  { name: "Yuppie Print", pro: "Визуальные решения", con: "Высокие цены, нет монтажа" },
  { name: "PrintOffice", pro: "Корпоративная печать", con: "Узкая специализация" },
];

const Competitors: React.FC = () => {
  return (
    <section id="competitors" className="scroll-mt-24">
      <SectionHeader 
        tagline="Конкуренты"
        title="5 сильных игроков рынка — и окно возможностей"
        description="Исследовано 5 прямых конкурентов. У всех сильная SEO-машина, но ни один не работает как полноценная экосистема."
      />

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b border-brand-border text-brand-muted text-[11px] uppercase font-bold tracking-wider">Конкурент</th>
                <th className="p-4 border-b border-brand-border text-brand-muted text-[11px] uppercase font-bold tracking-wider">Сильные стороны</th>
                <th className="p-4 border-b border-brand-border text-brand-muted text-[11px] uppercase font-bold tracking-wider">Слабые стороны</th>
              </tr>
            </thead>
            <tbody className="text-sm text-brand-text-soft">
              {competitors.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 border-b border-white/5 font-medium text-white group-last:border-0">{row.name}</td>
                  <td className="p-4 border-b border-white/5 group-last:border-0">{row.pro}</td>
                  <td className="p-4 border-b border-white/5 group-last:border-0">{row.con}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 pt-4 border-t border-brand-border text-sm text-white">
          <strong className="text-brand-accent">Вывод:</strong> у GUST практически нет прямых конкурентов в модели «печать + фулфилмент + R&D + монтаж».
        </div>
      </Card>
    </section>
  );
};

export default Competitors;