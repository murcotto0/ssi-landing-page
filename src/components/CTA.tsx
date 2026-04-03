import React, { useState } from 'react';

const CTA: React.FC = () => {
  const [showValueModal, setShowValueModal] = useState(false);

  const handleAuditor = () => {
    // SSIツールキットのAuditorを実行（仮実装）
    window.open('/ssi-toolkit', '_blank');
  };

  const handleValueConfirm = () => {
    setShowValueModal(true);
  };

  const handleDownload = () => {
    // 技術資料ダウンロード（仮実装）
    const link = document.createElement('a');
    link.href = '/docs/ARCH.md'; // docsフォルダのファイルをダウンロード
    link.download = 'technical-guide.md';
    link.click();
  };

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
          <button 
            onClick={handleAuditor}
            className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            無料診断Auditorを実行
          </button>
          <button 
            onClick={handleValueConfirm}
            className="border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
          >
            SSI導入の価値を確認
          </button>
          <button 
            onClick={handleDownload}
            className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
          >
            技術資料ダウンロード
          </button>
        </div>
        <p className="text-slate-400 mt-6 text-sm">
          まずは現状評価：5分で完了するリスク分析レポートを無料発行します。
          これにより即時の課題発見と導入計画が可能になります。
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-emerald-400">50+</div>
            <div className="text-slate-300 text-sm">導入企業数</div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-emerald-400">2週間</div>
            <div className="text-slate-300 text-sm">平均導入期間</div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-emerald-400">85%</div>
            <div className="text-slate-300 text-sm">平均改善率</div>
          </div>
        </div>
      </div>

      {/* 価値確認モーダル */}
      {showValueModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-8 rounded-lg max-w-md mx-4">
            <h3 className="text-2xl font-bold text-white mb-4">SSI導入の価値</h3>
            <p className="text-slate-300 mb-4">
              SSIを導入することで、Web資産の真正性を証明し、信頼性を向上させます。ガバナンス、コンプライアンス、セキュリティの観点から大きな価値を提供します。
            </p>
            <ul className="text-slate-300 mb-6 list-disc list-inside">
              <li>リスク分析レポートの自動生成</li>
              <li>真贋証明の即時発行</li>
              <li>導入期間の短縮</li>
            </ul>
            <button 
              onClick={() => setShowValueModal(false)}
              className="bg-emerald-400 text-slate-900 font-bold py-2 px-4 rounded"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTA;