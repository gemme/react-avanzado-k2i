import { query } from '../../queries/getProducts';
import { useFetchGraphql } from '../../hooks/useFetchGraphql';
import {
  getProductDisplayPrice,
  type GetProductsResponse,
} from '../../types/MockShopProduct';
import { ProductCard } from '../Common/ProductCard';
import { Spinner } from '../Common/Spinner';
import './ProductList.css';

const MOCK_SHOP_API = 'https://mock.shop/api';

const productsVariables = {
  productsFirst: 12,
  variantsFirst: 1,
};

export type ProductListViewProps = {
  loading: boolean;
  error: string;
  response?: GetProductsResponse;
};

export function ProductListView({
  loading,
  error,
  response,
}: ProductListViewProps) {
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p className="product-list__error">{error}</p>;
  }

  const gqlErrors = response?.errors;
  if (gqlErrors?.length) {
    return (
      <p className="product-list__error">
        {gqlErrors[0]?.message ?? 'GraphQL error'}
      </p>
    );
  }

  const products = response?.data?.products.edges ?? [];

  if (products.length === 0) {
    return <p className="product-list__empty">No products found.</p>;
  }

  return (
    <section className="product-list" aria-labelledby="product-list-heading">
      <h2 id="product-list-heading" className="product-list__heading">
        Products
      </h2>
      <ul className="product-list__grid">
        {products.map(({ node }) => {
          const displayPrice = getProductDisplayPrice(node);

          return (
            <li key={node.id} className="product-list__item">
              <ProductCard
                title={node.title}
                imageUrl={node.featuredImage?.url}
                price={displayPrice?.amount ?? '0'}
                currencyCode={displayPrice?.currencyCode ?? 'USD'}
                onChoose={() => {
                  console.log('Choose', node.handle);
                }}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function ProductList() {
  const { data, loading, error } = useFetchGraphql<GetProductsResponse>({
    url: MOCK_SHOP_API,
    query: query(),
    variables: productsVariables,
    headers: {},
  });

  return (
    <ProductListView loading={loading} error={error} response={data} />
  );
}
