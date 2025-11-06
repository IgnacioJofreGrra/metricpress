# MetricPress - Deploy en Vercel

Este paquete contiene todo lo necesario para desplegar el sitio web de MetricPress en Vercel.

## 📋 Contenido del Paquete

- **src/** - Código fuente de la aplicación React
- **public/** - Archivos estáticos (imágenes, PDFs, favicon)
- **package.json** - Dependencias del proyecto
- **vite.config.ts** - Configuración de Vite
- **vercel.json** - Configuración específica de Vercel
- **tsconfig.json** - Configuración de TypeScript
- **tailwind.config.ts** - Configuración de Tailwind CSS

## 🚀 Métodos de Deploy

### Opción 1: Deploy desde Git (Recomendado)

1. **Crear repositorio en GitHub/GitLab/Bitbucket:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - MetricPress website"
   git remote add origin <tu-repositorio-url>
   git push -u origin main
   ```

2. **Conectar con Vercel:**
   - Ve a https://vercel.com/new
   - Importa tu repositorio
   - Vercel detectará automáticamente que es un proyecto Vite
   - Haz clic en "Deploy"

3. **Configuración automática:**
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

### Opción 2: Deploy con Vercel CLI

1. **Instalar Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login en Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy (desde esta carpeta):**
   ```bash
   # Deploy de prueba
   vercel
   
   # Deploy a producción
   vercel --prod
   ```

### Opción 3: Drag & Drop (Más Simple)

1. **Construir el proyecto localmente:**
   ```bash
   pnpm install
   pnpm build
   ```

2. **Subir carpeta dist:**
   - Ve a https://vercel.com/new
   - Arrastra la carpeta `dist` generada
   - Vercel desplegará automáticamente

## ⚙️ Configuración del Dominio

Una vez desplegado:

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Domains
3. Agrega `www.metricpress.cl` y `metricpress.cl`
4. Sigue las instrucciones para configurar los DNS

### Configuración DNS Recomendada:

```
Tipo: A
Nombre: @
Valor: 76.76.21.21

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

## 🔧 Variables de Entorno

Este proyecto no requiere variables de entorno adicionales. Todas las configuraciones están incluidas en el código.

## 📱 Características Incluidas

✅ Diseño responsivo optimizado
✅ SEO con meta tags completos (Open Graph, Twitter)
✅ Favicon personalizado
✅ Video de YouTube integrado
✅ Tabla comparativa Stack Tradicional vs MetricPress
✅ Formulario de contacto
✅ Botones de compartir en redes sociales
✅ Documentos legales (PDF)
✅ FAQ - Preguntas Frecuentes

## 🌐 URLs Importantes

- **Sitio web:** www.metricpress.cl
- **Email:** contacto@metricpress.cl
- **Teléfono:** +56 9 8567 8296

## 📊 Después del Deploy

1. **Verificar funcionamiento:**
   - Todas las secciones cargan correctamente
   - Imágenes se muestran sin errores
   - PDFs se descargan correctamente
   - Video de YouTube reproduce
   - Formulario de contacto funciona

2. **Optimizaciones automáticas de Vercel:**
   - Compresión Brotli/Gzip
   - CDN global
   - SSL/HTTPS automático
   - Caché optimizado

## 🆘 Soporte

Si encuentras algún problema durante el deploy:

1. Revisa los logs en Vercel Dashboard
2. Verifica que todas las dependencias se instalaron correctamente
3. Asegúrate de usar Node.js 18+ y pnpm

## 📝 Notas Técnicas

- **Framework:** React 19 + Vite
- **Estilos:** Tailwind CSS 4
- **Componentes:** shadcn/ui
- **Routing:** Wouter
- **Build time:** ~30-60 segundos
- **Tamaño del bundle:** ~500KB (optimizado)

---

**¡Listo para producción!** 🚀
