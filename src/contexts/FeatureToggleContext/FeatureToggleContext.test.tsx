import { render, screen } from '@testing-library/react';
import { useContext } from 'react';

import FeatureToggleContext from './FeatureToggleContext';

const TestComponent = () => {
  const { isFeatureEnabled } = useContext(FeatureToggleContext);

  return <div>{isFeatureEnabled('anyFeature') ? 'Enabled' : 'Disabled'}</div>;
};

describe('FeatureToggleContext', () => {
  test('should report every feature as disabled by default', () => {
    render(<TestComponent />);

    expect(screen.getByText('Disabled')).toBeInTheDocument();
  });

  test('should provide the value passed to its provider', () => {
    render(
      <FeatureToggleContext.Provider value={{ isFeatureEnabled: () => true }}>
        <TestComponent />
      </FeatureToggleContext.Provider>
    );

    expect(screen.getByText('Enabled')).toBeInTheDocument();
  });
});
