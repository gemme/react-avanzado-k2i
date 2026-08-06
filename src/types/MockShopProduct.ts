/** Shopify Storefront API – MoneyV2 */
export type Money = {
  amount: string;
  currencyCode: string;
};

export type SelectedOption = {
  name: string;
  value: string;
};

export type ProductVariantImage = {
  url: string;
};

/** List query may omit id/image; getProductByHandle returns full variant fields */
export type ProductVariantNode = {
  id?: string;
  title?: string;
  selectedOptions: SelectedOption[];
  price: Money;
  image?: ProductVariantImage | null;
};

export type ProductImage = {
  id: string;
  url: string;
};

export type ProductNode = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  totalInventory: number;
  vendor: string;
  featuredImage: ProductImage | null;
  variants: {
    edges: Array<{ node: ProductVariantNode }>;
  };
};

export type ProductsConnection = {
  edges: Array<{ node: ProductNode }>;
};

/** Respuesta `data` de la query getProducts */
export type GetProductsData = {
  products: ProductsConnection;
};

/** Envelope estándar GraphQL */
export type GraphqlResponse<TData> = {
  data?: TData;
  errors?: Array<{ message: string }>;
};

export type GetProductsResponse = GraphqlResponse<GetProductsData>;

/** Respuesta `data` de getProductByHandle */
export type GetProductByHandleData = {
  product: ProductNode | null;
};

export type GetProductByHandleResponse =
  GraphqlResponse<GetProductByHandleData>;

/** Precio de la primera variante (para ProductCard) */
export function getProductDisplayPrice(product: ProductNode): Money | undefined {
  return product.variants.edges[0]?.node.price;
}
