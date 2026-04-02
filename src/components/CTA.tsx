import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          今すぐWeb資産の未来を確保
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          無料プランで今すぐ始めましょう。AI時代に負けないデジタル資産を構築。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            無料アカウント作成
          </button>
          <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
            技術資料ダウンロード
          </button>
        </div>
        <p className="text-gray-400 mt-6 text-sm">
          クレジットカード不要・14日間無料トライアル
        </p>
      </div>
    </section>
  );
};

export default CTA;