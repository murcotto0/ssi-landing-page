import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '¥0',
      period: '月',
      features: [
        'マニフェスト自動生成',
        '簡易SSI監査レポート',
        'コミュニティサポート'
      ],
      cta: '今すぐ無料で始める',
      popular: false
    },
    {
      name: 'Standard',
      price: '¥9,800',
      period: '月',
      features: [
        '無制限プロジェクト',
        'AI防衛ポリシー自動適用',
        'E-E-A-T自動強化',
        '法務コンプライアンス自動化'
      ],
      cta: '無料トライアル開始',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '要見積',
      period: '',
      features: [
        '専用SI',
        'SLA保証',
        '優先対応',
        'カスタムSIEM連携'
      ],
      cta: 'お問い合わせ',
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          料金プラン
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border transition-all duration-300 ${plan.popular ? 'border-cyan-400 scale-105' : 'border-slate-700'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  人気
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                {plan.price}
                <span className="text-lg text-gray-400">/{plan.period}</span>
              </div>
              <ul className="text-gray-300 mb-8 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white' : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;