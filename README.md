![React Feature Toggler](https://github.com/andrewdyer/andrewdyer/blob/main/assets/images/covers/react-feature-toggler.png?raw=true)

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
  </FeatureToggleProvider>,
  document.getElementById('root')
);
```

## 📖 Usage

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
