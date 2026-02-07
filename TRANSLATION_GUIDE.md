# Guía del Sistema de Traducción Multiidioma

## 🌍 Idiomas Disponibles

El sitio web ahora soporta los siguientes idiomas:

- 🇪🇸 **Español** (es) - Idioma predeterminado
- 🇺🇸 **English** (en)
- 🇫🇷 **Français** (fr)
- 🇵🇹 **Português** (pt)
- 🇩🇪 **Deutsch** (de)

## 📋 Características Implementadas

### 1. **Servicio de Traducción** (`translation.service.ts`)
- Gestión centralizada de todas las traducciones
- Sistema de claves estructuradas (ej: `'nav.home'`, `'hero.title'`)
- Detección automática del idioma del navegador
- Persistencia del idioma seleccionado en `localStorage`
- Método `t()` para acceso rápido a traducciones

### 2. **Selector de Idioma en el Header**
- Dropdown elegante con banderas de países
- Visible en todas las páginas
- Diseño responsivo (adaptado para móvil y desktop)
- Cambio instantáneo de idioma sin recargar página

### 3. **Componentes Traducidos**
Todos los componentes principales están completamente traducidos:
- ✅ **Header** (navegación)
- ✅ **Hero** (sección principal)
- ✅ **Institutional Info** (misión, visión, valores)
- ✅ **Educational Levels** (niveles educativos)
- ✅ **News & Events** (noticias y eventos)
- ✅ **Footer** (pie de página)

## 🚀 Cómo Usar el Sistema de Traducción

### Para Usuarios
1. Haz clic en el selector de idioma en la barra de navegación (icono de globo 🌐)
2. Selecciona el idioma deseado
3. Todo el contenido se actualizará automáticamente
4. El idioma seleccionado se recordará en tu próxima visita

### Para Desarrolladores

#### Agregar una Nueva Traducción

1. **Abre** `src/app/services/translation.service.ts`

2. **Agrega la clave** en cada diccionario de idioma:

```typescript
// En translations['es']
hero: {
  newKey: 'Texto en español'
}

// En translations['en']
hero: {
  newKey: 'Text in English'
}

// Repite para 'fr', 'pt', 'de'
```

3. **Usa la traducción** en tu componente HTML:

```html
<h1>{{ translationService.t('hero.newKey') }}</h1>
```

#### Agregar un Nuevo Componente con Traducciones

1. **Importa el servicio** en tu componente TypeScript:

```typescript
import { TranslationService } from '../../services/translation.service';

export class MiComponente {
  constructor(public translationService: TranslationService) {}
}
```

2. **Usa las traducciones** en tu template HTML:

```html
<p>{{ translationService.t('miSeccion.miTexto') }}</p>
```

#### Agregar un Nuevo Idioma

1. **Actualiza el tipo** `Language` en `translation.service.ts`:

```typescript
export type Language = 'es' | 'en' | 'fr' | 'pt' | 'de' | 'it'; // Agregamos italiano
```

2. **Agrega la opción** al array `availableLanguages`:

```typescript
availableLanguages: LanguageOption[] = [
  // ... idiomas existentes
  { code: 'it', name: 'Italiano', flag: '🇮🇹' }
];
```

3. **Crea el diccionario** de traducciones:

```typescript
this.translations['it'] = {
  nav: {
    home: 'Home',
    about: 'Chi Siamo',
    // ... resto de traducciones
  }
};
```

## 📁 Estructura de Claves de Traducción

Las traducciones están organizadas por secciones:

```
nav.*              → Navegación del header
hero.*             → Sección hero/principal
institutional.*    → Información institucional
educationalLevels.* → Niveles educativos
news.*             → Noticias y eventos
footer.*           → Pie de página
```

## 🎨 Personalización del Selector de Idioma

Los estilos del selector se encuentran en `src/app/components/header/header.css`:

- `.dropdown-menu` - Contenedor del menú desplegable
- `.dropdown-item` - Cada opción de idioma
- Media queries para responsividad

## ⚡ Rendimiento

- **Sin recarga de página**: Cambios instantáneos de idioma
- **Caché en navegador**: El idioma se guarda en `localStorage`
- **Detección inteligente**: Usa el idioma del navegador como predeterminado

## 🔧 Mantenimiento

### Actualizar Traducciones Existentes
1. Localiza la clave en `translation.service.ts`
2. Modifica el texto en cada idioma
3. Guarda y el cambio se aplicará automáticamente

### Verificar Traducciones Faltantes
Si una clave no existe, el sistema devuelve la clave misma como texto. Ejemplo:
- Si falta `'hero.missing'`, se mostrará `"hero.missing"` en la página

## 📝 Buenas Prácticas

1. **Usa claves descriptivas**: `'hero.welcomeMessage'` mejor que `'text1'`
2. **Mantén consistencia**: Usa la misma estructura en todos los idiomas
3. **Evita HTML**: Mantén las traducciones como texto plano
4. **Documenta**: Añade comentarios para traducciones complejas
5. **Prueba todos los idiomas**: Verifica que todas las traducciones se muestren correctamente

## 🐛 Solución de Problemas

### El idioma no se guarda
- Verifica que `localStorage` esté habilitado en el navegador
- Revisa la consola del navegador por errores

### Falta una traducción
- Asegúrate de que la clave existe en TODOS los diccionarios de idiomas
- Verifica que el nombre de la clave sea exacto (case-sensitive)

### El selector no aparece
- Verifica que `CommonModule` esté importado en el componente header
- Revisa los estilos CSS del dropdown

## 🎯 Próximas Mejoras Sugeridas

- [ ] Agregar más idiomas (chino, japonés, italiano)
- [ ] Implementar carga de traducciones desde archivos JSON externos
- [ ] Añadir traductor automático para contenido dinámico
- [ ] Crear panel de administración para gestionar traducciones
- [ ] Implementar interpolación de variables en traducciones

---

**¡El sistema está listo para usar!** 🎉

Para cualquier duda o sugerencia, consulta el código en `src/app/services/translation.service.ts`
