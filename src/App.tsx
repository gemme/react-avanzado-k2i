import './App.css';
import { FormatTitle } from './components/Common/FormatTitle';
import { Wrapper } from './components/Wrapper';
import { MyAppHook } from './components/MyAppHook';
import { MyAppStarships } from './components/MyAppStarships';

function App() {
  return (
    <div>
      <FormatTitle title={'Ernesto'} />
      <br />
      <Wrapper />
      <MyAppHook />
      <MyAppStarships />
      
    </div>
  );
}

export default App;
