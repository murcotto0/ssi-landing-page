import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

FONT_PATHS = [
    Path('C:/Windows/Fonts/meiryo.ttc'),
    Path('C:/Windows/Fonts/msgothic.ttc'),
    Path('C:/Windows/Fonts/YuGothR.ttc'),
    Path('C:/Windows/Fonts/YuGothM.ttc'),
    Path('C:/Windows/Fonts/YuGothB.ttc'),
]

OUTPUT_DIR = Path(__file__).resolve().parent.parent / 'public' / 'docs'
PDF_PATH = OUTPUT_DIR / 'SSI-TechnicalGuide.pdf'
PAGE_SIZE = (2480, 3508)
BACKGROUND = (15, 23, 42)
TEXT_COLOR = (226, 232, 240)
ACCENT = (34, 211, 238)
HIGHLIGHT = (16, 185, 129)


def find_font():
    for font_path in FONT_PATHS:
        if font_path.exists():
            return font_path
    return None


def build_fonts(font_path):
    default_font = ImageFont.load_default()
    return {
        'title': ImageFont.truetype(font_path, 72) if font_path else default_font,
        'subtitle': ImageFont.truetype(font_path, 42) if font_path else default_font,
        'heading': ImageFont.truetype(font_path, 38) if font_path else default_font,
        'section': ImageFont.truetype(font_path, 34) if font_path else default_font,
        'body': ImageFont.truetype(font_path, 26) if font_path else default_font,
        'small': ImageFont.truetype(font_path, 22) if font_path else default_font,
    }


def create_page_one(fonts):
    img = Image.new('RGB', PAGE_SIZE, BACKGROUND)
    draw = ImageDraw.Draw(img)
    padding = 120

    draw.rectangle([padding, padding, PAGE_SIZE[0] - padding, padding + 360], fill=(10, 25, 47))
    draw.text((padding + 30, padding + 40), 'SSI技術ガイド：Web資産の真正性証明と信頼性向上', fill=TEXT_COLOR, font=fonts['title'])
    draw.text((padding + 30, padding + 140), '無料診断Auditorと導入価値を、読みやすい技術資料で確認できます。', fill=ACCENT, font=fonts['subtitle'])
    draw.text((padding + 30, padding + 210), '5分で完了するリスク分析レポートで、導入判断をサポートします。', fill=HIGHLIGHT, font=fonts['body'])

    body = [
        '■ はじめに：デジタル資産の真正性問題',
        '現代のWebでは、改ざん、偽造、AIによる無断利用が急増しています。',
        'SSIはWeb資産の信頼性を技術的に担保し、導入意思決定を迅速化します。',
        '',
        '■ SSIとは？',
        '自己主権型デジタルIDをベースに、Web資産の真贋を検証できる仕組みです。',
        '主な特徴：分散型、自己主権、検証可能。'
    ]

    y = padding + 460
    for line in body:
        if line.startswith('■'):
            draw.text((padding, y), line, fill=ACCENT, font=fonts['heading'])
            y += 70
        else:
            draw.text((padding + 30, y), line, fill=TEXT_COLOR, font=fonts['body'])
            y += 55

    y += 20
    cards = [
        ('リスク低減', '改ざんと偽造を防ぎ、85%以上の信頼性向上を狙います。'),
        ('業務効率化', '監査と真正性チェックを自動化し、導入期間を平均2週間に短縮。'),
        ('競争優位性', '信頼性を証明したWeb資産で市場での差別化を実現。'),
    ]
    card_width = 540
    for i, (heading, text) in enumerate(cards):
        x = padding + i * (card_width + 40)
        draw.rectangle([x, y, x + card_width, y + 240], fill=(15, 35, 59))
        draw.text((x + 30, y + 30), heading, fill=HIGHLIGHT, font=fonts['section'])
        draw.text((x + 30, y + 110), text, fill=TEXT_COLOR, font=fonts['body'])

    return img


def create_page_two(fonts):
    img = Image.new('RGB', PAGE_SIZE, BACKGROUND)
    draw = ImageDraw.Draw(img)
    padding = 120

    draw.text((padding, padding), '■ 技術アーキテクチャ', fill=ACCENT, font=fonts['heading'])
    draw.text((padding, padding + 80), 'DID / Verifiable Credentials / SSI Toolkitの三層構造で、', fill=TEXT_COLOR, font=fonts['body'])
    draw.text((padding, padding + 140), 'Web資産の真正性証明と検証を同時に実現します。', fill=TEXT_COLOR, font=fonts['body'])

    y = padding + 240
    steps = [
        '1. リスク分析：現状のWeb資産を評価',
        '2. SSI設定：DIDと資格情報を設定',
        '3. 統合：既存システムへ組み込み',
        '4. 検証：真正性証明をテスト'
    ]
    for step in steps:
        draw.rectangle([padding, y, padding + 220, y + 220], fill=(10, 25, 47))
        draw.text((padding + 30, y + 30), step, fill=ACCENT, font=fonts['body'])
        y += 280

    draw.text((padding, y), '■ 導入事例', fill=ACCENT, font=fonts['heading'])
    draw.text((padding, y + 80), '・大手金融機関：フィッシング攻撃を90%低減、取引量15%増', fill=TEXT_COLOR, font=fonts['body'])
    draw.text((padding, y + 140), '・メディア企業：読者エンゲージメント25%向上、信頼性を可視化', fill=TEXT_COLOR, font=fonts['body'])

    footer_y = PAGE_SIZE[1] - 240
    draw.text((padding, footer_y), '無料診断Auditorで今すぐリスク分析を開始！', fill=HIGHLIGHT, font=fonts['section'])
    draw.text((padding, footer_y + 80), '5分で完了するレポートで、導入の価値を実感してください。', fill=TEXT_COLOR, font=fonts['body'])
    draw.text((padding, footer_y + 160), '© 2024 MetaMap. この資料は参考情報であり、法的助言ではありません。', fill=(148, 163, 184), font=fonts['small'])

    return img


def generate_pdf():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    font_path = find_font()
    if font_path is None:
        raise FileNotFoundError('Japanese font not found in Windows Fonts directory.')

    fonts = build_fonts(font_path)
    page1 = create_page_one(fonts)
    page2 = create_page_two(fonts)
    page1.save(PDF_PATH, 'PDF', resolution=300, save_all=True, append_images=[page2])
    print('PDF generated successfully at:', PDF_PATH)


if __name__ == '__main__':
    generate_pdf()
