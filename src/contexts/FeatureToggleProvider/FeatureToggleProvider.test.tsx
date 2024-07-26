import React from 'react';
import { render, screen } from '@testing-library/react';
import FeatureToggleContext from '../FeatureToggleContext';
import FeatureToggleProvider from './FeatureToggleProvider';

const TestComponent: React.FC = () => {
    const { isFeatureEnabled } = React.useContext(FeatureToggleContext);

    const isRegisterEnabled: boolean = isFeatureEnabled('enableRegister');

    return <div>{isRegisterEnabled ? 'Enabled' : 'Disabled'}</div>;
};

const renderComponent = (props: { featureToggles: Record<string, boolean> }) =>
    render(
        <FeatureToggleProvider {...props}>
            <TestComponent />
        </FeatureToggleProvider>
    );

describe('FeatureToggleProvider', () => {
    test('should render register feature when enabled', () => {
        renderComponent({
            featureToggles: {
                enableRegister: true
            }
        });

        expect(screen.getByText('Enabled')).toBeInTheDocument();
    });

    test('should not render register feature when disabled', () => {
        renderComponent({
            featureToggles: {
                enableRegister: false
            }
        });

        expect(screen.getByText('Disabled')).toBeInTheDocument();
    });

    test('should not render register feature by default when undefined', () => {
        renderComponent({
            featureToggles: {}
        });

        expect(screen.getByText('Disabled')).toBeInTheDocument();
    });
});
