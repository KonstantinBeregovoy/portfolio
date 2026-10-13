# bereg.dev

Личный сайт: Home, About, Projects, Certificates, Blog, Contact. Astro (статика), чистый HTML и CSS, без бэкенда.

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

`src/i18n/en.ts`: заголовки, опыт, навыки, рекомендации, контакты. Цвета: `src/styles/global.css` (блок `:root`).

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
4. Почта konstantin@bereg.dev: Cloudflare, Email Routing, адрес konstantin с пересылкой на основную почту.
5. Аналитика: Cloudflare Web Analytics, включить для сайта.
