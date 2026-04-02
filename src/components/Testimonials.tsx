import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: '田中太郎',
      role: 'Web開発者',
      company: 'TechCorp',
      content: 'SSIを導入してから、サイトの検索順位が20%向上。AIクローラーの誤学習も防げています。',
      avatar: '👨‍💻'
    },
    {
      name: '佐藤花子',
      role: 'コンテンツクリエイター',
      company: 'Creative Studio',
      content: 'デジタル資産の保護がこれほど簡単になるとは思いませんでした。自動化された信頼証明システムは革命的です。',
      avatar: '👩‍🎨'
    },
    {
      name: '鈴木次郎',
      role: 'CTO',
      company: 'Enterprise Inc',
      content: '年間数百万円のSEOコンサル費用を大幅削減。W3C準拠という信頼性もエンタープライズ向けに最適です。',
      avatar: '👨‍💼'
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