import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import Card from '../ui/Card';
import Counter from '../ui/Counter';

const MarketAnalysis: React.FC = () => {
  return (
    <section id="market" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <SectionHeader 
            tagline="Диагностика рынка"
            title="Рынок полиграфии перегрет — но ниша экосистем пуста"
          />
          <p className="text-brand-text-soft text-[15px] mb-8 leading-relaxed">
            Исследование рынка полиграфии Москвы (2024–2025) показывает:
            конкуренция высока в базовой печати, но слаба там, где печать соединяется с логистикой.
          </p>
          
          <div className="flex flex-wrap gap-8 pt-6 border-t border-brand-border">
            <div>
              <div className="text-3xl font-bold text-white mb-1"><Counter end={1100} suffix="+" /></div>
              <div className="text-xs text-brand-muted uppercase tracking-wide">типографий в Москве</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1"><Counter end={300} /></div>
              <div className="text-xs text-brand-muted uppercase tracking-wide">игроков «полный цикл»</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-accent mb-1"><Counter end={34} prefix="+" suffix="%" /></div>
              <div className="text-xs text-brand-muted uppercase tracking-wide">рост фулфилмента '24</div>
            </div>
          </div>
        </div>

        <Card variant="soft">
          <h3 className="text-lg font-semibold text-white mb-4">Куда смещается спрос</h3>
          <ul className="space-y-3 mb-6">
            {[
              "Логистика и курьерка увеличили расходы на брендирование на 12–18%.",
              "Селлеры маркетплейсов ищут связку «упаковка + фулфилмент + маркировка» в одном окне.",
              "Крупным заказчикам критично иметь одного партнёра, а не 7–12 подрядчиков."
            ].map((item, i) => (
              <li key={i} className="relative pl-6 text-[15px] text-brand-text-soft">
                <span className="absolute left-0 top-1.5 text-brand-accent-soft text-[10px]">✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-white font-medium text-sm pt-4 border-t border-white/5">
            <span className="text-brand-accent">Вывод:</span> рынок готов к игроку экосистемного уровня.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default MarketAnalysis;