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

// Optional: Define a callback function to handle disabled features
const onFeatureDisabled = (featureName: string) => {
    console.log(`Feature ${featureName} is disabled`);
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <FeatureToggleProvider featureToggles={featureToggles} onFeatureDisabled={onFeatureDisabled}>
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

