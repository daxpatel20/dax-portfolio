# Maan — Developer Portfolio

A single-page React + Vite portfolio with a built-in dark/light theme
toggle, a "code editor" visual motif (mono eyebrows, terminal-style
labels), and sections for hero, about, skills, resume, services,
projects, testimonials, blog, and contact.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
public/
  docs/            # put maan-resume.pdf here
  projects/        # optional extra project assets
src/
  assets/          # profile photo + project image (replace with your own)
  components/      # one file per section
  data/
    portfolio.js   # ⭐ edit this file to update all site content
  App.jsx
  main.jsx
  styles.css       # design tokens + all styling (dark & light themes)
  ThemeContext.jsx # theme state, persisted to localStorage
  useReveal.js     # scroll-reveal + skill-bar animation hook
index.html
vite.config.js
```

## Customizing

- **Content**: everything text-based (name, bio, skills, projects,
  testimonials, resume timeline, blog posts) lives in
  `src/data/portfolio.js`. Edit that one file to make the site yours.
- **Images**: swap `src/assets/maan-profile.jpg` and
  `src/assets/maan-developer-laptop.png` for your own photo and
  project screenshots.
- **Resume PDF**: drop your PDF into `public/docs/maan-resume.pdf` —
  the "Download resume" buttons already point there.
- **Colors**: both themes are defined as CSS custom properties at the
  top of `src/styles.css` (`:root` / `[data-theme="dark"]` for dark,
  `[data-theme="light"]` for light). Change the hex values there to
  re-theme the whole site.
- **Theme toggle**: the sun/moon button in the header calls
  `toggleTheme()` from `ThemeContext.jsx`; the chosen theme is saved
  to `localStorage` so it persists across visits.

## Deploying

The build output in `dist/` after `npm run build` is static and can
be hosted on Vercel, Netlify, GitHub Pages, or any static host.


## Fixed build
The JSX section closing-tag errors were corrected in the portfolio components. Run `npm install` and `npm run dev`.
