import React from 'react';
import FeatureToggleContext from '../FeatureToggleContext';

export interface FeatureToggleProviderProps {
    featureToggles: Record<string, boolean>;
    children: React.ReactNode;
}

const FeatureToggleProvider: React.FC<FeatureToggleProviderProps> = ({
    children,
    featureToggles
}) => {
    const isFeatureEnabled = (featureName: string): boolean => featureToggles[featureName] || false;

    return (
        <FeatureToggleContext.Provider value={{ isFeatureEnabled }}>
            {children}
        </FeatureToggleContext.Provider>
    );
};

export default FeatureToggleProvider;
