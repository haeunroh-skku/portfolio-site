from PIL import Image
import sys

src = 'assets/images/logo-circle.png'
try:
    im = Image.open(src).convert('RGBA')
except Exception as e:
    print('ERROR: cannot open', src, e)
    sys.exit(2)

# Ensure square by padding transparent if needed
w,h = im.size
if w != h:
    m = max(w,h)
    new = Image.new('RGBA', (m,m), (255,255,255,0))
    new.paste(im, ((m-w)//2, (m-h)//2), im)
    im = new

sizes = [16,32,48,64,128,180]
for s in [16,32]:
    out = im.resize((s,s), Image.LANCZOS)
    out.save(f'assets/images/logo-icon-{s}.png')
    print('Wrote', f'assets/images/logo-icon-{s}.png')

# create favicon.ico with multiple sizes
ico_sizes = [(16,16),(32,32),(48,48)]
icons = [im.resize(sz, Image.LANCZOS) for sz in [16,32,48]]
icons[0].save('assets/images/favicon.ico', format='ICO', sizes=[(16,16),(32,32),(48,48)])
print('Wrote assets/images/favicon.ico')

# optional apple touch icon
im.resize((180,180), Image.LANCZOS).save('assets/images/apple-touch-icon.png')
print('Wrote assets/images/apple-touch-icon.png')
