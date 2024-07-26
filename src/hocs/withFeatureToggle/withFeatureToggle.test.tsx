import React from 'react';
import { render, screen } from '@testing-library/react';
import { useFeatureToggle } from '../../hooks';
import withFeatureToggle from './withFeatureToggle';

jest.mock('../../hooks', () => ({
    useFeatureToggle: jest.fn()
}));

const mockUseFeatureToggle = useFeatureToggle as jest.Mock;

const MockComponent: React.FC = () => {
    return <div>Feature Component</div>;
};

const WrappedComponent = withFeatureToggle('newFeature')(MockComponent);

describe('withFeatureToggle', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should render the component when the feature is enabled', () => {
        mockUseFeatureToggle.mockReturnValue({
            isFeatureEnabled: (name: string) => name === 'newFeature'
        });

        render(<WrappedComponent />);

        expect(screen.getByText('Feature Component')).toBeInTheDocument();
    });

    test('should not render the component when the feature is disabled', () => {
        mockUseFeatureToggle.mockReturnValue({
            isFeatureEnabled: () => false
        });

        render(<WrappedComponent />);

        expect(screen.queryByText('Feature Component')).toBeNull();
    });
});
