# React Feature Toggler

A feature toggle library for React applications that enables or disables features through a provider, hook and higher-order component.

## Introduction

This library holds a map of feature names to boolean states in a React context supplied by a provider. Each lookup resolves to the configured state, treating any undefined feature as disabled, and an optional callback is invoked whenever a disabled feature is checked. Components read feature states through a hook, or are wrapped in a higher-order component that renders nothing while its feature is disabled.

## Prerequisites

- **[React](https://react.dev/)**: Version 19.2 or later, together with React DOM, installed as peer dependencies.

## Installation

```bash
npm install react-feature-toggler
```

```bash
yarn add react-feature-toggler
```

```bash
pnpm add react-feature-toggler
```

## Getting Started

Wrap the application in a feature toggle provider.

1. Define the feature toggles as an object mapping each feature name to a boolean:

   ```ts
   export const featureToggles = {
     newDashboard: true,
     betaSearch: false,
   };
   ```

2. Render `FeatureToggleProvider` at the root of the application, passing the toggles and, optionally, a callback for disabled features:

   ```tsx
   import { createRoot } from 'react-dom/client';
   import { FeatureToggleProvider } from 'react-feature-toggler';

   import App from './App';
   import { featureToggles } from './featureToggles';

   createRoot(document.getElementById('root')!).render(
     <FeatureToggleProvider
       featureToggles={featureToggles}
       onFeatureDisabled={(featureName) =>
         console.info(`${featureName} is disabled`)
       }
     >
       <App />
     </FeatureToggleProvider>
   );
   ```

## Usage

Feature states are read with a hook or applied declaratively with a higher-order component.

### Checking a feature with the hook

`useFeatureToggle` returns an `isFeatureEnabled` function that resolves a feature name to its current state.

```tsx
import { useFeatureToggle } from 'react-feature-toggler';

const SearchBar = () => {
  const { isFeatureEnabled } = useFeatureToggle();

  return isFeatureEnabled('betaSearch') ? <BetaSearch /> : <ClassicSearch />;
};
```

Outside a `FeatureToggleProvider`, every feature resolves as disabled.

### Gating a component with the higher-order component

`withFeatureToggle` renders the wrapped component only when the named feature is enabled, and renders nothing otherwise.

```tsx
import { withFeatureToggle } from 'react-feature-toggler';

const Dashboard = () => <div>New dashboard</div>;

export default withFeatureToggle('newDashboard')(Dashboard);
```

### Handling disabled features

The `onFeatureDisabled` callback receives the feature name each time a disabled or undefined feature is checked, which suits logging or analytics.

```tsx
<FeatureToggleProvider
  featureToggles={{ betaSearch: false }}
  onFeatureDisabled={(featureName) => console.warn(`${featureName} is off`)}
>
  <App />
</FeatureToggleProvider>
```

## License

Licensed under the [MIT License](LICENSE).
