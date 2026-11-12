import { useContext } from 'react';

import {
  FeatureToggleContext,
  type FeatureToggleContextProps,
} from '../../contexts';

const useFeatureToggle = (): FeatureToggleContextProps =>
  useContext(FeatureToggleContext);

export default useFeatureToggle;
