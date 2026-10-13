# bereg.dev

Личный сайт: Home, About, Projects, Certificates, Blog, Contact. Astro (статика), чистый CSS, без бэкенда. Единственный JavaScript на сайте: ~15 строк в `src/layouts/Base.astro` для эффекта «лампы» под курсором (только мышь, без него сайт полностью работает).

## Как добавить

Каждая запись это один Markdown-файл. Шаблон лежит в каждой папке (`_template.md`).

| Что | Куда |
| --- | --- |
| Проект | `src/content/projects/имя.md` |
| Сертификат | `src/content/certificates/имя.md` |
| Пост или статья | `src/content/blog/имя.md` |

Можно прямо в GitHub: Add file, Create new file, путь, вставить текст, Commit. Cloudflare Pages соберёт сайт за 1-2 минуты.

Блог: пока `draft: true`, запись не попадает на сайт. После публикации в LinkedIn добавь поле `linkedin`. Картинки поста кладём в `public/blog/имя-поста/`, у каждой обязательно описание (alt).

## Тексты интерфейса и данные

`src/i18n/en.ts`: заголовки, опыт, навыки, рекомендации, контакты.

## Оформление

Один файл: `src/styles/global.css`. Порядок сверху вниз: шрифты, токены (`:root`, все цвета только здесь), база, шапка и подвал, раскладка, карточки, списки, статья, About, движение, «лампа», HDR, доступность и печать. Тема одна, тёмная (Engineering Blueprint).

- **Шрифты**: IBM Plex Sans (один вариативный файл) и IBM Plex Mono лежат в `public/fonts/`, внешних запросов нет. Если заменяешь файл шрифта, дай ему новое имя: `public/_headers` кэширует `/fonts/*` на год.
- **Движение**: появление при загрузке и «вычерчивание» линий. Отключается при `prefers-reduced-motion` и при печати.
- **Логотип в шапке** (`public/img/logo-hdr.jpg`) это Ultra HDR JPEG с чёрным фоном, поэтому в CSS у него `mix-blend-mode: screen`. После перевыгрузки на фоне `#0a1220` эту строку можно убрать.

## HDR на карточке проекта

Поле `hdr: true` во frontmatter проекта (сейчас только у `hdr-glow`) включает на HDR-экранах светящуюся рамку и название. Нужен файл `public/img/hdr-glow-swatch.jpg` (HDR-JPEG с gain map, делается в glow.bereg.dev). На обычных экранах и без файла карточка выглядит как обычная.

## Если схема контента поменялась

После добавления поля в `src/content.config.ts` dev-сервер может показывать старые данные. Остановить его (`npx astro dev stop`), удалить `.astro/data-store.json` и запустить снова.

## Команды

```
npm install
npm run dev      # локально на http://localhost:4321
npm run build    # сборка в dist/
```

## Публикация

1. Создать репозиторий на GitHub и загрузить проект.
2. Cloudflare Pages: Create project, подключить репозиторий, preset Astro, команда `npm run build`, папка `dist`.
3. Custom domain: bereg.dev.
4. Почта konstantin@bereg.dev: Cloudflare, Email Routing, адрес konstantin с пересылкой на основную почту. Пока ящика нет, адрес скрыт на сайте флагом `showEmail: false` в `src/i18n/en.ts`; когда ящик создан, поставь `true`.
5. Аналитика: Cloudflare Web Analytics, включить для сайта.
