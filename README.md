# Kyaw Su Hein — Developer Portfolio

A personal portfolio for a **backend-focused full-stack developer** working with Java, Spring Boot, MySQL, and React. It highlights selected projects, technical case studies, learning experience, and contact links.

## Featured project

**JiaFu Game Store** — a digital top-up platform featuring a React storefront, Java/Spring Boot services, MySQL persistence, order and wallet flows, and external provider integrations.

- [Live project](https://jiafu-game.store)
- [Case study in this portfolio](#projectjiafu-game-store) (open from the Projects section of the running site)

## Tech stack

- React 19 (JavaScript + JSX)
- Vite 6
- CSS
- Static portfolio content in `src/data/portfolio.js`

## Run locally

```bash
npm ci
npm run dev
```

Build production assets:

```bash
npm run build
npm run preview
```

Node.js 20+ is recommended for this Vite-based project.

## Structure

```text
src/
  App.jsx                  # Hash navigation and page layout
  components/              # Portfolio sections, cards, case studies
  data/portfolio.js        # Profile, skills, project details
  styles.css               # Site styling
public/
  certificates/            # Certificate images
  projects/                # Case-study diagrams
```

## Deployment

A `netlify.toml` configuration is included for the Vite production build and SPA fallback. Build with `npm run build` and deploy the `dist/` directory.

## Quality considerations

The portfolio uses semantic sections, accessible navigation, responsive layouts, reduced-motion styles, and lazy-loading for non-critical images. A GitHub Actions workflow validates the production build on pushes and pull requests.

## Next steps

- Add a real CV when it is ready (no placeholder download link is exposed).
- Add more complete case studies as projects become available.
- Add screenshot-based mobile and accessibility verification.

## Contact

The site includes direct links to GitHub, email, and Telegram.
