# Maintenance & Contribution Guide

This document explains how to run, maintain and extend the 2VX Consulting showcase site.

## Project structure

- `index.html`, `vite.config.js`, `package.json` — Vite project files.
- `src/` — React source code.
  - `components/` — shared components (`NavBar`, `Footer`, `Hero`, `Services`, `ContactCard`, ...).
  - `pages/` — route pages. `About.jsx` and `Terms.jsx` use `MarkdownPage.jsx` to render markdown content.
  - `content/` — markdown files used by `MarkdownPage` (e.g. `about.md`, `terms.md`).
  - `asset/` — project images (logo is `asset/logo-sans-fond.png`).
  - `main.css` — global styles, theme variables and responsive rules.

## Run locally

Install and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:5173` (default Vite port).

## Theme

The site uses CSS variables in `src/main.css`. The default (light) theme is set in `:root`. Dark overrides are available under the `.theme-dark` selector. The theme toggle in the navbar persists the choice in `localStorage`.

To change the accent color, update `--accent` and `--accent-2` in `src/main.css`.

## Adding a markdown page

The site supports simple markdown pages through `src/pages/MarkdownPage.jsx`.

To add a new page:

1. Create your markdown in `src/content/`, for example `my-page.md`.
2. Add a new route component under `src/pages/`, for example `MyPage.jsx`:

```jsx
import React from 'react'
import MarkdownPage from './MarkdownPage'
import md from '../content/my-page.md?raw'

export default function MyPage(){
  return <MarkdownPage source={md} title={'My Page'} />
}
```

3. Register the route in `src/App.jsx`:

```jsx
import MyPage from './pages/MyPage'

// inside <Routes>
<Route path="/my-page" element={<MyPage/>} />
```

Notes:

- Vite's `?raw` import is used to bring the markdown file contents as a string. If you use a different bundler, you may need a loader or to fetch the file at runtime.
- `MarkdownPage` currently contains a minimal renderer supporting headings, paragraphs and lists. For richer rendering (links, images, code), consider installing a markdown library such as `marked` or `remark` and sanitize output with `dompurify`.

## Images & assets

- The current code references the logo at `asset/logo-sans-fond.png`. If you prefer to serve static assets from `public/`, move the file to `public/` and reference it with `/logo-sans-fond.png` in components.
- Alternatively import images in components to let the bundler process them:

```jsx
import logo from '../asset/logo-sans-fond.png'
<img src={logo} alt="logo" />
```

## Contact form

The current contact form is a front-end stub and logs form data to the browser console. To capture leads you can:

- Use a server endpoint (POST) and persist in a database.
- Use a serverless form provider (Formspree, Netlify Forms, Getform): adjust the `action` attribute of the `<form>`.
- Send the form via email using an API (SendGrid, Mailgun) from a backend function.

When adding backend handling, remember to validate inputs and protect secrets.

## Theme & accessibility

- Buttons and contrast colors are controlled by CSS variables. Adjust variables to keep sufficient contrast.
- Add `aria-*` attributes and proper `label` bindings if you extend forms.

## Deploy

You can deploy the built site to any static host (Netlify, Vercel, GitHub Pages):

```bash
npm run build
# then deploy the `dist/` folder
```

## Tips & future improvements

- Replace the minimal markdown renderer with `marked` or `remark` for robust parsing.
- Add form validation and a backend endpoint to capture leads.
- Add image optimization and WebP fallbacks.
- Add unit and E2E tests if you plan to iterate frequently.

If you want, I can:

- Replace the markdown renderer with `marked` + `dompurify` and wire a simple Netlify Form.
- Add a small API endpoint example to capture contact form submissions.

*** End Patch
