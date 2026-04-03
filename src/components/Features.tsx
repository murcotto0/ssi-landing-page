import React from 'react';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          なぜSSIがB2Bで必須なのか
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-slate-300 mb-12 max-w-3xl mx-auto"
        >
          信頼と安全性が競争優位になる時代、SSIは「真贋判定」「AI学習拒否」「信頼ドキュメント公証」などを一気通貫で自動化し、エンタープライズの安心運用を実現します。
        </motion.p>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-slate-800/40 backdrop-blur-sm p-7 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-200 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;