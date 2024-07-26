import React from 'react';
import { useFeatureToggle } from '../../hooks';

const withFeatureToggle =
    (featureName: string) =>
    <P extends object>(Component: React.ComponentType<P>) => {
        return (props: P) => {
            const { isFeatureEnabled } = useFeatureToggle();

            if (!isFeatureEnabled(featureName)) {
                return null;
            }

            return <Component {...props} />;
        };
    };

export default withFeatureToggle;
