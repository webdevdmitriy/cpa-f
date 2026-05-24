# AI Agent Guidelines

## Stack

- Next.js 16.2.6 with App Router
- React 19
- TypeScript with strict mode
- SCSS Modules
- ESLint 9
- Prettier 3
- npm with `package-lock.json`

## Next.js

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

Before changing routing, config, metadata, images, fonts, caching, server/client components, or build behavior, read the relevant docs in:

```txt
node_modules/next/dist/docs/
```

Do not rely on older Next.js behavior.

## Documentation

- Use Context7 MCP for external library and framework documentation.
- Do not use Context7 for purely local codebase questions unless external docs are needed.

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run lint:fix
npm run format
npm run format:check
npx tsc --noEmit
```

## Rules

- Keep TypeScript strict mode enabled.
- Use `@/` imports for paths from `src`.
- Use Server Components by default.
- Add `"use client"` only when browser APIs, state, effects, events, or client-only libraries are needed.
- Use SCSS Modules for component styles.
- Follow Prettier and ESLint configs.
- Do not edit generated folders: `.next`, `node_modules`, `out`, `build`.
- Keep changes focused and avoid unrelated refactors.
