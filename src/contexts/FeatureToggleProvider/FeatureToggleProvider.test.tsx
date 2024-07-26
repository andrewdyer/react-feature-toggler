import React from 'react';
import { render, screen } from '@testing-library/react';
import FeatureToggleProvider from './FeatureToggleProvider';

describe('FeatureToggleProvider', () => {
    it('should render', () => {
        render(<FeatureToggleProvider>Test</FeatureToggleProvider>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
