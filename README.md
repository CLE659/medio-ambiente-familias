# Pequenos Guardianes

Este es el repositorio del sitio "Pequenos Guardianes". A continuación, se explica cómo se ha configurado el proyecto y las instrucciones para desplegarlo usando GitHub y Netlify.

## Contenido del repositorio

- **Archivos y carpetas del sitio:** Todos los archivos y recursos (HTML, CSS, JavaScript, imágenes, etc.) que componen el sitio.
- **Este README:** Información general sobre el proyecto y pasos de despliegue.

## Despliegue del sitio

Puedes publicar este sitio de forma gratuita usando Netlify siguiendo estos pasos:

### 1. Subir la carpeta a GitHub

#### Opción A: Usando GitHub Desktop (más fácil)

1. [Inicia sesión](https://github.com/) en GitHub.
2. Abre GitHub Desktop e inicia sesión.
3. Haz clic en **File** → **Add local repository** y selecciona la carpeta descomprimida del proyecto.
4. Selecciona la opción **Publish repository** para subirla a GitHub.

#### Opción B: Subiendo los archivos manualmente

1. En GitHub, haz clic en **New repository**.
2. Ponle un nombre (por ejemplo, `pequenos-guardianes`) y deja el resto de configuraciones por defecto.
3. Haz clic en **Create repository**.
4. Dentro del repositorio recién creado, haz clic en **Add file** > **Upload files**.
5. Arrastra todos los archivos y carpetas del proyecto (asegúrate de no subir el ZIP directamente).
6. Haz clic en **Commit changes**.

### 2. Conectar GitHub con Netlify

1. Ve a [Netlify](https://app.netlify.com/) e inicia sesión.
2. En el panel de control, haz clic en **Add new site** > **Import from Git**.
3. Elige **GitHub** y autoriza el acceso si es la primera vez.
4. Busca el repositorio que subiste (por ejemplo, `pequenos-guardianes`) y haz clic sobre él.
5. En la sección de configuración:
   - **Build command:** Déjalo vacío (ya que el sitio es estático).
   - **Publish directory:** Escribe `.` (punto) para indicar la raíz del repositorio o especifica la carpeta que contiene el sitio (por ejemplo, `public` si ese fuera el caso).
6. Haz clic en **Deploy site**.

### 3. Acceso al sitio

Una vez desplegado, Netlify te asignará una URL del tipo:
