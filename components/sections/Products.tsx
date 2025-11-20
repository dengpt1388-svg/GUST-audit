import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import Card from '../ui/Card';

const Products: React.FC = () => {
  return (
    <section id="products" className="scroll-mt-24">
      <SectionHeader 
        tagline="Продуктовая матрица"
        title="От наклеек до R&D: где деньги"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="soft">
          <h3 className="text-lg font-semibold text-white mb-4">Ключевые продукты</h3>
          <ul className="space-y-3">
            {[
              "Наклейки — быстрый оборот, высокая маржа.",
              "Фулфилмент — долгие контракты, подписки, стабильный MRR.",
              "Брендирование транспорта — крупные чеки, «витрина».",
              "Упаковка — точка входа для селлеров."
            ].map((item, i) => (
              <li key={i} className="relative pl-6 text-[15px] text-brand-text-soft">
                <span className="absolute left-0 top-1.5 text-brand-accent-soft text-[10px]">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card variant="default" className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-white mb-4">ТОП-3 приоритета</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="px-3 py-2 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent-soft text-sm font-medium">🔹 Наклейки (Лид-магнит)</div>
            <div className="px-3 py-2 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent-soft text-sm font-medium">🔹 Фулфилмент (Подписка)</div>
            <div className="px-3 py-2 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent-soft text-sm font-medium">🔹 Транспорт (Витрина)</div>
          </div>
          <p className="text-sm text-brand-text-soft leading-relaxed">
            Эти три направления должны стать ядром стратегии: именно они дают кратный рост выручки.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Products;