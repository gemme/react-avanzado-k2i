export type NavItem = {
  label: string;
  to: string;
  end?: boolean;
};

export const defaultNavItems: NavItem[] = [
  { label: 'Home', to: '/', end: true },
  { label: 'Cart', to: '/cart' },
];

export const STORE_BRAND = 'My Ecom';
