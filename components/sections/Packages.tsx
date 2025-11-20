import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import Card from '../ui/Card';

const packages = [
  {
    badge: "", // Empty as requested (previously Stage 1)
    title: "Аудит и стратегия",
    desc: "Увидеть полную картину и вектор:",
    items: [
      "SWOT-анализ GUST",
      "Анализ рынка и конкурентов",
      "Позиционирование бренда",
      "Подробный план по структуре SEO-оптимизированного сайта"
    ],
    price: "15 000 ₽",
    highlight: false,
    note: null
  },
  {
    badge: "Рекомендация",
    title: "Рост (Growth)",
    desc: "Фокус на системе продаж и трафике:",
    items: [
      "Воронка",
      "Лендинг и контент-план",
      "Трафик (SEO, Авито, TG, Pinterest)",
      "Стратегия роста конверсии в 4 раза",
      "Настройка ИИ чат-бота"
    ],
    price: "49 000 ₽",
    highlight: true,
    note: null
  },
  {
    badge: "",
    title: "Инвестиции*",
    desc: "Упаковка под привлечение денег.",
    items: [
      "Инвест-оффер и Pitch Deck",
      "Рассылка по базе 170+ контактов",
      "Сценарии привлечения"
    ],
    price: "10 000 ₽",
    highlight: false,
    note: "*Рекомендация: обратиться к Брыткову."
  }
];

const Packages: React.FC = () => {
  return (
    <section id="packages" className="scroll-mt-24">
      <SectionHeader 
        tagline="Форматы работы"
        title="Пакеты консалтинга"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg, idx) => (
          <Card key={idx} variant={pkg.highlight ? 'highlight' : 'default'} className="flex flex-col justify-between relative overflow-hidden">
            {pkg.highlight && (
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/20 blur-3xl rounded-full pointer-events-none"></div>
            )}
            
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-wider mb-2 min-h-[1.5em] ${pkg.highlight ? 'text-brand-accent' : 'text-brand-muted'}`}>
                {pkg.badge}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
              <p className="text-xs text-brand-text-soft mb-6">{pkg.desc}</p>
              
              <ul className="space-y-2.5 mb-8">
                {pkg.items.map((item, i) => (
                  <li key={i} className="text-[13px] text-brand-text-soft pl-4 border-l-2 border-white/10">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-white/5">
              {pkg.note && (
                <div className="text-xs text-brand-muted mb-2 italic">
                  {pkg.note}
                </div>
              )}
              <div className="text-lg font-bold text-brand-accent-soft">{pkg.price}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Packages;