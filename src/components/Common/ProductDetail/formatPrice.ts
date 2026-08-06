export function formatPrice(amount: string, currencyCode: string): string {
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
