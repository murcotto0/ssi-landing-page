import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🔐',
      title: '真贋・完全性証明',
      description: 'ビルド時に全アセットのハッシュ値を算出し、W3C準拠のデジタル署名を付与。改ざんと偽サイトを暗号学的に無効化します。'
    },
    {
      icon: '🛡️',
      title: 'AI防衛ポリシー',
      description: '`robots.txt` Default Denyとマニフェスト内AI学習拒否宣言を自動実装し、AIスクリプトの無断利用を技術的にブロック。'
    },
    {
      icon: '🧩',
      title: 'E-E-A-T自動強化',
      description: '専門家DIDとJSON-LDをヘッダに埋め込み、Googleが信頼する真正性を機械可読で証明。'
    },
    {
      icon: '📜',
      title: '法務コンプライアンス',
      description: 'プライバシーポリシー・コピーライトを動的更新し、更新履歴を公証。法務監査をハンズオフに。'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          なぜSSIが必要か
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;