import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';

import { ProductList, ProductListView } from './ProductList';
import { mockGraphqlErrors, mockProductsSuccess } from './productListFixtures';

const pageWidthDecorator: Decorator = (Story) => (
  <div style={{ maxWidth: 960, width: '100%', padding: '1rem' }}>
    <Story />
  </div>
);

const meta = {
  title: 'Components/ProductList',
  component: ProductListView,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [pageWidthDecorator],
} satisfies Meta<typeof ProductListView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Grid: Story = {
  args: {
    loading: false,
    error: '',
    response: mockProductsSuccess,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    error: '',
  },
};

export const ErrorFetch: Story = {
  args: {
    loading: false,
    error: 'Graphql request error',
  },
};

export const GraphQLError: Story = {
  args: {
    loading: false,
    error: '',
    response: mockGraphqlErrors,
  },
};

export const Empty: Story = {
  args: {
    loading: false,
    error: '',
    response: { data: { products: { edges: [] } } },
  },
};

export const LiveApi: Story = {
  render: () => <ProductList />,
};
