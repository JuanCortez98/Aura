# Aura Beauty Studio — demo independiente de Dorenio

Proyecto HTML + imágenes. No se necesitan claves ni configuración adicional.

## Probar localmente

1. Abre esta carpeta en VS Code.
2. Ejecuta `npm start` (requiere Node.js 20 o superior).
3. Visita http://localhost:3000

## Desplegar en Heroku mediante Git

1. Descomprime el ZIP y abre **esta carpeta** como raíz del proyecto.
2. Ejecuta `git init`, `git add .` y `git commit -m "Aura demo"`.
3. Con Heroku CLI autenticada: `heroku create nombre-disponible`.
4. `heroku buildpacks:set heroku/nodejs`
5. `git push heroku HEAD:main` (si la rama principal es `main`, `git push heroku main`).
6. `heroku open`.

El archivo `Procfile` inicia el servidor Node y usa el puerto asignado por Heroku.

## Antes de hacerla pública

- Aura es un concepto ficticio y NO recibe reservas ni pagos.
- Las tres reseñas son ejemplos ficticios claramente señalados.
- El mapa muestra Mérida solo como ejemplo; AgendaPro enlaza a la plataforma general.
- Los enlaces "Dorenio" llevan a https://dorenio.com/ y deben revisarse si el dominio todavía no está publicado.
- Verifica que poseas autorización para publicar las fotografías e imágenes incorporadas, especialmente cuando aparecen personas.
