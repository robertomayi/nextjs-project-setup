# Landing Page MÉTODO BEATO - Instrucciones de Instalación

## 📋 Requisitos Previos
- Node.js 18+ 
- npm o yarn

## 🚀 Instalación

1. **Descomprimir el archivo**
   ```bash
   unzip metodo-beato-landing.zip
   cd metodo-beato-landing/
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - Ir a: http://localhost:3000

## 🔧 Configuración Adicional

### Pixels de Seguimiento
Para activar Facebook Pixel y TikTok Pixel, edita el archivo `src/app/layout.tsx`:

```javascript
// Reemplaza estos valores con tus IDs reales
const FACEBOOK_PIXEL_ID = "TU_FACEBOOK_PIXEL_ID";
const TIKTOK_PIXEL_ID = "TU_TIKTOK_PIXEL_ID";
```

### WhatsApp y Calendly
En `src/components/landing/Header.tsx` y otros componentes, actualiza:

```javascript
// WhatsApp directo
const WHATSAPP_NUMBER = "1234567890"; // Tu número de WhatsApp

// Calendly
const CALENDLY_URL = "https://calendly.com/tu-usuario/consulta";
```

## 📱 Funcionalidades Incluidas

✅ **Header impactante** con CTA principal
✅ **Testimonios reales** con fotos antes/después  
✅ **Planes de precios** (Básico $100, Intermedio $185, Experto $270)
✅ **Formulario de captura** de leads
✅ **Oferta especial** de $10 USD (tripwire)
✅ **Footer** con redes sociales
✅ **Diseño responsive** para móvil
✅ **Integración** Facebook Pixel y TikTok Pixel
✅ **Botones WhatsApp** directo

## 🎨 Personalización

### Colores
Los colores principales están en Tailwind CSS:
- Rojo: `bg-red-600`, `text-red-600`
- Amarillo/Dorado: `bg-yellow-500`, `text-yellow-500`
- Negro: `bg-black`, `text-black`

### Contenido
Edita los textos en cada componente:
- `src/components/landing/Header.tsx` - Encabezado principal
- `src/components/landing/Testimonials.tsx` - Testimonios
- `src/components/landing/Plans.tsx` - Planes de precios
- `src/components/landing/LeadCaptureForm.tsx` - Formulario
- `src/components/landing/SpecialOffer.tsx` - Oferta especial

## 🚀 Despliegue

### Vercel (Recomendado)
1. Sube el código a GitHub
2. Conecta tu repositorio en Vercel.com
3. Despliega automáticamente

### Netlify
1. Ejecuta `npm run build`
2. Sube la carpeta `out/` a Netlify

## 📞 Soporte
Para dudas sobre la implementación, contacta al desarrollador.

---
**MÉTODO BEATO** - Transformación Fitness Premium 💪
