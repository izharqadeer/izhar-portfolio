# Izhar Portfolio

Personal portfolio site built with React and Three.js: scroll-driven sections, a WebGL character scene, and GSAP-powered motion. This repo is the open-source version of the project.

![Portfolio preview](public/images/preview.png)

## Features

- **3D character** — `@react-three/fiber` + `three`, Draco-compressed assets, lazy-loaded for faster first paint
- **Scroll & UI animation** — GSAP timelines tied to scroll and layout (`@gsap/react`)
- **Single-page layout** — About, experience, work, tech stack, and contact in one flowing experience

## Tech stack

| Area        | Tools |
|------------|--------|
| App        | React 18, TypeScript, Vite 5 |
| 3D         | Three.js, React Three Fiber, Drei, postprocessing |
| Motion     | GSAP, `@gsap/react` |
| Lint / DX  | ESLint 9, TypeScript ESLint |

## Requirements

- **Node.js** 18+ (20 LTS recommended)
- **npm** (or pnpm / yarn)

## Getting started

```bash
# Install dependencies
npm install

# Dev server (listens on all interfaces — useful on LAN)
npm run dev

# Production build
npm run build

# Preview the production build locally
npm run preview

# Lint
npm run lint
```

Open the URL Vite prints (usually `http://localhost:5173`).

## GSAP: Club plugins vs trial

This project can use **GSAP trial** packages for local development. **Trial plugins are not licensed for production hosting.** For a public deploy, use **GSAP Club** plugins and follow the [official installation guide](https://gsap.com/docs/v3/Installation/) so your build complies with GreenSock’s license.

## Environment

Sensitive values belong in `.env` (see `.gitignore`). Do not commit secrets or Club-only plugin sources if they are not meant to be public.

## License

MIT — see [LICENSE](LICENSE).
