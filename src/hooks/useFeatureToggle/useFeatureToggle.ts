import React from 'react';
import { FeatureToggleContext, type FeatureToggleContextProps } from '../../contexts';

const useFeatureToggle = (): FeatureToggleContextProps => React.useContext(FeatureToggleContext);

export default useFeatureToggle;
