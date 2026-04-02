import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🔐',
      title: '暗号学的証明',
      description: 'SHA-256ハッシュによる資産の完全性保証'
    },
    {
      icon: '🤖',
      title: 'AI防衛シールド',
      description: 'allowAiTraining: falseによる機械可読な拒絶宣言'
    },
    {
      icon: '📊',
      title: '自動監査',
      description: 'AI防衛スコア・真贋証明スコアのリアルタイム評価'
    },
    {
      icon: '🌐',
      title: 'W3C VC準拠',
      description: '国際標準のVerifiable Credentialsによる信頼性'
    },
    {
      icon: '⚡',
      title: 'ビルド自動化',
      description: 'CI/CDパイプラインへのシームレス統合'
    },
    {
      icon: '💰',
      title: 'コスト削減',
      description: '手動SEO/法務作業を自動化し、年間数百万円削減'
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