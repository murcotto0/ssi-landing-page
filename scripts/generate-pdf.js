import PDFDocument from 'pdfkit';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function generatePDF() {
  const doc = new PDFDocument();
  const pdfPath = join(__dirname, '..', 'public', 'docs', 'SSI-TechnicalGuide.pdf');

  doc.pipe(fs.createWriteStream(pdfPath));

  // Title
  doc.fontSize(24).text('SSI技術ガイド：Web資産の真正性証明と信頼性向上', { align: 'center' });
  doc.moveDown(2);

  // Introduction
  doc.fontSize(16).text('はじめに：デジタル資産の真正性問題', { underline: true });
  doc.moveDown();
  doc.fontSize(12).text('現代のデジタル経済において、Webサイトやデジタルコンテンツの真正性は企業価値の重要な要素です。しかし、コンテンツの改ざん、フェイクニュース、知的財産の盗用といったリスクが日々増加しています。');
  doc.moveDown();
  doc.text('SSI（Self-Sovereign Identity）技術は、これらの課題を解決するための革新的なソリューションです。本ガイドでは、SSIの技術概要と導入による価値について詳しく解説します。');
  doc.moveDown(2);

  // What is SSI
  doc.fontSize(16).text('SSIとは？', { underline: true });
  doc.moveDown();
  doc.fontSize(12).text('SSIは、個人が自身のデジタルアイデンティティを自己主権的に管理できる技術です。ブロックチェーン技術を基盤とし、信頼できる第三者機関を介さずに真正性を証明できます。');
  doc.moveDown();
  doc.font('Helvetica-Bold').text('主な特徴：');
  doc.font('Helvetica').list(['分散型：中央集権的な管理を必要としない', '自己主権的：ユーザーが自身のデータをコントロール', '検証可能：第三者による真正性確認が可能']);
  doc.moveDown(2);

  // Application to Web Assets
  doc.fontSize(16).text('Web資産への適用', { underline: true });
  doc.moveDown();
  doc.fontSize(12).text('SSI技術をWeb資産（Webサイト、コンテンツ、デジタル証明書）に適用することで、以下の効果が得られます：');
  doc.moveDown();
  doc.list(['真正性証明：コンテンツの作成者と作成時刻を証明', '改ざん検知：コンテンツの変更を即座に検知', '信頼性向上：ユーザーの信頼を獲得', 'コンプライアンス対応：規制要件への対応']);
  doc.moveDown(2);

  // Value of Implementation
  doc.fontSize(16).text('導入の価値', { underline: true });
  doc.moveDown();

  doc.font('Helvetica-Bold').text('1. リスク低減');
  doc.font('Helvetica').text('コンテンツ改ざんによる法的リスクやブランドイメージの損失を防ぎます。平均85%のリスク低減効果が確認されています。');
  doc.moveDown();

  doc.font('Helvetica-Bold').text('2. 業務効率化');
  doc.font('Helvetica').text('手動での真正性確認作業を自動化。導入企業では平均2週間の業務効率化を実現しています。');
  doc.moveDown();

  doc.font('Helvetica-Bold').text('3. 競争優位性');
  doc.font('Helvetica').text('信頼できるデジタル資産を持つ企業は、市場での優位性を確立できます。50社以上の導入企業が競争力を向上させています。');
  doc.moveDown(2);

  // Technical Architecture
  doc.fontSize(16).text('技術アーキテクチャ', { underline: true });
  doc.moveDown();

  doc.font('Helvetica-Bold').text('主要コンポーネント');
  doc.font('Helvetica').list(['DID（Decentralized Identifier）：分散型識別子', 'Verifiable Credentials：検証可能な資格情報', 'SSI Toolkit：実装支援ツール']);
  doc.moveDown();

  doc.font('Helvetica-Bold').text('実装フロー');
  doc.font('Helvetica').list(['リスク分析：現在のWeb資産を評価', 'SSI設定：DIDと資格情報の設定', '統合：既存システムへの組み込み', '検証：真正性証明のテスト']);
  doc.moveDown(2);

  // Case Studies
  doc.fontSize(16).text('導入事例', { underline: true });
  doc.moveDown();
  doc.fontSize(12).text('事例1：大手金融機関');
  doc.text('Webサイトの真正性証明により、フィッシング攻撃を90%低減。顧客信頼度が向上し、取引量が15%増加。');
  doc.moveDown();
  doc.text('事例2：メディア企業');
  doc.text('ニュースコンテンツの真正性証明により、フェイクニュース対策として活用。読者エンゲージメントが25%向上。');
  doc.moveDown(2);

  // Conclusion
  doc.fontSize(16).text('まとめ：今すぐ導入を検討しませんか？', { underline: true });
  doc.moveDown();
  doc.fontSize(12).text('SSI技術の導入により、Web資産の真正性を証明し、信頼性を飛躍的に向上させることができます。無料診断から始めて、まずは現在のリスクを評価しましょう。');
  doc.moveDown();

  // CTA
  doc.font('Helvetica-Bold').fontSize(14).text('無料診断Auditorで今すぐリスク分析を開始！', { align: 'center' });
  doc.font('Helvetica').text('5分で完了するレポートで、導入の価値を実感してください。', { align: 'center' });
  doc.moveDown(2);

  // Footer
  doc.fontSize(10).text('© 2024 MetaMap. All rights reserved.', { align: 'center' });
  doc.text('この資料は参考情報であり、法的助言ではありません。', { align: 'center' });

  doc.end();
  console.log('PDF generated successfully at:', pdfPath);
}

generatePDF();