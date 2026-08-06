import './ProductDetailView.css';

export type OptionPickerProps = {
  label: string;
  name: string;
  values: string[];
  selectedValue: string;
  onChange: (value: string) => void;
};

export function OptionPicker({
  label,
  name,
  values,
  selectedValue,
  onChange,
}: OptionPickerProps) {
  return (
    <fieldset className="option-picker">
      <legend className="option-picker__legend">{label}</legend>
      <div className="option-picker__options" role="radiogroup" aria-label={label}>
        {values.map((value) => {
          const selected = value === selectedValue;
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={selected}
              name={name}
              className={
                selected
                  ? 'option-picker__pill option-picker__pill--selected'
                  : 'option-picker__pill'
              }
              onClick={() => onChange(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
