# MetricPress - Deploy en Netlify

Este paquete contiene todos los archivos necesarios para hacer un deploy exitoso del sitio web de MetricPress en Netlify.

## Contenido del paquete

- `index.html` - Página principal (HTML único empaquetado con todos los estilos inline)
- Imágenes y logos (PNG, JPG, SVG)
- Documentos legales (PDF)
- `netlify.toml` - Configuración de Netlify
- `robots.txt` - Configuración para motores de búsqueda

## Instrucciones de Deploy en Netlify

### Opción 1: Deploy por Drag & Drop (Más Rápido)

1. Ve a [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra toda la carpeta `netlify-deploy` (o el archivo ZIP descomprimido) a la zona de drop
3. Espera a que Netlify procese y publique el sitio
4. ¡Listo! Tu sitio estará en línea con una URL tipo `https://random-name.netlify.app`

### Opción 2: Deploy desde Git (Recomendado para producción)

1. Crea un repositorio en GitHub/GitLab/Bitbucket
2. Sube todos los archivos de esta carpeta al repositorio
3. Ve a [https://app.netlify.com](https://app.netlify.com) y haz login
4. Click en "Add new site" → "Import an existing project"
5. Conecta tu repositorio
6. Netlify detectará automáticamente la configuración desde `netlify.toml`
7. Click en "Deploy site"

### Opción 3: Deploy con Netlify CLI

```bash
# Instalar Netlify CLI (solo una vez)
npm install -g netlify-cli

# Desde la carpeta netlify-deploy
netlify login
netlify deploy --prod
```

## Configuración de Dominio Personalizado

Una vez desplegado el sitio:

1. Ve a "Site settings" → "Domain management"
2. Click en "Add custom domain"
3. Ingresa `www.metricpress.cl`
4. Sigue las instrucciones para configurar los DNS

## Características del Sitio

- ✅ HTML único empaquetado (1.72 MB)
- ✅ Todos los estilos inline (sin dependencias externas)
- ✅ Imágenes optimizadas en base64
- ✅ Video de YouTube embebido
- ✅ Formulario de contacto funcional
- ✅ Botones de compartir en redes sociales
- ✅ Meta tags para SEO y redes sociales
- ✅ Completamente responsivo
- ✅ Documentos legales en PDF

## Soporte

Para cualquier consulta:
- Email: contacto@metricpress.cl
- Teléfono: +56 9 8567 8296
- Web: www.metricpress.cl

---

**MetricPress** - Agencia Growth PR & Reputación Digital
