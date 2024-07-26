# React Feature Toggle

A package to help you implement feature toggles in your React app.

## License

Licensed under MIT. Totally free for private or commercial projects.

## Getting Started

To install this package use npm:

```bash
npm install @anddye/react-feature-toggle
```

## Usage

Define your features:

```ts
// index.tsx
const featureToggles = {
    newFeature: true
};
```

Wrap your React app in the `FeatureToggleProvider`, passing your featureToggles as a prop:

```tsx
// index.tsx
<FeatureToggleProvider featureToggles={featureToggles}>
    <App />
</FeatureToggleProvider>
```

Use the hook to check if your feature is enabled:

```tsx
// App.tsx
import { useFeatureToggle } from '@anddye/react-feature-toggle';

function App() {
    const { isFeatureEnabled } = useFeatureToggle();

    const newFeatureEnabled = isFeatureEnabled('newFeature');

    return <div>{newFeatureEnabled ? 'Feature enabled' : 'Feature disabled'}</div>;
}

export default App;
```

Alternatively, use the with HOC:

```tsx
// App.tsx
import { withFeatureToggle } from '@anddye/react-feature-toggle';

function App() {
    return <div>Feature enabled</div>;
}

export default withFeatureToggle('newFeature')(App);
```

## Local Development

For local development, use Yalc to install this package in your project.

Yalc is a tool for managing local development of npm packages. It allows you to work on this package locally and test it in other projects without publishing to the npm registry.

To use yalc, you need to install it globally on your machine. You can do this using npm:

```bash
npm install yalc -g
```

### Installing the Package with Yalc

First, navigate to the project directory where you want to use this package and run:

```bash
yalc add @anddye/react-feature-toggle
```

This will install the package from the local Yalc store. You can now use it in the project as you would with any other npm package.

### Updating the Package with Yalc

After publishing changes to this package to the local Yalc store, navigate to the project directory and run:

```bash
yalc update @anddye/react-feature-toggle
```

This will update the installed version of this package in the project.

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds production files in your `dist/` folder. It generates CommonJS, ES Modules, as well as TypeScript declaration files.

### `npm run build:cjs`

Builds CommonJS (CJS) modules for the project.

### `npm run build:esm`

Builds ES Modules (ESM) for the project.

### `npm run build:types`

Generates TypeScript declaration files.

### `npm run clean`

Removes the `dist/` folder to ensure a clean build.

### `npm run format`

Formats the code using Prettier according to the rules defined in package.json.

### `npm run test`

Runs the test suite for the project using Jest.

### `npm run test:watch`

Runs the test suite in watch mode, re-running tests when files change.

### `npm run test:coverage`

Runs the test suite and generates a coverage report.

### `npm run yalc:publish`

Publishes the package to the local Yalc store for local development.

### `npm run yalc:push`

Publishes updates to the package in the local Yalc store and pushes the changes to linked projects.
