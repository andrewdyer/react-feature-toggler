import React from 'react';

export interface FeatureToggleContextProps {
    isFeatureEnabled: (featureName: string) => boolean;
}

const defaultContext: FeatureToggleContextProps = {
    isFeatureEnabled: () => false
};

const FeatureToggleContext = React.createContext<FeatureToggleContextProps>(defaultContext);

export default FeatureToggleContext;
