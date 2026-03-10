# Chat UTN - Proyecto Final

## Descripción del proyecto
 Es una aplicación de mensajería al estilo WhatsApp, con su login, su logout, con un aside con los contactos y una caja de mensajería en donde podemos ver las conversaciones e interactuar con los otros usuarios.

---

## Tecnologías utilizadas
- **React**: Componentes funcionales, useState, useEffect, useRef.
- **Router**: Manejo de rutas y rutas protegidas.
- **Context**: Se usó para la comunicación entre sí y el manejo de la persistencia
- **LocalStorage**: Persistencia de datos en el navegador.
- **CSS**: Estilos y diseño responsive design.
- **JavaScript**: autenticación y gestión de mensajes.

---

## Instrucciones para ejecutar el proyecto localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/Matiasalvarez97/Proyecto-Final.git

# 2. Entrar a la carpeta del proyecto
cd Proyecto-Final

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev

# 5. Abrir en el navegador
Abrir la ruta que devolvio la terminal

## Estructura del proyecto

El proyecto está organizado de forma simple:
 
- src/assets/components/ → Componentes reutilizables (Aside, Chat, RouteProtected)  
- src/context/ → Contexto global (ChatContext.jsx) para usuarios y mensajes  
- src/pages/ → Páginas de la app (Home, Login, Register, Acerca, NotFound)  
- src/services/ → Mock de datos (mockApi.js)  
- src/router/ → Configuración de rutas (RouterApp.jsx)  
 

Cada página y componente tiene una función : Home muestra la pagina principal, Login/Register manejan la autenticación de los usuarios, "Acerca" muestra la documentación, y NotFound maneja rutas que no existen dando error 404.

## Instrucciones para el deploy

Para el deploy en Vercel:

1. Crear una cuenta en [Vercel](https://vercel.com/).  
2. Conectar tu repositorio de GitHub.  
3. Haz clic en "Add New" y selecciona "Project"..  
4. Importa el repositorio Proyecto-Final  
5. Hacer click en **Deploy**.  

> Una vez completado, Vercel generará una URL.