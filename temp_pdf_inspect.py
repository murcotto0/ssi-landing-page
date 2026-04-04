from pathlib import Path
pdf = Path('public/docs/SSI-TechnicalGuide.pdf')
print('exists', pdf.exists())
if pdf.exists():
    data = pdf.read_bytes()
    print('size', len(data))
    print('magic', data[:8])
    print('/Type /Page', b'/Type /Page' in data)
    print('/Filter /FlateDecode', b'/Filter /FlateDecode' in data)
    print('/Font', b'/Font' in data)
