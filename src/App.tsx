import './App.css';
import './Global.css';
import { MainNav } from './components/Common/MainNav';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="app-shell">
      <MainNav activePath="/products" />
      <main className="app-shell__main">
        <ProductList />
      </main>
    </div>
  );
}

export default App;
