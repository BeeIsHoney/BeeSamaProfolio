# Kyaw Su Hein — Portfolio

A blue pixel-style React portfolio with skills, one Jiafu Game Store card and contact links. The project card has no source code link.

## Run

```bash
npm install
npm run dev
```

Open the Local URL printed in the terminal.

## Files

- `src/main.jsx`: starts React and imports the stylesheet.
- `src/App.jsx`: puts the sections together.
- `src/components/`: Header, Hero, Skills, Projects, ProjectCard, Contact, Footer and Icon.
- `src/data/portfolio.js`: name, skills, projects and contact links.
- `src/styles.css`: colors, typography and responsive layouts.

Add your email, GitHub and Telegram links in `src/data/portfolio.js`. Empty values display Not added yet. To add a project screenshot, put it in `public/` and set the project's `image` to `/your-image.png`.

## Windows setup

Extract this ZIP into a new folder. If copying it into an existing Vite project, replace the old files, including `vite.config.ts`. This project does not import or require `@vitejs/plugin-react`.

## Build

```bash
npm run build
```

The finished website is in `dist/`.
"# BeeSamaProfolio" 
