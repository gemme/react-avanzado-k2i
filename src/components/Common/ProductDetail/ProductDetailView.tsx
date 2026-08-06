import { OptionPicker } from './OptionPicker';
import { QuantityStepper } from './QuantityStepper';
import { formatPrice } from './formatPrice';
import './ProductDetailView.css';
import { Spinner } from '../Spinner';
import type {GetProductByHandleData} from '../../../types/MockShopProduct';

export type OptionGroup = {
  name: string;
  values: string[];
};

export type ProductDetailViewProps = {
  title: string;
  handle: string;
  imageUrl?: string;
  price: { amount: string; currencyCode: string };
  description: string;
  optionGroups: OptionGroup[];
  selectedOptions: Record<string, string>;
  quantity: number;
  cartLineCount?: number;
  canAddToCart?: boolean;
  onSelectOption: (optionName: string, value: string) => void;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
};

export function ProductDetailView({
  title,
  handle,
  imageUrl,
  price,
  description,
  optionGroups,
  selectedOptions,
  quantity,
  cartLineCount = 0,
  canAddToCart = true,
  onSelectOption,
  onQuantityChange,
  onAddToCart,
}: ProductDetailViewProps) {


  const formattedPrice = formatPrice(price.amount, price.currencyCode);
  const addLabel =
    cartLineCount > 0 ? `Add to cart (${cartLineCount})` : 'Add to cart';

  return (
    <article className="product-detail">
      <div className="product-detail__grid">
        <div className="product-detail__media">
          {imageUrl ? (
            <img
              className="product-detail__image"
              src={imageUrl}
              alt={title}
            />
          ) : (
            <div className="product-detail__placeholder" aria-hidden />
          )}
        </div>

        <div className="product-detail__info">
          <p className="product-detail__handle">{handle}</p>
          <h1 className="product-detail__title">{title}</h1>
          <p className="product-detail__price">{formattedPrice}</p>

          {optionGroups.map((group: OptionGroup, i) => (
            <OptionPicker
              key={group.name + i}
              label={group.name}
              name={group.name}
              values={group.values}
              selectedValue={selectedOptions[group.name] ?? group.values[0] ?? ''}
              onChange={(value) => onSelectOption(group.name, value)}
            />
          ))}

          <QuantityStepper quantity={quantity} onChange={onQuantityChange} />

          <button
            type="button"
            className="product-detail__add"
            disabled={!canAddToCart}
            onClick={onAddToCart}
          >
            {addLabel}
          </button>
        </div>
      </div>

      <section className="product-detail__description" aria-label="Description">
        <h2 className="product-detail__description-heading">Description</h2>
        <p>{description}</p>
      </section>
    </article>
  );
}
