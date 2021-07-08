# SSR

Server side rendering.

## Usage

Development mode:

```sh
// 1. Run Node.js 14+
nvm use
// 2. Install requiments
npm install
// 3. Start the project
npm run dev
```

Production mode:

```sh
// 1. Run Node.js 14+
nvm use
// 2. Install requiments
npm install
// 3. Build project
npm run build
// 4. Start project
npm run start
```

> If you don't have NVM, [install it](https://github.com/nvm-sh/nvm#install--update-script).

## File structure

```sh
build/                          # Server bundle
configs/                        # Different configs (StyleLint, TsLint)
docker                          # Docker instructions
docs/                           # Docs
public/                         # Client bundle
scripts/                        # Оffline scripts for database modification, index creation, etc.
server/                         # BFF
    ├── lib/                    # Libs for routers
    ├── middlewares/            # Middlewares
    ├── routers/                # Express routers API
    │    ├── v1/
    │    │    ├──android.ts
    │    │    ├──ios.ts
    │    │    └──web.ts
    │    └── common.ts
    ├──app.ts                   # Express app initialization, loading routers
    └──index.ts                 # Input for BFF
src/                            # SSR sources 
    ├── client/
    │   ├── bundles/            # Templates for pages                 
    │   ├── components/         # Components
    │   ├── hooks/              # Hooks
    │   ├── lib/                # Libs
    │   ├── pages/              # Pages
    │   ├── redux/              # States
    │   │    ├── actions/       # Actions 
    │   │    ├── reducers/      # Редьюсеры
    │   │    ├── saga/          # Saga
    │   │    ├── selectors/     # Redux selectors
    │   │    ├── state.ts       # getInitialState
    │   │    └── store.ts       # Store
    │   ├── theme/              # CSS variables
    │   ├── App.tsx             # App component
    │   ├── App@desktop.tsx     # Root file of desktop client application
    │   ├── App@mobile.tsx      # Root file of mobile client application
    │   └── Routes.ts           # Routes
    └── helpers/
        ├── createStore.ts      # Helper for create store
        └── renderer.tsx        # Helper for render
static/                         # Static files
webpack/                        # Webpack configs
    └── loaders/                # Loaders
tsconfig.json                   # TypeScript config for development
tsconfig.production.json        # TypeScript config for production
```

## Formating

```sh
// CSS
npm run format:css
// TS
npm run format:js
// Markdown
npm run format:md
```

## ESLint

```sh
npm run eslint
```
