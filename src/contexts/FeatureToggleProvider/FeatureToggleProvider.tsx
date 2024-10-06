import React, { useMemo } from 'react';
import FeatureToggleContext from '../FeatureToggleContext';

export interface FeatureToggleProviderProps {
    featureToggles: Record<string, boolean>;
    children: React.ReactNode;
    onFeatureDisabled?: (featureName: string) => void;
}

const FeatureToggleProvider: React.FC<FeatureToggleProviderProps> = ({
    children,
    featureToggles,
    onFeatureDisabled
}) => {
    const isFeatureEnabled = useMemo(
        () =>
            (featureName: string): boolean => {
                const enabled = featureToggles[featureName] || false;

                if (!enabled && onFeatureDisabled) {
                    onFeatureDisabled(featureName);
                }

                return enabled;
            },
        [featureToggles, onFeatureDisabled]
    );

    return (
        <FeatureToggleContext.Provider value={{ isFeatureEnabled }}>
            {children}
        </FeatureToggleContext.Provider>
    );
};

export default FeatureToggleProvider;
