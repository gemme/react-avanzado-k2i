import './ProductDetailView.css';

export type QuantityStepperProps = {
  quantity: number;
  min?: number;
  max?: number;
  label?: string;
  onChange: (quantity: number) => void;
};

export function QuantityStepper({
  quantity,
  min = 1,
  max,
  label = 'Quantity',
  onChange,
}: QuantityStepperProps) {
  const decrease = () => onChange(Math.max(min, quantity - 1));
  const increase = () =>
    onChange(max !== undefined ? Math.min(max, quantity + 1) : quantity + 1);

  return (
    <div className="quantity-stepper">
      <span className="quantity-stepper__label" id={`${label}-label`}>
        {label}
      </span>
      <div
        className="quantity-stepper__controls"
        role="group"
        aria-labelledby={`${label}-label`}
      >
        <button
          type="button"
          className="quantity-stepper__btn"
          aria-label="Decrease quantity"
          disabled={quantity <= min}
          onClick={decrease}
        >
          −
        </button>
        <span className="quantity-stepper__value" aria-live="polite">
          {quantity}
        </span>
        <button
          type="button"
          className="quantity-stepper__btn"
          aria-label="Increase quantity"
          disabled={max !== undefined && quantity >= max}
          onClick={increase}
        >
          +
        </button>
      </div>
    </div>
  );
}
