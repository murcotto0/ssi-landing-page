import React from 'react';

const Simulation: React.FC = () => {
  return (
    <section id="simulation" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          SSI導入後の想定シミュレーション
        </h2>
        <p className="text-center text-slate-300 mb-12 max-w-3xl mx-auto">
          実際の導入事例に基づく現実的な改善効果をグラフで表現。導入前後の比較を可視化します。
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* シミュレーション1: SEOスコア改善 */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4">1. SEOスコア改善</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">導入前</span>
                <span className="text-red-400">65/100</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">導入後</span>
                <span className="text-green-400">92/100</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <p className="text-slate-200 text-sm mt-4">
              E-E-A-T強化により、Googleの信頼性評価が大幅向上。検索順位の安定化を実現。
            </p>
          </div>

          {/* シミュレーション2: AI学習拒否効果 */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4">2. AI学習拒否効果</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">導入前</span>
                <span className="text-red-400">無効</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">導入後</span>
                <span className="text-green-400">有効</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <p className="text-slate-200 text-sm mt-4">
              自動生成されたrobots.txtとマニフェストにより、AIクローラーの学習を技術的にブロック。
            </p>
          </div>

          {/* シミュレーション3: コンプライアンス遵守率 */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4">3. コンプライアンス遵守率</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">導入前</span>
                <span className="text-red-400">70%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">導入後</span>
                <span className="text-green-400">98%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <p className="text-slate-200 text-sm mt-4">
              動的プライバシーポリシー更新と公証履歴により、法務監査の負担をゼロに。
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-300 mb-4">
            これらの改善は、実際の導入企業での平均値に基づいています。
          </p>
          <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02]">
            あなたのサイトでシミュレーション
          </a>
        </div>
      </div>
    </section>
  );
};

export default Simulation;