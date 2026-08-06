import { ProductDetailView } from './ProductDetailView';
import { useFetchGraphql } from '../../../hooks/useFetchGraphql';
import  { type GetProductByHandleResponse, type SelectedOption, getProductDisplayPrice } from '../../../types/MockShopProduct';
import { query } from '../../../queries/getProductByHandle';
import { MOCK_SHOP_API } from '../../../constants';
import { Spinner } from '../Spinner';
import { useParams } from "react-router";

export type OptionGroup = {
  name: string;
  values: string[];
};

export const ProductDetail = () => {
  let { handle } = useParams();
   
  const { data, loading, error } = useFetchGraphql<GetProductByHandleResponse>({
    url: MOCK_SHOP_API,
    query: query(),
    variables: { handle: handle, variantsFirst: 10 },
    headers: {},
  });

    if(loading){
      return <Spinner />
    }

    if (error) {
      return <p className="product-list__error">{error}</p>;
    }

    const gqlErrors = data?.errors;
    if (gqlErrors?.length) {
      return (
        <p className="product-list__error">
          {gqlErrors[0]?.message ?? 'GraphQL error'}
        </p>
      );
    }

    const product = data?.data?.product;

    if (!product) {
      return <p className="product-list__empty">No product found.</p>;
    }

    const displayPrice = getProductDisplayPrice(product);
    
    let optionGroups: OptionGroup[] = [];

    product.variants.edges.forEach((variant) => {

      const option = variant.node.selectedOptions[0] as SelectedOption;
      
      optionGroups = [...optionGroups, {name: option.name, values: [option.value]}];
    })
    


  return (
    <ProductDetailView 
      title={product.title}
      handle={product.handle}
      imageUrl={product.featuredImage?.url}
      price={displayPrice ?? { amount: '0', currencyCode: 'USD' }}
      description={product.description}
      optionGroups={optionGroups}
      selectedOptions={{}}
      quantity={0}
      cartLineCount={0}
      canAddToCart={true}
      onSelectOption={() =>{}}
      onQuantityChange={() =>{}}
      onAddToCart={() =>{}}
    />
  );
};
