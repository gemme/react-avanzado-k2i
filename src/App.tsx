import './App.css';
import { FormatTitle } from './components/Common/FormatTitle';
import { Wrapper } from './components/Wrapper';
import { MyAppHook } from './components/MyAppHook';
import { MyAppStarships } from './components/MyAppStarships';
import { MyAppHomeWork } from './components/MyAppHomeWork';

function App() {
  return (
    <div>
      <FormatTitle title={'Ernesto'} />
      <br />
      <Wrapper />
      <MyAppHook />
      <MyAppStarships />
      <MyAppHomeWork />
      
    </div>
  );
}

export default App;
