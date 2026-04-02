import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SSI Toolkit</h3>
            <p className="text-gray-400 text-sm">
              Web資産のデジタル登記とAI防衛の標準装備
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">製品</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-cyan-400">機能</a></li>
              <li><a href="#" className="hover:text-cyan-400">料金</a></li>
              <li><a href="#" className="hover:text-cyan-400">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">サポート</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-cyan-400">ドキュメント</a></li>
              <li><a href="#" className="hover:text-cyan-400">ヘルプ</a></li>
              <li><a href="#" className="hover:text-cyan-400">コミュニティ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">会社</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-cyan-400">ブログ</a></li>
              <li><a href="#" className="hover:text-cyan-400">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-cyan-400">プライバシー</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 SSI Toolkit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;