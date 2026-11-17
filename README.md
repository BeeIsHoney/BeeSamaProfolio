# Kyaw Su Hein — Developer Portfolio

A personal portfolio built with **React 19** and **Vite**, showcasing Java/Spring Boot and React projects, certificates, and a learning/experience timeline.

## Featured work

- **JiaFu Game Store** — a Java/Spring Boot and React digital top-up platform with wallet and order workflows. [Live site](https://jiafu-game.store).
- **The Silent Legacy** — a React-powered, interactive 2.5D space exploration experience made for the 2026 NASA Space Apps Challenge. [Live demo](https://silent-legacy-orbit-live.vercel.app/) · [Source](https://github.com/sithuaunglife/the-silent-legacy).

Project descriptions, categories, links, and case-study content are maintained in `src/data/portfolio.js`. Certificates are in `src/data/certificates.js`.

![The Silent Legacy — interactive 2.5D Moon and Mars exploration](https://res.cloudinary.com/bvoft2ib/image/upload/f_auto,q_auto,w_1000/v1794922236/bee-portfolio/the-silent-legacy-demo.png)

## Requirements

- Node.js 20 or newer
- npm

## Local development

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

To check the code before publishing:

```bash
npm run test
npm run build
```

`npm test` runs dependency-free data and asset consistency checks with Node's built-in test runner. `npm run build` generates a production build in `dist/`. GitHub Actions runs both on pushes and pull requests.

## Code structure

```text
src/
  App.jsx                       # hash-based navigation and detail views
  components/                   # home, projects, certificates, contact UI
  data/
    portfolio.js                # profile, skills, projects, case studies
    certificates.js             # certificate metadata
  styles.css                    # original portfolio styles
  styles/quality.css            # focused accessibility and responsive fixes
public/
  certificates/                 # locally hosted certificates
  projects/                     # diagrams and media
tests/
  portfolio.test.js             # content/asset consistency checks
.github/workflows/
  ci.yml                        # build and test
```

## Accessibility

- Native links for project navigation rather than a clickable non-link container.
- Keyboard-accessible project links and certificate preview dialog.
- Tab-list keyboard navigation with arrow/Home/End keys.
- Focus restoration after closing the certificate preview.
- Reduced-motion styles and responsive text-size improvements.

## Deploy

This is a static Vite application. Run `npm run build` and serve the generated `dist/` directory. A Netlify configuration is included.

## Notes

- Some project source code is private or owned by collaborating teams; project case studies describe public-facing functionality rather than claiming that all code is open source.
- CV download is intentionally not displayed until the actual PDF is included in `public/`.
- The original CSS is large and was kept to preserve the current design; its remaining duplication is a separate refactoring task best handled with visual regression testing.

## License

No license has been granted for redistribution. Contact the repository owner before reusing this portfolio's content or artwork.
