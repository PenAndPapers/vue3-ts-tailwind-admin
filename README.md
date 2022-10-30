# vue3-ts-tailwind-admin

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

```
Project
├──/public
├──/src
│   ├──/assets
│   │   └──/style
│   │      ├──index.scss
│   │      └──tailwind.scss
│   │
│   ├──/base-models
│   ├──/components
│   │   ├──/common
│   │   │   ├──GlobalComponent1.vue
│   │   │   └──GlobalComponent2.vue
│   │   │
│   │   ├──/layout
│   │   │   ├──/AppFooter
│   │   │   ├──/AppMain
│   │   │   └──/AppNavigation
│   │   │
│   │   └──index.vue
│   │
│   ├──/middleware
│   │   └──auth.ts
│   │
│   ├──/modules
│   │   ├──/Dashboard                     # ideally each modules has this folder structure
│   │   │   ├──/api                       # however you can customize it depending on your needs
│   │   │   │   ├──api1.ts
│   │   │   │   └──api2.ts
│   │   │   │
│   │   │   ├──/models
│   │   │   │   ├──model1.ts
│   │   │   │   └──model2.ts
│   │   │   │
│   │   │   ├──/router
│   │   │   │   └──index.ts
│   │   │   │
│   │   │   ├──/store
│   │   │   │   ├──store1.ts
│   │   │   │   └──store2.ts
│   │   │   │
│   │   │   └──/views
│   │   │       │   ├──/components
│   │   │       │   ├──InnerComponent1.vue
│   │   │       │   └──InnerComponent2.vue
│   │   │       │
│   │   │       ├──Page1.ts
│   │   │       └──Page2.ts
│   │   │
│   │   ├──/Error
│   │   ├──/Home
│   │   ├──/Login
│   │   └──/Register
│   │
│   ├──/router
│   ├──/utils
│   │   ├──/request
│   │   ├──/session
│   │   └──/validator
│   │
│   ├──/vite
│   ├──App.vue
│   ├──main.ts
│   └──vite-env.d.ts
│
├──.env
├──.gitignore
├──env.d.ts
├──index.html
├──package.json
├──postcss.config.cjs
├──README.md
├──tailwind.config.cjs
├──tsconfig.json
├──tsconfig.node.json
├──vite.config.ts
└──yarn.lock
```

## Tech Stack

| Router                                    | State Management                                   | HTTP Client                                | Testing                                                                                      | Style                                                 | UI Component                                                                  |
| ----------------------------------------- | -------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Vue router 4](https://router.vuejs.org/) | [Pinia](https://pinia.vuejs.org/introduction.html) | [Axios](https://axios-http.com/docs/intro) | [Vitest](https://vitest.dev/)                                                                | [Tailwind](https://tailwindcss.com/docs/installation) | [Element Plus](https://element-plus.org/en-US/#/en-US/component/installation) |
|                                           |                                                    |                                            | [Vue testing library](https://testing-library.com/docs/vue-testing-library/intro/)           | [Sass](https://sass-lang.com/)                        |                                                                               |
|                                           |                                                    |                                            | [Storybook](https://storybook.js.org/docs/vue/get-started/introduction#gatsby-focus-wrapper) |                                                       |                                                                               |
