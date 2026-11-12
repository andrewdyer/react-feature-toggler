import { createContext } from 'react';
import type * as React from 'react';

export interface FeatureToggleContextProps {
  isFeatureEnabled: (featureName: string) => boolean;
}

const defaultContext: FeatureToggleContextProps = {
  isFeatureEnabled: () => false,
};

const FeatureToggleContext: React.Context<FeatureToggleContextProps> =
  createContext<FeatureToggleContextProps>(defaultContext);

export default FeatureToggleContext;
