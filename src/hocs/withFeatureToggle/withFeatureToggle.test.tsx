import { render, screen } from '@testing-library/react';

import withFeatureToggle from './withFeatureToggle';
import { useFeatureToggle } from '../../hooks';

vi.mock('../../hooks', () => ({
  useFeatureToggle: vi.fn(),
}));

const mockUseFeatureToggle = vi.mocked(useFeatureToggle);

const MockComponent = () => {
  return <div>Feature Component</div>;
};

const WrappedComponent = withFeatureToggle('newFeature')(MockComponent);

describe('withFeatureToggle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render the component when the feature is enabled', () => {
    mockUseFeatureToggle.mockReturnValue({
      isFeatureEnabled: (name: string) => name === 'newFeature',
    });

    render(<WrappedComponent />);

    expect(screen.getByText('Feature Component')).toBeInTheDocument();
  });

  test('should not render the component when the feature is disabled', () => {
    mockUseFeatureToggle.mockReturnValue({
      isFeatureEnabled: () => false,
    });

    render(<WrappedComponent />);

    expect(screen.queryByText('Feature Component')).toBeNull();
  });
});
