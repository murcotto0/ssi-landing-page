import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-fixed bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.65),_rgba(15,23,42,0.9))]" style={{ backgroundImage: "linear-gradient(210deg, rgba(15,23,42,0.95), rgba(15,23,42,0.75))" }}>
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.10),transparent_42%)]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-fixed bg-[linear-gradient(135deg,rgba(56,189,248,0.07),rgba(16,185,129,0.04))]" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-400/30">
          🛡️ AI時代のWeb資産標準
        </p>
        <div className="mt-5 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-sky-300">
            旧: Webの「登記」が <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">未来を変える</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            新: あなたのWebサイトは、
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300">
              登記されていない不動産と同じです。
            </span>
          </h1>
        </div>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
          Search Consoleにインデックスされても、Googleに「真贋」を確証させなければ価値はゼロ。
          SSL（HTTPS）の次に必要な信頼基盤として、SSI（Standard-SEC）が改ざん不可能なデジタル登記簿を実装します。
        </p>
        <p className="mt-4 text-sm text-slate-400 max-w-3xl mx-auto border-l-4 border-emerald-400 pl-4">
          旧: AI時代のWeb資産を守る。W3C準拠のデジタル登記システムで、検索エンジンと健全な対話を実現。
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02]">
            無料診断Auditorを実行
          </a>
          <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-cyan-400/50 px-6 py-3 text-base font-semibold text-cyan-300 hover:bg-cyan-400/20">
            SSI導入の価値を確認
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;