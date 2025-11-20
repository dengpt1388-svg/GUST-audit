import React from 'react';
import { ArrowRight, LayoutGrid, Zap } from 'lucide-react';
import Counter from '../ui/Counter';

const Hero: React.FC = () => {
  return (
    <section id="big-idea" className="scroll-mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-10 items-center p-8 lg:p-12 rounded-3xl border border-brand-border bg-brand-bg/40 backdrop-blur-xl shadow-2xl shadow-black/50">
        
        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent-soft text-[11px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-soft shadow-[0_0_8px_rgba(41,199,195,1)] animate-pulse-slow"></span>
            GUST · B2B Экосистема Печати
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-text-soft">
            Печать будущего: от типографии к экосистеме брендинга
          </h1>
          
          <p className="text-lg text-brand-text-soft leading-relaxed max-w-2xl mb-8">
            Задача: превратить GUST из «ещё одной типографии» в инфраструктуру физического брендинга для логистики, селлеров и ритейла. А заодно — подготовить почву для сильной инвестиционной упаковки.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#summary" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0d6b81] to-brand-accent text-white text-sm font-semibold shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 hover:-translate-y-0.5 transition-all">
              <Zap size={16} className="fill-current" />
              <span>Посмотреть выводы</span>
            </a>
            <a href="#packages" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-brand-text-soft text-sm font-semibold hover:bg-white/10 hover:text-white transition-all">
              <LayoutGrid size={16} />
              <span>Форматы работы</span>
            </a>
          </div>
        </div>

        {/* Stats / Aside */}
        <div className="bg-[#0d1928]/60 p-6 rounded-2xl border border-brand-border flex flex-col gap-6">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-brand-muted mb-1">Сильные стороны GUST</div>
            <div className="text-xl font-bold text-white mb-1.5">Экосистема печать + фулфилмент + R&D</div>
            <div className="text-sm text-brand-text-soft leading-snug">
              GUST закрывает полный цикл: от концепции до монтажа и хранения на складе.
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-brand-text-soft font-medium">
              ср. чек <span className="text-white font-bold"><Counter end={93176} suffix=" ₽" /></span>
            </div>
            <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-brand-text-soft font-medium">
              фулфилмент <span className="text-white font-bold"><Counter end={1000} suffix=" м²" /></span>
            </div>
            <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-brand-text-soft font-medium">
              работа по всей РФ
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;