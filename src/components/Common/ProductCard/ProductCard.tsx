import './ProductCard.css';

export type ProductCardProps = {
  title: string;
  imageUrl?: string;
  price: string;
  currencyCode: string;
  onChoose?: () => void;
};

function formatPrice(amount: string, currencyCode: string): string {
  const value = Number.parseFloat(amount);
  if (Number.isNaN(value)) {
    return `${amount} ${currencyCode}`;
  }
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
    }).format(value);
  } catch {
    return `$${amount}`;
  }
}

export function ProductCard({
  title,
  imageUrl,
  price,
  currencyCode,
  onChoose,
}: ProductCardProps) {
  const formattedPrice = formatPrice(price, currencyCode);

  return (
    <article className="product-card">
      <div className="product-card__media">
        {imageUrl ? (
          <img
            className="product-card__image"
            src={imageUrl}
            alt={title}
            loading="lazy"
          />
        ) : (
          <div className="product-card__placeholder" aria-hidden />
        )}
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">{formattedPrice}</p>
        <button
          type="button"
          className="product-card__choose"
          onClick={onChoose}
        >
          Choose
        </button>
      </div>
    </article>
  );
}
