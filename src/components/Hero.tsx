import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // 背景のスケール効果
  const bgScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  
  // タイトルのY移動
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const handleHeroAuditor = () => {
    console.log('Hero: Auditor clicked');
    window.open('https://ssi.metamap.jp/ssi-toolkit', '_blank');
  };

  const handleHeroValue = () => {
    console.log('Hero: Value confirmation');
    const pricingSection = document.querySelector('#pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHeroDocs = () => {
    console.log('Hero: Download docs');
    window.open('https://ssi.metamap.jp/docs/SSI-TechnicalGuide.pdf', '_blank');
  };

  return (
    <motion.section 
      id="hero" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ scale: bgScale }}
    >
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.10),transparent_42%)]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-fixed bg-[linear-gradient(135deg,rgba(56,189,248,0.07),rgba(16,185,129,0.04))]" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-400/30"
        >
          🛡️ AI時代のWeb資産標準
        </motion.p>
        <motion.div 
          style={{ y: titleY }}
          className="mt-5 space-y-4"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight"
          >
            あなたのWebサイトは、
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300">
              登記されていない不動産と同じです。
            </span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
          >
            SSI（Standard-SEC）は、AI時代の「真贋判定」基準を提供します。SSLだけでは守れないデジタル資産を、改ざん不可能な公証原則で守り抜くウェブ登記システム。
          </motion.h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto"
        >
          Search Consoleにインデックスされても、Googleに「真贋」を確証させなければ価値はゼロ。
          SSL（HTTPS）の次に必要な信頼基盤として、SSI（Standard-SEC）が改ざん不可能なデジタル登記簿を実装します。
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={handleHeroAuditor} className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02]">
            無料診断Auditorを実行
          </button>
          <button onClick={handleHeroValue} className="inline-flex items-center justify-center rounded-lg border border-cyan-400/50 px-6 py-3 text-base font-semibold text-cyan-300 hover:bg-cyan-400/20">
            SSI導入の価値を確認
          </button>
          <button onClick={handleHeroDocs} className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-6 py-3 text-base font-semibold text-slate-200 hover:bg-slate-600">
            技術資料ダウンロード
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;