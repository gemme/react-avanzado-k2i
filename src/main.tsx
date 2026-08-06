import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProductProvider } from './providers/ProductsProvider';
import { BrowserRouter, Routes, Route } from "react-router";
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { ProductDetail } from './components/Common/ProductDetail/ProductDetail.tsx';
// useEffect x 2
// para evitar bugs

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <ProductProvider>
          <BrowserRouter>
            <Routes>  
            <Route path="/" element={<App />}>
              <Route index element={<ProductList />} />
              <Route path='/product-detail/:handle' element={<ProductDetail />} />
              <Route path='/cart' element={<Cart />} />
              </Route>
            </Routes>           
          </BrowserRouter>
        </ProductProvider>
  </StrictMode>,
)
