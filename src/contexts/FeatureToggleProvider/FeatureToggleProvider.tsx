import React from 'react';
import FeatureToggleContext from '../FeatureToggleContext';

export interface FeatureToggleProviderProps {
    children: React.ReactNode;
}

const FeatureToggleProvider: React.FC<FeatureToggleProviderProps> = ({ children }) => {
    return <FeatureToggleContext.Provider value={{}}>{children}</FeatureToggleContext.Provider>;
};

export default FeatureToggleProvider;
