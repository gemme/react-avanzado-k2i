import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useState } from 'react';

import { ProductDetailView } from './ProductDetailView';
import { workoutShirtBase } from './productDetailFixtures';

function ProductDetailInteractive({
  initialCartLineCount = 0,
  canAddToCart = true,
}: {
  initialCartLineCount?: number;
  canAddToCart?: boolean;
}) {
  const [selectedOptions, setSelectedOptions] = useState(
    workoutShirtBase.selectedOptions,
  );
  const [quantity, setQuantity] = useState(workoutShirtBase.quantity);
  const [cartLineCount, setCartLineCount] = useState(initialCartLineCount);

  return (
    <ProductDetailView
      title={workoutShirtBase.title}
      handle={workoutShirtBase.handle}
      imageUrl={workoutShirtBase.imageUrl}
      price={workoutShirtBase.price}
      description={workoutShirtBase.description}
      optionGroups={workoutShirtBase.optionGroups}
      selectedOptions={selectedOptions}
      quantity={quantity}
      cartLineCount={cartLineCount}
      canAddToCart={canAddToCart}
      onSelectOption={(name, value) =>
        setSelectedOptions((prev) => ({ ...prev, [name]: value }))
      }
      onQuantityChange={setQuantity}
      onAddToCart={() => setCartLineCount((c) => c + quantity)}
    />
  );
}

const meta = {
  title: 'Common/ProductDetail',
  component: ProductDetailView,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductDetailView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ProductDetailInteractive />,
};

export const WithCartCount: Story = {
  render: () => <ProductDetailInteractive initialCartLineCount={3} />,
};

export const AddDisabled: Story = {
  render: () => <ProductDetailInteractive canAddToCart={false} />,
};

export const Mobile: Story = {
  render: () => <ProductDetailInteractive />,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export const StaticSnapshot: Story = {
  args: {
    ...workoutShirtBase,
    onSelectOption: fn(),
    onQuantityChange: fn(),
    onAddToCart: fn(),
  },
};
