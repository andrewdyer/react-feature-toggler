import type { Meta, StoryObj } from '@storybook/react-vite';
import { useContext } from 'react';
import { fn } from 'storybook/test';

import FeatureToggleProvider from './FeatureToggleProvider';
import FeatureToggleContext from '../FeatureToggleContext';

const FeatureList = () => {
  const { isFeatureEnabled } = useContext(FeatureToggleContext);

  return (
    <ul>
      {['newDashboard', 'betaSearch', 'darkMode'].map((feature) => (
        <li key={feature}>
          {feature}: {isFeatureEnabled(feature) ? 'enabled' : 'disabled'}
        </li>
      ))}
    </ul>
  );
};

const meta = {
  title: 'Contexts/FeatureToggleProvider',
  component: FeatureToggleProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    featureToggles: {
      newDashboard: true,
      betaSearch: false,
      darkMode: true,
    },
    onFeatureDisabled: fn(),
    children: <FeatureList />,
  },
} satisfies Meta<typeof FeatureToggleProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllDisabled: Story = {
  args: {
    featureToggles: {},
  },
};
