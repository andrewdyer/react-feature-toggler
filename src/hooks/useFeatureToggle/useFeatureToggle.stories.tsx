import type { Meta, StoryObj } from '@storybook/react-vite';

import useFeatureToggle from './useFeatureToggle';
import { FeatureToggleProvider } from '../../contexts';

interface FeatureStatusProps {
  feature: string;
}

const FeatureStatus = ({ feature }: FeatureStatusProps) => {
  const { isFeatureEnabled } = useFeatureToggle();

  return (
    <p>
      {feature}: {isFeatureEnabled(feature) ? 'enabled' : 'disabled'}
    </p>
  );
};

const meta = {
  title: 'Hooks/useFeatureToggle',
  component: FeatureStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <FeatureToggleProvider featureToggles={{ newDashboard: true }}>
        <Story />
      </FeatureToggleProvider>
    ),
  ],
} satisfies Meta<typeof FeatureStatus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    feature: 'newDashboard',
  },
};

export const Disabled: Story = {
  args: {
    feature: 'betaSearch',
  },
};
