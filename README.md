# Colegio Episcopal Canterbury Villanovano - Sitio Web Oficial

Sitio web institucional modernizado para el Colegio Episcopal Canterbury Villanovano, ubicado en Villa Nueva, Guatemala. Desarrollado con Angular 21, Bootstrap 5 y Font Awesome 6.

## 🎯 Características Principales

### Diseño y UI/UX
- ✅ **Diseño Responsive Mobile-First** con Bootstrap 5
- ✅ **Navegación hamburguesa** para dispositivos móviles
- ✅ **Identidad Visual Institucional** con colores sobrios (azul oscuro #1a3a5c y granate #8b2635)
- ✅ **Font Awesome 6** para iconografía profesional
- ✅ **Animaciones suaves** con CSS y transiciones
- ✅ **Accesibilidad WCAG AA** con aria-labels y navegación por teclado

### Componentes Implementados

#### 1. Header (Navbar)
- Navegación fija responsive
- Menú colapsable para móviles
- Enlaces a todas las secciones
- Iconos Font Awesome
- **Ubicación:** `src/app/components/header/`

#### 2. Hero/Slider de Bienvenida
- Carousel de Bootstrap con 3 slides
- Transiciones automáticas cada 5 segundos
- Animaciones suaves de entrada
- Gradientes institucionales como fondo
- **Ubicación:** `src/app/components/hero/`

#### 3. Información Institucional
- Cards para Misión, Visión y Valores
- Sección "Acerca de" con características destacadas
- Efectos hover elegantes
- **Ubicación:** `src/app/components/institutional-info/`

#### 4. Niveles Educativos
- 4 Cards para cada nivel (Párvulos, Primaria, Básico, Diversificado)
- Colores distintivos por nivel
- Listado de características de cada nivel
- Call-to-action para inscripciones
- **Ubicación:** `src/app/components/educational-levels/`

#### 5. Noticias y Eventos
- Grid de 6 items con imágenes
- Badges que distinguen noticias de eventos
- Efectos hover con zoom en imágenes
- Sistema preparado para contenido dinámico
- **Ubicación:** `src/app/components/news-events/`

#### 6. Footer
- Información de contacto completa
- Enlaces rápidos
- Redes sociales con iconos
- Horarios de atención
- Botón "Scroll to Top"
- **Ubicación:** `src/app/components/footer/`

### Servicios

#### DataService
Servicio preparado para cargar datos dinámicos desde API o archivos JSON.
- **Ubicación:** `src/app/services/data.ts`
- Métodos para obtener noticias, eventos y niveles educativos
- Observable-based para integración con APIs

## 🎨 Paleta de Colores

```css
--primary-color: #1a3a5c;      /* Azul oscuro institucional */
--secondary-color: #8b2635;    /* Granate institucional */
--accent-color: #f8f9fa;       /* Blanco suave */
--text-dark: #2c3e50;          /* Texto principal */
--text-light: #6c757d;         /* Texto secundario */
--background-light: #f4f6f8;   /* Fondo alternativo */
```

## 🚀 Comandos Disponibles

### Desarrollo
```bash
npm start                # Inicia el servidor de desarrollo (http://localhost:4200)
npm run build           # Compila el proyecto para producción
npm run watch           # Compila en modo watch
npm test                # Ejecuta las pruebas unitarias
```

### Generar Componentes
```bash
ng generate component components/nombre-componente --skip-tests
ng generate service services/nombre-servicio --skip-tests
```

## 📦 Dependencias Instaladas

- **Angular 21.1.0** - Framework principal
- **Bootstrap 5** - Framework CSS responsive
- **Font Awesome Free** - Librería de iconos
- **RxJS 7.8.0** - Programación reactiva
- **TypeScript 5.9.2** - Lenguaje de desarrollo

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── header/              # Navbar responsive
│   │   ├── hero/                # Slider de bienvenida
│   │   ├── institutional-info/  # Misión, visión, valores
│   │   ├── educational-levels/  # Cards de niveles educativos
│   │   ├── news-events/         # Noticias y eventos
│   │   └── footer/              # Pie de página
│   ├── services/
│   │   └── data.ts              # Servicio de datos
│   ├── app.ts                   # Componente principal
│   ├── app.html                 # Template principal
│   ├── app.css                  # Estilos del componente
│   ├── app.config.ts            # Configuración de la app
│   └── app.routes.ts            # Configuración de rutas
├── styles.css                   # Estilos globales
├── index.html                   # HTML principal
└── main.ts                      # Punto de entrada
```

## ✨ Mejores Prácticas Implementadas

1. **Standalone Components** - Todos los componentes son standalone
2. **Signals** - Uso de Angular Signals para state management
3. **Control Flow Syntax** - Uso de @for, @if en templates
4. **Lazy Loading Ready** - Estructura preparada para lazy loading
5. **Accesibilidad** - ARIA labels, navegación por teclado, contrastes WCAG AA
6. **Performance** - Optimización de imágenes y estilos CSS
7. **SEO Friendly** - Meta tags descriptivos en index.html

## 🔧 Configuración para Producción

### Optimización de Build
```bash
ng build --configuration production
```

### Variables de Entorno
Para configurar diferentes ambientes (desarrollo, producción):
1. Crear archivos en `src/environments/`
2. Configurar en `angular.json`

### Deploy
El proyecto puede ser desplegado en:
- **Netlify** - Deploy automático desde Git
- **Vercel** - Integración continua
- **Firebase Hosting** - Hosting de Google
- **GitHub Pages** - Hosting gratuito

## 🎯 Próximos Pasos Recomendados

1. **Integración con Backend**
   - Conectar el DataService a una API REST
   - Implementar sistema de gestión de contenidos (CMS)

2. **Funcionalidades Adicionales**
   - Formulario de contacto funcional
   - Sistema de inscripciones en línea
   - Galería de fotos/videos
   - Calendarios de eventos interactivos
   - Portal de padres/estudiantes

3. **Optimizaciones**
   - Implementar lazy loading de rutas
   - Añadir Service Workers para PWA
   - Implementar i18n para múltiples idiomas
   - Añadir Google Analytics

4. **Testing**
   - Implementar tests unitarios con Vitest
   - Tests end-to-end con Cypress

## 📱 Soporte de Navegadores

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)
- Navegadores móviles iOS y Android

## 🤝 Contribución

Para contribuir al proyecto:
1. Crear una rama feature
2. Realizar cambios con commits descriptivos
3. Asegurar que el código siga los estándares
4. Crear Pull Request

## 📄 Licencia

© 2026 Colegio Episcopal Canterbury Villanovano. Todos los derechos reservados.

## 📞 Contacto

- **Dirección:** Villa Nueva, Guatemala
- **Teléfono:** +(502) 1234-5678
- **Email:** info@colegiocanterburyguatemala.com
- **Horario:** Lunes a Viernes: 7:00 AM - 5:00 PM

---

**Desarrollado con ❤️ para la educación de calidad**
