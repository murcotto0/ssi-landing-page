import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-850 border-t border-slate-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          いまこそ、Web資産を登記し、真贋を証明する
        </h2>
        <p className="text-xl text-slate-300 mb-8">
          無料診断から導入までを最短化。ガバナンス、信頼性、コンプライアンスの3本柱を一気通貫で提供します。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            無料診断Auditorを実行
          </button>
          <button className="border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
            企業導入相談
          </button>
        </div>
        <p className="text-slate-400 mt-6 text-sm">
          まずは現状評価：5分で完了するリスク分析レポートを無料発行します。
          これにより即時の課題発見と導入計画が可能になります。
        </p>
      </div>
    </section>
  );
};

export default CTA;