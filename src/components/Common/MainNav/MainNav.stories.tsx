import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';

import { MainNav } from './MainNav';

const shellDecorator: Decorator = (Story) => (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <Story />
    <div
      style={{
        flex: 1,
        padding: '1.5rem',
        background: '#fafafa',
        color: '#71717a',
      }}
    >
      Page content preview
    </div>
  </div>
);

const meta = {
  title: 'Common/MainNav',
  component: MainNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [shellDecorator],
} satisfies Meta<typeof MainNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activePath: '/products',
  },
};

export const HomeActive: Story = {
  args: {
    activePath: '/',
  },
};

export const MobileClosed: Story = {
  args: {
    activePath: '/products',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const MobileOpen: Story = {
  args: {
    activePath: '/products',
    initialMobileOpen: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
