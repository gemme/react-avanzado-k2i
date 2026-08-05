import './App.css';
import './Global.css';
import { MainNav } from './components/Common/MainNav';
import { ProductList } from './components/ProductList';
import { ProductProvider, ProductProviderContext, useProducts } from './providers/ProductsProvider';

/*
const CartSelection = () => {
  const {selectedProduct} = useProducts();

  return <div>Cart selection: {selectedProduct}</div>; 
}
  */

function App() {
  //const {selectedProduct} = useProducts();


  return (
    <div className="app-shell">
      <ProductProvider>
        <ProductProviderContext>
            {
              ({selectedProduct}) => {
                return (
                    <>
                    <MainNav activePath="/products" />
                    <main className="app-shell__main">
                      {/* <CartSelection /> */}
                      <div>Cart selection: {selectedProduct}</div>
                      <ProductList/>
                    </main>
                  </>
                )
              }
            }
          </ProductProviderContext>
        </ProductProvider>
    </div>
  );
}

export default App;
