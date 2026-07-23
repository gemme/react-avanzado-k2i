import { useState } from 'react';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime';

export function MyAppHook() {
  const [count, setCount] = useState(100);

  /*
  return _jsxs(_Fragment, {
    children: [
      _jsx('button', {
        onClick: () => setCount(count + 1),
        children: '+',
      }),
      _jsx('div', {
        children: 'hello world hooks jsx: count: ' + count,
      }),
    ],
  });
  */
  // jsx -> html
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{'hello world hooks: count: ' + count}</div>
    </>
  );
}
