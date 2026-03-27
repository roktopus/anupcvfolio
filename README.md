# Wizards CVfolio ✨

**Welcome to CVfolio!** 🧙‍♂️ CVfolio is a minimalistic and aesthetic Astro template for developers and designers to showcase their professional journey, portfolio, and expertise in a modern, fast-loading website inspired by Read.CV.

## 🎨 Recent Magical Enhancements

This portfolio has been transformed with **wizardry-themed modifications** that bring a unique personality to the developer experience:

### 🌟 **Visual & Thematic Upgrades**

- **Magical 3D Background Effects**: Animated gradients and floating particles that create a mystical atmosphere
- **Theme-Aware Navigation**: Beautiful golden gradients in light mode, purple-red gradients in dark mode
- **Enhanced Typography**: Magical text effects with shimmering gradients
- **Custom Scrollbars**: Themed scrollbars that match the magical aesthetic
- **Mist & Smoke Effects**: Golden particles in light mode, purple-red particles in dark mode

### 🏗️ **Component Architecture Improvements**

- **Unified Experience Grid**: Consolidated Companies, Certifications, Patents, Cloud Platforms, and Skills into a single, optimized component
- **Code Reusability**: Refactored components with helper functions and better organization
- **Responsive Design**: Enhanced mobile and desktop experience
- **Performance Optimizations**: Streamlined component structure for better loading times

### 📝 **Content & UX Enhancements**

- **Quirky Emoji Integration**: Playful emojis throughout the content for personality
- **Improved MDX Formatting**: Rich markdown formatting for better readability
- **Fixed Navigation Issues**: Resolved margin shifts and navigation functionality
- **Consistent Scrollbar**: Eliminated layout shifts between pages

### 🎯 **Technical Improvements**

- **Astro Best Practices**: Proper component structure and content collections
- **Tailwind CSS Optimization**: Efficient utility-first styling
- **TypeScript Integration**: Better type safety and development experience
- **Asset Management**: Optimized image handling and loading

The source code continues to evolve, so **it's important to share it** with you so we can get feedback and constantly improve it.

Over time, we've managed to add features and improve the design. There are still some things left to do, but the most important thing is that there's an opportunity for this project to be **community-driven**.

- Telegram group: **[Cvfolio »](https://t.me/+5xVGgQ9aQOk1ZmNh)**
- Follow me on X at **[@coderdiaz »](https://x.com/coderdiaz)**

## How to contribute

Cvfolio is built on top of Astro and uses TailwindCSS for generate the website. If you are familiar with Astro, you should feel right at home.

In terms of local development, you can use the following requirements:

- Node.js - v18.17.1 or v20.3.0, v22.0.0 or higher.

If you have these requirements, you can start by cloning the repository and installing the dependencies:

```sh
git clone https://github.com/coderdiaz/cvfolio.git

cd cvfolio

git checkout -b feat/your-feature # or fix/your-fix
```

> Don't push directly to the main branch. Instead, create a new branch and push it to your branch.

Next, install the dependencies using Bun or NPM:

```sh
bun install

# npm
npm install
```

Finally, start the development server:

```sh
bun dev
```

If everything is OK, push your branch and create a pull request:

```sh
git commit -am "Your commit message"

git push
```

Visit [github.com/coderdiaz/cvfolio/pulls](https://github.com/coderdiaz/cvfolio/pulls) and create a pull request.

## Add a New Post

Use this workflow to add a post that renders correctly in both post pages and the `/writing` listing views.

1. Create a new folder under `src/content/posts/<your-slug>/`.
2. Add `index.mdx` with frontmatter:
   - `title` (required)
   - `date` (required, `YYYY-MM-DD`)
   - `seo` object (`title`, `description`, `type`, `keywords`)
   - `image` (optional hero image path, e.g. `./media/cover.webp`)
3. Keep all post assets inside that post folder (recommended):
   - `src/content/posts/<your-slug>/media/...`
4. Write content in Markdown/MDX:
   - Use headings (`##`, `###`) and short paragraphs.
   - Use fenced blocks for chord sheets/tabs, e.g.:
     ````md
     ```chords
     (Em) line one
     (C) line two
     ```
     ````
     ```

     ```
5. YouTube links:
   - Add a plain YouTube URL line (e.g. `https://youtu.be/<id>` or `https://www.youtube.com/watch?v=<id>`).
   - The post page auto-converts it into an embedded iframe.
   - The writing thumbnail view uses the first YouTube link as media thumbnail when present.
6. Hero image behavior:
   - If `image` is set, it is used as the post hero and as the thumbnail media when no YouTube link is found.
7. Validate locally before commit:
   - `bun dev` and open `/writing` and your new post URL.
   - Check both list and thumbnail views on `/writing`.
   - Run `bun run build` to catch MDX/content errors.

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

## Check our Documentation

Here is a list of documentation for more in depth information about the cvfolio.

| Documentation                 | Link                                                                                |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| Project Structure             | [docs/project-structure](/docs/project-structure.md)                                |
| Customization                 | [docs/customization](/docs/customization.md)                                        |
| How to deploy on GitHub Pages | [docs/guides/how-to-deploy-github-pages](docs/guides/how-to-deploy-github-pages.md) |

Feel free to add more documentation.

If you have any comments or recommendations contact me vía [X](https://x.com/coderdiaz) or email [hey(at)coderdiaz.com](mailto:hey@coderdiaz.com), or write an Issue with your proposal.
