import './App.css';
import { FormatTitle } from './components/Common/FormatTitle';
import { Wrapper } from './components/Wrapper';
import { MyAppHook } from './components/MyAppHook';

function App() {
  return (
    <div>
      <FormatTitle title={'Ernesto'} />
      <br />
      <Wrapper />
      <MyAppHook />
      
    </div>
  );
}

export default App;
