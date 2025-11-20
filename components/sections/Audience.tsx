import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import Card from '../ui/Card';

const segments = [
  {
    title: "Логистика",
    pain: "Разные стандарты, низкая скорость.",
    value: "Единый подрядчик, скорость 48ч, SLA."
  },
  {
    title: "Селлеры WB / Ozon",
    pain: "Упаковка и хранение в разных местах.",
    value: "Фулфилмент + печать в одном месте."
  },
  {
    title: "Курьерские службы",
    pain: "Постоянное обновление экипировки.",
    value: "Полный цикл брендирования."
  },
  {
    title: "Вендинг и ритейл",
    pain: "Оформление точек через разных подрядчиков.",
    value: "Комплекс монтаж + POS."
  }
];

const Audience: React.FC = () => {
  return (
    <section id="audience" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <SectionHeader 
            tagline="Целевая аудитория"
            title="B2B-клиент GUST: кому нужна экосистема"
            description="По результатам анализа выделены ключевые сегменты, которые страдают от фрагментации рынка."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            {segments.map((segment, idx) => (
              <Card key={idx} variant="soft" className="p-5">
                <h3 className="text-white font-semibold mb-3 text-base">{segment.title}</h3>
                <div className="text-sm text-brand-text-soft mb-1.5">
                  <span className="text-brand-muted font-medium text-xs uppercase block mb-1">Боль</span>
                  {segment.pain}
                </div>
                <div className="text-sm text-white">
                  <span className="text-brand-muted font-medium text-xs uppercase block mb-1 mt-2">Ценность</span>
                  {segment.value}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="h-fit lg:mt-12">
          <h3 className="text-lg font-bold text-white mb-3">Ключевая идея по ЦА</h3>
          <p className="text-brand-text-soft mb-6 leading-relaxed">
            Все сегменты сходятся в одном: им нужен <strong className="text-white">единый оператор физического брендинга</strong>.
            GUST уже технически способен выступать таким оператором.
          </p>
          <div className="flex flex-wrap gap-2">
            {['⏱ Скорость SLA', '📦 Единое окно', '🚚 Логистика', '📈 Масштаб'].map(tag => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent-soft text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Audience;