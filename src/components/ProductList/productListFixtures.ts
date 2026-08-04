import type { GetProductsResponse, ProductNode } from '../../types/MockShopProduct';

const sampleImage =
  'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-1_large.png';

export function makeProductNode(
  overrides: Partial<ProductNode> & Pick<ProductNode, 'id' | 'title' | 'handle'>,
): ProductNode {
  return {
    description: 'Sample description',
    descriptionHtml: '<p>Sample</p>',
    totalInventory: 10,
    vendor: 'Mock',
    featuredImage: { id: 'img-1', url: sampleImage },
    variants: {
      edges: [
        {
          node: {
            selectedOptions: [{ name: 'Title', value: 'Default' }],
            price: { amount: '749.95', currencyCode: 'USD' },
          },
        },
      ],
    },
    ...overrides,
  };
}

export const mockProductsSuccess: GetProductsResponse = {
  data: {
    products: {
      edges: [
        {
          node: makeProductNode({
            id: 'gid://shopify/Product/1',
            handle: 'snowboard-liquid',
            title: 'The Collection Snowboard: Liquid',
          }),
        },
        {
          node: makeProductNode({
            id: 'gid://shopify/Product/2',
            handle: 'basic-tee',
            title: 'Basic Tee',
            variants: {
              edges: [
                {
                  node: {
                    selectedOptions: [],
                    price: { amount: '29.00', currencyCode: 'USD' },
                  },
                },
              ],
            },
          }),
        },
        {
          node: makeProductNode({
            id: 'gid://shopify/Product/3',
            handle: 'no-image',
            title: 'Sin imagen',
            featuredImage: null,
          }),
        },
      ],
    },
  },
};

export const mockGraphqlErrors: GetProductsResponse = {
  errors: [{ message: 'Field "products" error (demo)' }],
};
