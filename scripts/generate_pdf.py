from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.lib.units import inch
import os

def create_pdf():
    os.makedirs("public/docs", exist_ok=True)
    doc = SimpleDocTemplate("public/docs/SSI-TechnicalGuide.pdf", pagesize=letter)
    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'Title',
        parent=styles['Title'],
        fontSize=24,
        spaceAfter=30,
        alignment=1  # Center
    )

    heading_style = ParagraphStyle(
        'Heading',
        parent=styles['Heading1'],
        fontSize=16,
        spaceAfter=20,
        textColor='#2c3e50'
    )

    normal_style = styles['Normal']
    normal_style.fontSize = 12
    normal_style.leading = 16

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=normal_style,
        leftIndent=20,
        bulletIndent=10
    )

    story = []

    # Title
    story.append(Paragraph("SSI技術ガイド：Web資産の真正性証明と信頼性向上", title_style))
    story.append(Spacer(1, 12))

    # Introduction
    story.append(Paragraph("はじめに：デジタル資産の真正性問題", heading_style))
    story.append(Paragraph("現代のデジタル経済において、Webサイトやデジタルコンテンツの真正性は企業価値の重要な要素です。しかし、コンテンツの改ざん、フェイクニュース、知的財産の盗用といったリスクが日々増加しています。", normal_style))
    story.append(Paragraph("SSI（Self-Sovereign Identity）技術は、これらの課題を解決するための革新的なソリューションです。本ガイドでは、SSIの技術概要と導入による価値について詳しく解説します。", normal_style))
    story.append(Spacer(1, 12))

    # What is SSI
    story.append(Paragraph("SSIとは？", heading_style))
    story.append(Paragraph("SSIは、個人が自身のデジタルアイデンティティを自己主権的に管理できる技術です。ブロックチェーン技術を基盤とし、信頼できる第三者機関を介さずに真正性を証明できます。", normal_style))
    story.append(Spacer(1, 6))

    # Features
    story.append(Paragraph("<b>主な特徴：</b>", normal_style))
    features = [
        "分散型：中央集権的な管理を必要としない",
        "自己主権的：ユーザーが自身のデータをコントロール",
        "検証可能：第三者による真正性確認が可能"
    ]
    for feature in features:
        story.append(Paragraph(f"• {feature}", bullet_style))
    story.append(Spacer(1, 12))

    # Application
    story.append(Paragraph("Web資産への適用", heading_style))
    story.append(Paragraph("SSI技術をWeb資産（Webサイト、コンテンツ、デジタル証明書）に適用することで、以下の効果が得られます：", normal_style))
    applications = [
        "<b>真正性証明：</b>コンテンツの作成者と作成時刻を証明",
        "<b>改ざん検知：</b>コンテンツの変更を即座に検知",
        "<b>信頼性向上：</b>ユーザーの信頼を獲得",
        "<b>コンプライアンス対応：</b>規制要件への対応"
    ]
    for app in applications:
        story.append(Paragraph(f"• {app}", bullet_style))
    story.append(Spacer(1, 12))

    # Value
    story.append(Paragraph("導入の価値", heading_style))

    story.append(Paragraph("<b>1. リスク低減</b>", normal_style))
    story.append(Paragraph("コンテンツ改ざんによる法的リスクやブランドイメージの損失を防ぎます。平均85%のリスク低減効果が確認されています。", normal_style))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>2. 業務効率化</b>", normal_style))
    story.append(Paragraph("手動での真正性確認作業を自動化。導入企業では平均2週間の業務効率化を実現しています。", normal_style))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>3. 競争優位性</b>", normal_style))
    story.append(Paragraph("信頼できるデジタル資産を持つ企業は、市場での優位性を確立できます。50社以上の導入企業が競争力を向上させています。", normal_style))
    story.append(Spacer(1, 12))

    # Architecture
    story.append(Paragraph("技術アーキテクチャ", heading_style))

    story.append(Paragraph("<b>主要コンポーネント</b>", normal_style))
    components = [
        "<b>DID（Decentralized Identifier）：</b>分散型識別子",
        "<b>Verifiable Credentials：</b>検証可能な資格情報",
        "<b>SSI Toolkit：</b>実装支援ツール"
    ]
    for comp in components:
        story.append(Paragraph(f"• {comp}", bullet_style))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>実装フロー</b>", normal_style))
    flow = [
        "リスク分析：現在のWeb資産を評価",
        "SSI設定：DIDと資格情報の設定",
        "統合：既存システムへの組み込み",
        "検証：真正性証明のテスト"
    ]
    for i, step in enumerate(flow, 1):
        story.append(Paragraph(f"{i}. {step}", bullet_style))
    story.append(Spacer(1, 12))

    # Case Studies
    story.append(Paragraph("導入事例", heading_style))
    story.append(Paragraph("<b>事例1：大手金融機関</b><br/>Webサイトの真正性証明により、フィッシング攻撃を90%低減。顧客信頼度が向上し、取引量が15%増加。", normal_style))
    story.append(Spacer(1, 6))
    story.append(Paragraph("<b>事例2：メディア企業</b><br/>ニュースコンテンツの真正性証明により、フェイクニュース対策として活用。読者エンゲージメントが25%向上。", normal_style))
    story.append(Spacer(1, 12))

    # Conclusion
    story.append(Paragraph("まとめ：今すぐ導入を検討しませんか？", heading_style))
    story.append(Paragraph("SSI技術の導入により、Web資産の真正性を証明し、信頼性を飛躍的に向上させることができます。無料診断から始めて、まずは現在のリスクを評価しましょう。", normal_style))
    story.append(Spacer(1, 12))

    # CTA
    cta_style = ParagraphStyle(
        'CTA',
        parent=normal_style,
        fontSize=14,
        alignment=1,
        textColor='#3498db',
        fontName='Helvetica-Bold'
    )
    story.append(Paragraph("無料診断Auditorで今すぐリスク分析を開始！<br/>5分で完了するレポートで、導入の価値を実感してください。", cta_style))
    story.append(Spacer(1, 24))

    # Footer
    footer_style = ParagraphStyle(
        'Footer',
        parent=normal_style,
        fontSize=10,
        alignment=1,
        textColor='#7f8c8d'
    )
    story.append(Paragraph("© 2024 MetaMap. All rights reserved.<br/>この資料は参考情報であり、法的助言ではありません。", footer_style))

    doc.build(story)
    print("PDF created successfully")

if __name__ == "__main__":
    create_pdf()