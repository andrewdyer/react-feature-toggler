# React Feature Toggler

A package to help you implement feature toggles in your React app.

## License

Licensed under MIT. Totally free for private or commercial projects.

## Getting Started

To install this package use npm:

```bash
npm install react-feature-toggler
```

## Usage

### Define Your Features

Create a file to define your feature toggles:

```ts
// featureToggles.ts
export const featureToggles = {
    newFeature: true,
    anotherFeature: false
};
```

### Wrap Your React App

Wrap your React app in the `FeatureToggleProvider`, passing your feature toggles as a prop:

```tsx
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FeatureToggleProvider } from 'react-feature-toggler';
import { featureToggles } from './featureToggles';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <FeatureToggleProvider featureToggles={featureToggles}>
        <App />
    </FeatureToggleProvider>,
    document.getElementById('root')
);
```

### Use the Hook

Use the `useFeatureToggle` hook to check if a feature is enabled:

```tsx
// App.tsx
import React from 'react';
import { useFeatureToggle } from 'react-feature-toggler';

function App() {
    const { isFeatureEnabled } = useFeatureToggle();

    const newFeatureEnabled = isFeatureEnabled('newFeature');
    const anotherFeatureEnabled = isFeatureEnabled('anotherFeature');

    return (
        <div>
            {newFeatureEnabled ? 'New Feature enabled' : 'New Feature disabled'}
            {anotherFeatureEnabled ? 'Another Feature enabled' : 'Another Feature disabled'}
        </div>
    );
}

export default App;
```

### Use the HOC

Alternatively, use the withFeatureToggle higher-order component (HOC):

```tsx
// App.tsx
import React from 'react';
import { withFeatureToggle } from 'react-feature-toggler';

function App() {
    return <div>Feature enabled</div>;
}

export default withFeatureToggle('newFeature')(App);
```

### Combining Both Methods

You can combine both methods to enable different parts of your app conditionally:

```tsx
// App.tsx
import React from 'react';
import { useFeatureToggle, withFeatureToggle } from 'react-feature-toggler';

function FeatureComponent() {
    const { isFeatureEnabled } = useFeatureToggle();
    const anotherFeatureEnabled = isFeatureEnabled('anotherFeature');

    return (
        <div>{anotherFeatureEnabled ? 'Another Feature enabled' : 'Another Feature disabled'}</div>
    );
}

function App() {
    return (
        <div>
            <FeatureComponent />
            <div>Always visible content</div>
        </div>
    );
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
yalc add react-feature-toggler
```

This will install the package from the local Yalc store. You can now use it in the project as you would with any other npm package.

### Updating the Package with Yalc

After publishing changes to this package to the local Yalc store, navigate to the project directory and run:

```bash
yalc update react-feature-toggler
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

## Publishing

This repository is configured to publish the package to npm, every time you publish a new release, using GitHub Actions.

### Enabling Publishing

### Creating and Using an npm Token

To publish the package, you need an npm token:

1. Log in to your npm account.
2. Navigate to Access Tokens in your npm account settings.
3. Generate a new token with the Automation option, especially if you have 2FA enabled.
4. Add the token to your GitHub repository secrets:
    - Go to Settings > Secrets and variables > Actions.
    - Add a new secret named `NPM_TOKEN` and paste your npm token.
