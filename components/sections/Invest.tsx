import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import Card from '../ui/Card';

const Invest: React.FC = () => {
  return (
    <section id="invest" className="scroll-mt-24">
      <SectionHeader 
        tagline="Инвестиции"
        title="Почему текущий офер не продаёт"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="soft">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="text-red-400">✕</span> Проблемы сейчас
          </h3>
          <ul className="space-y-3 text-sm text-brand-text-soft">
            <li>Заявка на займ 20% без финмодели.</li>
            <li>Нет плана освоения средств.</li>
            <li>Нет юнит-экономики.</li>
          </ul>
        </Card>
        
        <Card>
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="text-brand-accent">✓</span> Нужно инвестору
          </h3>
          <ul className="space-y-3 text-sm text-brand-text-soft">
            <li>Понимание активов и залога.</li>
            <li>Модель окупаемости и загрузки.</li>
            <li>Сценарии выхода.</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Invest;