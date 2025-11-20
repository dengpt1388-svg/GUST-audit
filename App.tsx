import React from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import MarketAnalysis from './components/sections/MarketAnalysis';
import Audience from './components/sections/Audience';
import Competitors from './components/sections/Competitors';
import Products from './components/sections/Products';
import Summary from './components/sections/Summary';
import Funnel from './components/sections/Funnel';
import Roadmap from './components/sections/Roadmap';
import Invest from './components/sections/Invest';
import Packages from './components/sections/Packages';
import CTA from './components/sections/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg bg-radial-glow relative overflow-hidden selection:bg-brand-accent selection:text-white">
      {/* Second background gradient layer */}
      <div className="fixed inset-0 pointer-events-none bg-radial-glow-bottom z-0" />
      
      <div className="relative z-10 max-w-[1160px] mx-auto px-6 pt-8 pb-20">
        <Header />
        
        <main className="space-y-24">
          <Hero />
          <MarketAnalysis />
          <Audience />
          <Competitors />
          <Products />
          <Summary />
          <Funnel />
          <Roadmap />
          <Invest />
          <Packages />
          <CTA />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;