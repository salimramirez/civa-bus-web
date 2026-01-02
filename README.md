# CIVA Bus Web

Aplicación web para la gestión y visualización de información de buses. Desarrollada con React, TypeScript y Vite, consume una API REST con autenticación básica para mostrar un listado paginado de buses y sus detalles individuales.

## Descripción del Proyecto

Este proyecto es una aplicación frontend moderna que permite:

- Visualizar un listado paginado de buses con información clave (número de bus, placa, marca, fecha de creación, características y estado).
- Navegar entre páginas del listado con controles de paginación.
- Consultar los detalles completos de un bus específico mediante una vista detallada.
- Gestionar estados de carga y errores de forma elegante con componentes visuales apropiados.

## Tecnologías Utilizadas

- **React 19.2.3**: Biblioteca para la construcción de interfaces de usuario.
- **TypeScript 5.9.3**: Superset de JavaScript con tipado estático.
- **Vite 7.2.4**: Herramienta de construcción y desarrollo rápida.
- **React Router DOM 7.11.0**: Librería para el manejo de rutas y navegación.
- **Tailwind CSS 4.1.18**: Framework de CSS utility-first para el diseño de interfaces.
- **ESLint**: Herramienta de linting para mantener la calidad del código.

## Requisitos Previos

Antes de comenzar, asegúrese de tener instalado:

- **Node.js**: Versión 18.0.0 o superior.
- **npm**: Versión 9.0.0 o superior (incluido con Node.js).

## Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd civa-bus-web
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Cree un archivo `.env` en la raíz del proyecto basándose en el archivo `.env.template`:

```bash
cp .env.template .env
```

Edite el archivo `.env` con los valores correspondientes:

```env
VITE_API_URL=http://localhost:8080/api/v1
VITE_API_USER=civa_user
VITE_API_PASS=civa_password
```

**Variables de entorno:**

- `VITE_API_URL`: URL base de la API REST.
- `VITE_API_USER`: Usuario para la autenticación básica.
- `VITE_API_PASS`: Contraseña para la autenticación básica.

## Ejecución

### Modo de desarrollo

Inicia el servidor de desarrollo con recarga automática:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Uso de la Aplicación

### Pantalla principal

Al acceder a la aplicación, se muestra un listado de buses en formato de tabla con las siguientes columnas:

- ID
- Número de Bus
- Placa
- Fecha de Creación
- Marca
- Características
- Estado (Activo/Inactivo)
- Acciones

### Paginación

En la parte inferior de la tabla se encuentran los controles de paginación:

- Botón "Anterior": Navega a la página anterior (deshabilitado en la primera página).
- Indicador de página actual: Muestra "Página X de Y".
- Botón "Siguiente": Navega a la página siguiente (deshabilitado en la última página).

### Vista de detalle

Al hacer clic en el botón "Ver detalle" de cualquier bus, se navega a una vista detallada que muestra:

- Número de bus
- Placa
- Marca
- Fecha de registro
- Estado
- Características

Desde esta vista se puede regresar al listado mediante el botón "Cerrar Pestaña".

## Arquitectura y Decisiones Técnicas

### Gestión de estados

- Estados de carga, error y datos manejados mediante hooks de React.
- Feedback visual apropiado para cada estado (spinners, mensajes de error).

### Navegación

- Implementación de rutas mediante React Router DOM con estructura anidada.
- Uso de rutas dinámicas para la vista de detalle (`/bus/:id`).

### Estilos

- Combinación de Tailwind CSS para estilos utility-first y CSS personalizado para componentes específicos.
- Diseño responsive que se adapta a diferentes tamaños de pantalla.

## Notas Adicionales

- La aplicación consume una API REST que debe estar en ejecución para su correcto funcionamiento.
- Las credenciales de autenticación se configuran mediante variables de entorno para facilitar el despliegue en diferentes ambientes.
- El tamaño de página está configurado por defecto en 5 elementos, pero puede ajustarse en el servicio `busService.ts`.
