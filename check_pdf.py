from pypdf import PdfReader
r = PdfReader('site/certus-flex/pdf/User_Manual_CERTUS_FLEX_EN.pdf')
print(f'Total pages: {len(r.pages)}')
for i, page in enumerate(r.pages):
    text = page.extract_text()
    if text:
        print(f'Page {i+1}: {text[:80].strip()}')
