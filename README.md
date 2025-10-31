![React Feature Toggler](https://public-assets.andrewdyer.rocks/images/covers/react-feature-toggler.png)

# 📦 React Feature Toggler

A package for managing feature toggles in React.  

## 📄 License

Licensed under MIT. Totally free for private or commercial projects.

## ✨ Introduction

React Feature Toggler is a lightweight and easy-to-use library for managing feature toggles in your React applications. It allows you to enable or disable features without deploying new code, making it easier to test and roll out new features incrementally.

## 📥 Installation

To install this package use npm:

```bash
npm install react-feature-toggler
```

Or with Yarn:

```bash
yarn add react-feature-toggler
```

## 🚀 Getting Started

### 1. Define Your Features

Create a file to define your feature toggles. This file will contain an object where the keys are feature names and the values are booleans indicating whether the feature is enabled or disabled:

```ts
// featureToggles.ts
export const featureToggles = {
    newFeature: true,
    anotherFeature: false
};
```

### 2. Wrap Your React App

Wrap your React app in the `FeatureToggleProvider`, passing your feature toggles as a prop. You can also define an optional callback function to handle disabled features:

```tsx
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FeatureToggleProvider } from 'react-feature-toggler';
import { featureToggles } from './featureToggles';
import App from './App';

// Optional: Define a callback function to handle disabled features
const onFeatureDisabled = (featureName: string) => {
  console.log(`Feature ${featureName} is disabled`);
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <FeatureToggleProvider
    featureToggles={featureToggles}
    onFeatureDisabled={onFeatureDisabled}
  >
    <App />
  </FeatureToggleProvider>
);
```

## 📖 Usage

### Use the Hook

Use the `useFeatureToggle` hook to check if a feature is enabled within your components:

```tsx
// App.tsx
import React from 'react';
import { useFeatureToggle } from 'react-feature-toggler';

function App() {
  const { isFeatureEnabled } = useFeatureToggle();

  const newFeatureEnabled = isFeatureEnabled('newFeature');
  const anotherFeatureEnabled = isFeatureEnabled('anotherFeature');

  return (
    <>
      {newFeatureEnabled
        ? 'New Feature enabled'
        : 'New Feature disabled'}

      {anotherFeatureEnabled
        ? 'Another Feature enabled'
        : 'Another Feature disabled'}
    </>
  );
}

export default App;
```

### Use the HOC

Alternatively, use the `withFeatureToggle` higher-order component (HOC) to conditionally render components based on feature toggles:

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
    <>
      {anotherFeatureEnabled
        ? 'Another Feature enabled'
        : 'Another Feature disabled'}
    </>
  );
}

function App() {
  return (
    <>
      <FeatureComponent />
      <div>Always visible content</div>
    </>
  );
}

export default withFeatureToggle('newFeature')(App);
```
