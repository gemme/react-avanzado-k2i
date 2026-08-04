import { useId, useState } from 'react';

import { defaultNavItems, STORE_BRAND, type NavItem } from './navItems';
import './MainNav.css';

export type MainNavProps = {
  items?: NavItem[];
  activePath?: string;
  brandName?: string;
  brandTo?: string;
  initialMobileOpen?: boolean;
};

function isActiveItem(item: NavItem, activePath: string): boolean {
  if (item.end) {
    return activePath === item.to;
  }
  if (activePath === item.to) {
    return true;
  }
  return activePath.startsWith(`${item.to}/`);
}

export function MainNav({
  items = defaultNavItems,
  activePath = '',
  brandName = STORE_BRAND,
  brandTo = '/',
  initialMobileOpen = false,
}: MainNavProps) {
  const [mobileOpen, setMobileOpen] = useState(initialMobileOpen);
  const panelId = useId();

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <button
        type="button"
        className="main-nav__menu-button"
        aria-expanded={mobileOpen}
        aria-controls={panelId}
        onClick={() => setMobileOpen((open) => !open)}
      >
        Menu
      </button>

      {mobileOpen ? (
        <button
          type="button"
          className="main-nav__backdrop"
          aria-label="Close menu"
          onClick={closeMobile}
        />
      ) : null}

      <aside
        id={panelId}
        className={mobileOpen ? 'main-nav main-nav--open' : 'main-nav'}
      >
        <a className="main-nav__brand" href={brandTo} onClick={closeMobile}>
          {brandName}
        </a>

        <nav aria-label="Primary">
          <ul className="main-nav__list">
            {items.map((item) => {
              const active = isActiveItem(item, activePath);

              return (
                <li key={item.to}>
                  <a
                    href={item.to}
                    className={
                      active
                        ? 'main-nav__link main-nav__link--active'
                        : 'main-nav__link'
                    }
                    aria-current={active ? 'page' : undefined}
                    onClick={closeMobile}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
