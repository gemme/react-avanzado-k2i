import './App.css';
import './Global.css';
import { FormatTitle } from './components/Common/FormatTitle';
import { Wrapper } from './components/Wrapper';
import { MyAppHook } from './components/MyAppHook';
import { Count } from './components/Count';
import { PeopleList } from './components/PeopleList';

function App() {
  return (
    <div>
      <FormatTitle title={'Ernesto'} />
      <br />
      {/* <Wrapper /> */}
      <MyAppHook />
      <Count />
      <PeopleList />
    </div>
  );
}

export default App;
