# NovaFlow Landing Page

Портфельный full-stack проект: адаптивный промо-лендинг для digital-продукта с production-ready сборкой и автоматическим деплоем на GitHub Pages.

## Live

- Demo: https://arsenij4332112.github.io/-/
- Repository: https://github.com/Arsenij4332112/-

## Overview

Проект собран как аккуратный статический production build:

- адаптивный `header` с desktop/mobile navigation
- `hero`-секция с CTA и визуальным акцентом
- блок преимуществ на 4 карточки
- контентная секция с изображением и поясняющим текстом
- форма обратной связи с валидацией на клиенте
- hover states, smooth navigation и mobile menu
- автоматический deploy через GitHub Actions

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js build script
- GitHub Actions
- GitHub Pages

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
|       |   |-- hero-dashboard.svg
|       |   `-- og-cover.svg
|       |-- scripts
|       |   `-- main.js
|       `-- styles
|           `-- main.css
|-- dist
`-- package.json
```

## Commands

- `npm run build` - собирает сайт в `dist/`
- `npm run clean` - удаляет папку `dist/`

## Deployment

При пуше в `main` workflow из `.github/workflows/deploy.yml` публикует содержимое `dist/` в GitHub Pages.

## Notes

Если репозиторий будет переименован, URL сайта тоже изменится. Тогда нужно обновить ссылки в `README.md` и SEO-мета в `src/index.html`.
