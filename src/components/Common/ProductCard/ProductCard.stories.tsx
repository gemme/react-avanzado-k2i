import type { Meta, StoryObj } from '@storybook/react-vite';
import type { Decorator } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ProductCard } from './ProductCard';

const cardWidthDecorator: Decorator = (Story) => (
  <div style={{ maxWidth: 280, width: '100%' }}>
    <Story />
  </div>
);

const meta = {
  title: 'Common/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [cardWidthDecorator],
  args: {
    title: 'The Collection Snowboard: Liquid',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-1_large.png',
    price: '749.95',
    currencyCode: 'USD',
    onChoose: fn(),
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SinImagen: Story = {
  args: {
    imageUrl: undefined,
    title: 'Producto sin imagen',
    price: '49.00',
    currencyCode: 'USD',
  },
};

export const OtraMoneda: Story = {
  args: {
    title: 'Camiseta básica',
    price: '120.00',
    currencyCode: 'EUR',
  },
};
