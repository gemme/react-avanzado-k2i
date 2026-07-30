import './App.css';
import './Global.css';
import { FormatTitle } from './components/Common/FormatTitle';
import { MyAppHook } from './components/MyAppHook';
import { Count } from './components/Count';
import { PokemonList } from './components/PokemonList';

function App() {
  return (
    <div>
      <FormatTitle title={'Ernesto'} />
      <br />
      {/* <Wrapper /> */}
      <MyAppHook />
      <Count />
      <PokemonList />
    </div>
  );
}

export default App;
