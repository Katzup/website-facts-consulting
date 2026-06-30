"""Knock out the near-black background of the FACTS logo to transparency.
Writes a *_transparent.png preview; does not overwrite the source."""
import sys
from PIL import Image

src = sys.argv[1]
dst = sys.argv[2]
threshold = int(sys.argv[3]) if len(sys.argv) > 3 else 40

img = Image.open(src).convert("RGBA")
px = img.load()
w, h = img.size
changed = 0
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        # near-black AND currently opaque -> make transparent
        if a > 0 and r <= threshold and g <= threshold and b <= threshold:
            px[x, y] = (r, g, b, 0)
            changed += 1
img.save(dst)
print(f"{src} -> {dst}: {changed} px cleared (threshold={threshold}), size={w}x{h}")
