import React from 'react';

export interface FeatureToggleContextProps {}

const FeatureToggleContext = React.createContext<FeatureToggleContextProps>({});

export default FeatureToggleContext;
