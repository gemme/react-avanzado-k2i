import './App.css';
import { FormatTitle } from './components/Common/FormatTitle';
import { Wrapper } from './components/Wrapper';
import { MyAppHook } from './components/MyAppHook';
import { MyAppStarships } from './components/MyAppStarships';
import { MyAppHomeWork } from './components/MyAppHomeWork';
import { PlanetsList } from './components/PlanetsList';

function App() {
  return (
    <div>
      <FormatTitle title={'Ernesto'} />
      <br />
      <Wrapper />
      <MyAppHook />
      <MyAppStarships />
      <MyAppHomeWork />
      <PlanetsList />
    </div>
  );
}

export default App;
