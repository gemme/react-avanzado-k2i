import type { OptionGroup } from './ProductDetailView';

export const workoutShirtOptionGroups: OptionGroup[] = [
  { name: 'Size', values: ['Small', 'Medium', 'Large'] },
  { name: 'Color', values: ['Green', 'Olive', 'Ocean', 'Purple', 'Red'] },
];

export const workoutShirtDefaultSelected: Record<string, string> = {
  Size: 'Small',
  Color: 'Green',
};

const sampleImage =
  'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-2_large.png';

export const workoutShirtDescription =
  'This high-performance workout shirt made from high-quality Nylon is designed with comfort and durability in mind. Its breathable mesh construction keeps your body temperature regulated while you exercise.';

export const workoutShirtBase = {
  title: 'Workout Shirt',
  handle: 'workout-shirt',
  imageUrl: sampleImage,
  price: { amount: '10.00', currencyCode: 'USD' },
  description: workoutShirtDescription,
  optionGroups: workoutShirtOptionGroups,
  selectedOptions: workoutShirtDefaultSelected,
  quantity: 1,
  cartLineCount: 0,
  canAddToCart: true,
};
