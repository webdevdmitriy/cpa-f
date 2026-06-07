# CPA-F

## About

CPA-F is a Next.js landing page with localized English and Russian content.

## Design

- [CPA F](https://www.figma.com/design/U9mPOGl2XWFWVq5Uttc1JK/CPA-F?node-id=4134-4449&p=f&t=AcJh5b4ivHpgF8ql-0)

## Tech Stack

- [Next.js](https://nextjs.org/) 16.2.6
- Next.js App Router
- [React](https://react.dev/) 19.2.4
- [TypeScript](https://www.typescriptlang.org/) 5
- [next-intl](https://next-intl.dev/) for internationalization
- SCSS Modules for component-level styling
- [ESLint](https://eslint.org/) 9
- npm with `package-lock.json`

## Architecture

The project uses the Next.js App Router under `src/app`.

Localized pages live under `src/app/[locale]`, with supported locale routes:

- `/en`
- `/ru`

Internationalization is configured through:

- `src/i18n/routing.ts` - supported locales and default locale.
- `src/i18n/request.ts` - loads locale messages for the current request.
- `src/i18n/navigation.ts` - locale-aware navigation helpers.
- `src/proxy.ts` - Next.js 16 request proxy for locale routing.
- `messages/en.json` and `messages/ru.json` - translation dictionaries.

## Main Packages

### Framework

- `next` - React framework for routing, rendering, and application tooling.
- Next.js App Router - File-based routing and layouts under the `src/app` directory.
- `react` - UI library.
- `react-dom` - React DOM renderer.

### Internationalization

- `next-intl` - Internationalization support for Next.js.

### Animation

- `gsap` - Animation library. Includes `ScrollTrigger` for scroll-based animations.

### Styling

- SCSS Modules - Component-scoped styles using `*.module.scss` files.
- `sass` - Sass compiler required for `.scss` and `.module.scss` files in Next.js.

### Development

- `typescript` - Static typing.
- `eslint` - Linting.
- `eslint-config-next` - ESLint configuration for Next.js.
- `@types/node` - TypeScript types for Node.js.
- `@types/react` - TypeScript types for React.
- `@types/react-dom` - TypeScript types for React DOM.
- `babel-plugin-react-compiler` - React Compiler Babel plugin.

## Getting Started

Requirements:

- Node.js
- npm

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open one of the localized routes in your browser:

- [http://localhost:3000/en](http://localhost:3000/en)
- [http://localhost:3000/ru](http://localhost:3000/ru)

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after building the project.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run lint:fix
```

Runs ESLint with automatic fixes.

```bash
npm run typecheck
```

Generates Next.js route types and runs TypeScript type checking.

```bash
npm run format
```

Formats the project with Prettier.

```bash
npm run format:check
```

Checks Prettier formatting.

## Project Structure

- `src/` - Application source code.
- `src/app/` - App Router routes, layouts, and pages.
- `src/app/[locale]/` - Localized route layout and homepage.
- `src/components/` - Reusable UI components and page sections.
- `src/i18n/` - `next-intl` routing, request, and navigation setup.
- `messages/` - JSON dictionaries for supported locales.
- `docs/` - Project documentation.
- `public/` - Static assets.
- `next.config.ts` - Next.js configuration.
- `tsconfig.json` - TypeScript configuration.
- `eslint.config.mjs` - ESLint configuration.
- `package.json` - Project scripts and dependencies.
