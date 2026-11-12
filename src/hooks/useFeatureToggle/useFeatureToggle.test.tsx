import { renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';

import useFeatureToggle from './useFeatureToggle';
import { FeatureToggleProvider } from '../../contexts';

describe('useFeatureToggle', () => {
  test('should report features from the nearest provider', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <FeatureToggleProvider
        featureToggles={{ enabled: true, disabled: false }}
      >
        {children}
      </FeatureToggleProvider>
    );

    const { result } = renderHook(() => useFeatureToggle(), { wrapper });

    expect(result.current.isFeatureEnabled('enabled')).toBe(true);
    expect(result.current.isFeatureEnabled('disabled')).toBe(false);
  });

  test('should report features as disabled outside a provider', () => {
    const { result } = renderHook(() => useFeatureToggle());

    expect(result.current.isFeatureEnabled('enabled')).toBe(false);
  });
});
