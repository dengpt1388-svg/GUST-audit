import React from 'react';
import Card from '../ui/Card';
import { Calendar } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="scroll-mt-24">
      <Card className="text-center py-16 px-6 md:px-12 bg-gradient-to-b from-brand-card to-[#0d1928]">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-accent-soft mb-4 block">
          Следующий шаг
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Что предлагаю сделать сейчас
        </h2>
        <p className="text-brand-text-soft text-lg max-w-2xl mx-auto mb-10">
          Провести online-сессию, где я покажу детальный результат аудита и обсудим, 
          нужен ли GUST инвест-продукт прямо сейчас или фокус на операционном росте.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://t.me/quantum_den" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-white font-bold shadow-lg shadow-brand-accent/20 hover:-translate-y-1 hover:shadow-brand-accent/40 transition-all">
            <Calendar size={18} />
            <span>Назначить стратегическую сессию</span>
          </a>
        </div>
      </Card>
    </section>
  );
};

export default CTA;