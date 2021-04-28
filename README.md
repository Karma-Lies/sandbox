# 🥪 sandbox ⛱

a set of generative art experiments using [SvelteKit](https://kit.svelte.dev/) and [p5-svelte](https://github.com/tonyketcham/p5-svelte) 🧙‍♂️


## ⚙️ Developing

Once you've cloned the project, install dependencies with `pnpm install`. Then start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab 🚀
pnpm dev -- --open

# check code linting with Prettier / eslint 👔
pnpm lint

# fix formatting issues 🔨
pnpm format
```

## 🦑 Building

This project is setup to build with the Netlify [adapter](https://kit.svelte.dev/docs#adapters), but the build target can easily be swapped out by dropping in different adapters.

```bash
pnpm build
```

> You can preview the built app with `pnpm preview`, regardless of whether you installed an adapter. This should _not_ be used to serve the app in production.
