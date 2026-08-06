import './App.css';
import './Global.css';
import { MainNav } from './components/Common/MainNav';
import { Outlet } from "react-router";



function App() {

  return (
    <div className="app-shell">
      <>
        <MainNav activePath="/" />
        <main className="app-shell__main">
          <Outlet />
        </main>
      </>
    </div>
  );
}

export default App;
