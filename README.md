# NovaFlow Landing Page

Промо-лендинг для digital-продукта с адаптивной версткой, рабочей навигацией, hero-блоком, секцией преимуществ, контентным блоком и формой с валидацией.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js script for static build
- GitHub Pages workflow

## Features

- sticky header с desktop и mobile navigation
- hero section с CTA и визуальным акцентом
- 4 feature cards with hover states
- контентная секция с изображением и списком преимуществ
- форма обратной связи с клиентской валидацией
- production-ready static build in `dist/`

## Project Structure

```text
.
|-- .github/workflows/deploy.yml
|-- scripts/build.mjs
|-- src
|   |-- index.html
|   `-- assets
|       |-- images
|       |   |-- about-dashboard.svg
|       |   `-- hero-dashboard.svg
|       |-- scripts
|       |   `-- main.js
|       `-- styles
|           `-- main.css
`-- package.json
```

## Scripts

- `npm run build` - copies source files to `dist/`
- `npm run clean` - removes `dist/`

## Deploy

GitHub Actions workflow builds the project and publishes `dist/` to GitHub Pages on every push to `main`.

## Result

After build, open `dist/index.html` locally or publish the repository to GitHub Pages.
