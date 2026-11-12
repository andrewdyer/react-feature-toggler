import type { Meta, StoryObj } from '@storybook/react-vite';

import withFeatureToggle from './withFeatureToggle';
import { FeatureToggleProvider } from '../../contexts';

interface BannerProps {
  message: string;
}

const Banner = ({ message }: BannerProps) => <p>{message}</p>;

const ToggledBanner = withFeatureToggle('newBanner')(Banner);

const meta = {
  title: 'HOCs/withFeatureToggle',
  component: ToggledBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    message: 'The new banner is enabled.',
  },
} satisfies Meta<typeof ToggledBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FeatureEnabled: Story = {
  decorators: [
    (Story) => (
      <FeatureToggleProvider featureToggles={{ newBanner: true }}>
        <Story />
      </FeatureToggleProvider>
    ),
  ],
};

export const FeatureDisabled: Story = {
  decorators: [
    (Story) => (
      <FeatureToggleProvider featureToggles={{ newBanner: false }}>
        <Story />
      </FeatureToggleProvider>
    ),
  ],
};
