import os
import json

BASE_DIR = "srcs/art"
VALID_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.gif'}

art_data = {}

for root, dirs, files in os.walk(BASE_DIR):
    for file in files:
        ext = os.path.splitext(file)[1].lower()
        if ext in VALID_EXTENSIONS:
            full_path = os.path.join(root, file)
            rel_path = "/" + full_path.replace("\\", "/")
            parts = rel_path.split("/")
            try:
                year = parts[3]  # /srcs/art/2024/whatever → index 3 is year
            except IndexError:
                continue
            art_data.setdefault(year, []).append(rel_path)

print("const artData = " + json.dumps(art_data, indent=2) + ";")

