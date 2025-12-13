# Molino32 - E-commerce de Talleres de Cocina

Sitio web moderno desarrollado con React + Vite para Molino32, plataforma de talleres de pan artesanal y cocina.

## 🚀 Tecnologías

- **React 19** - Librería UI
- **Vite 7** - Build tool ultra-rápido
- **CSS Modules** - Estilos modulares y escalables

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `dist/`

## 📤 Despliegue en Hostinger

1. Ejecuta el build: `npm run build`
2. Sube el contenido de la carpeta `dist/` a tu hosting vía FTP/cPanel
3. Apunta tu dominio a esa carpeta

## 🖼️ Imágenes Requeridas

Coloca las siguientes imágenes en la carpeta `public/`:

### Hero Section
- `public/hero-image.jpg` - Imagen de manos amasando pan

### Talleres
- `public/talleres/masa-madre.jpg`
- `public/talleres/pan-muerto.jpg`
- `public/talleres/raviolis.jpg`

### Aprende Sin Miedo
- `public/aprende-talleres.jpg` - Imagen de personas en taller

### Sobre Mí
- `public/sobremi-pau.jpg` - Foto de Pau en cocina

### La Mesa (Blog)
- `public/blog/masa-madre.jpg`
- `public/blog/pan-avena.jpg`

## 📱 Responsive

El sitio es completamente responsive y se adapta a:
- Desktop (1280px+)
- Tablet (768px - 1279px)
- Mobile (<768px)

## 🎨 Componentes

- **Navbar** - Navegación fija con logo centrado
- **Hero** - Sección principal con imagen de fondo
- **Talleres** - Grid de tarjetas de talleres
- **AprendeSinMiedo** - Split layout 50/50
- **SobreMi** - Split layout invertido
- **LaMesa** - Blog con tarjetas horizontales
- **CTA** - Call to action
- **Footer** - Pie de página con redes sociales

## 📄 Licencia

Proyecto privado para Molino32
