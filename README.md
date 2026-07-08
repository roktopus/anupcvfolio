# Anup Jambhekar — Personal Site

Personal portfolio and writing site for **Anup Jambhekar** (3D Web / XR / Mixed Reality Engineer, Pune 🇮🇳). Built with [Astro](https://astro.build) and Tailwind CSS, deployed on Cloudflare.

## Sections

- **Scrolls** (`/`) — editorial feed of posts and videos, with topic chips, search, filters, and an RSS feed.
- **About** (`/about`) — profile, what I build, impact metrics, latest scrolls, craft & tools, and companies.
- **Posts** (`/writing/<slug>/`) — individual article/video pages with YouTube embed and chord-sheet support.

## Local development

Requirements: Node.js v18.17+, v20.3+, or v22+.

```sh
npm install
npm run dev      # http://localhost:4321
```

Other scripts:

```sh
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Add a new post

1. Create a folder under `src/content/posts/<your-slug>/`.
2. Add `index.mdx` with frontmatter:
   - `title` (required)
   - `date` (required, `YYYY-MM-DD`)
   - `seo` object (`title`, `description`, `type`, `keywords`)
   - `image` (optional hero image path, e.g. `./media/cover.webp`)
3. Keep all post assets inside that post folder (recommended):
   - `src/content/posts/<your-slug>/media/...`
4. Write content in Markdown/MDX:
   - Use headings (`##`, `###`) and short paragraphs.
   - Use fenced blocks for chord sheets/tabs (use `plaintext` so Shiki can highlight; the post page still styles chord notation):
     ````md
     ```plaintext
     (Em) line one
     (C) line two
     ```
     ````
5. YouTube links:
   - Add a plain YouTube URL line (e.g. `https://youtu.be/<id>` or `https://www.youtube.com/watch?v=<id>`).
   - The post page auto-converts it into an embedded iframe.
   - The writing thumbnail view uses the first YouTube link as the media thumbnail when present.
6. Hero image behavior:
   - If `image` is set, it is used as the post hero and as the thumbnail media when no YouTube link is found.
7. Validate locally before commit:
   - `npm run dev` and open `/` and your new post URL.
   - Check both list and thumbnail views.
   - Run `npm run build` to catch MDX/content errors.

Minimal post example:

```md
---
title: 'My New Post'
date: 2026-03-27
image: ./media/cover.webp
seo:
  title: 'My New Post'
  description: 'Short summary of the post.'
  type: article
  keywords: blog, writing
---

https://youtu.be/Yl6h4NaYBWU

## Intro

Write your content here.
```

## Documentation

| Documentation        | Link                                          |
| -------------------- | --------------------------------------------- |
| Project Structure    | [docs/project-structure](/docs/project-structure.md) |
| Customization        | [docs/customization](/docs/customization.md)  |
