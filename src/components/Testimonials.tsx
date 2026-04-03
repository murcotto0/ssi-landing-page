import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'metamap プロジェクト',
      role: '運営チーム',
      company: 'metamap.jp',
      content: 'SSI導入後、オランダからのアクセスが急増。Googleが「身元」を認識し、インデックス問題が解決。Web資産が企業価値として可視化されました。',
      avatar: '🌍'
    },
    {
      name: '西村達也',
      role: 'セキュリティアーキテクト',
      company: 'GlobalTech',
      content: '改ざん防止と監査レポートが統合され、コンプライアンス監査が一気に楽になりました。',
      avatar: '🛡️'
    },
    {
      name: '浅野舞',
      role: 'CTO',
      company: 'Enterprise Cloud',
      content: 'AI学習拒否を自動化できる仕組みはB2Bでの説得力が高く、提案が通りやすくなりました。',
      avatar: '⚙️'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          ユーザーの声
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role} @ {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;