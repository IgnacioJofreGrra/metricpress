import os
import re
import base64
from pathlib import Path

# Rutas
dist_dir = Path("/home/ubuntu/metricpress-website/dist/public")
output_file = Path("/home/ubuntu/metricpress-website/metricpress-single.html")

# Leer el HTML principal
html_file = dist_dir / "index.html"
with open(html_file, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Función para convertir imagen a base64
def image_to_base64(image_path):
    with open(image_path, 'rb') as img_file:
        return base64.b64encode(img_file.read()).decode('utf-8')

# Función para obtener el tipo MIME
def get_mime_type(filename):
    ext = filename.lower().split('.')[-1]
    mime_types = {
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'gif': 'image/gif',
        'svg': 'image/svg+xml',
        'webp': 'image/webp'
    }
    return mime_types.get(ext, 'image/png')

# Inline CSS
css_pattern = r'<link[^>]*href="([^"]*\.css)"[^>]*>'
css_matches = re.findall(css_pattern, html_content)

for css_path in css_matches:
    css_file = dist_dir / css_path.lstrip('/')
    if css_file.exists():
        with open(css_file, 'r', encoding='utf-8') as f:
            css_content = f.read()
        
        # Reemplazar el link con style inline
        link_tag = re.search(r'<link[^>]*href="' + re.escape(css_path) + r'"[^>]*>', html_content)
        if link_tag:
            html_content = html_content.replace(link_tag.group(0), f'<style>{css_content}</style>')

# Inline JavaScript
js_pattern = r'<script[^>]*src="([^"]*\.js)"[^>]*></script>'
js_matches = re.findall(js_pattern, html_content)

for js_path in js_matches:
    js_file = dist_dir / js_path.lstrip('/')
    if js_file.exists():
        with open(js_file, 'r', encoding='utf-8') as f:
            js_content = f.read()
        
        # Reemplazar el script src con script inline
        script_tag = re.search(r'<script[^>]*src="' + re.escape(js_path) + r'"[^>]*></script>', html_content)
        if script_tag:
            html_content = html_content.replace(script_tag.group(0), f'<script type="module">{js_content}</script>')

# Convertir imágenes a base64
image_extensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']
for img_file in dist_dir.rglob('*'):
    if img_file.suffix.lower() in image_extensions:
        rel_path = '/' + str(img_file.relative_to(dist_dir)).replace('\\', '/')
        
        try:
            mime_type = get_mime_type(img_file.name)
            base64_data = image_to_base64(img_file)
            data_uri = f'data:{mime_type};base64,{base64_data}'
            
            # Reemplazar todas las referencias a esta imagen
            html_content = html_content.replace(f'src="{rel_path}"', f'src="{data_uri}"')
            html_content = html_content.replace(f"src='{rel_path}'", f"src='{data_uri}'")
            html_content = html_content.replace(f'href="{rel_path}"', f'href="{data_uri}"')
            
            print(f"Converted: {rel_path}")
        except Exception as e:
            print(f"Error converting {rel_path}: {e}")

# Escribir el HTML final
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"\n✓ Single HTML file created: {output_file}")
print(f"✓ File size: {output_file.stat().st_size / 1024 / 1024:.2f} MB")
