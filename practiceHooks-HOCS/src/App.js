
import HookUseEffect from './hooks/HookUseEffect';
import HookUseRef from './hooks/HookUseRef';
import HookUseState from './hooks/HookUseState';
import {HookUseMemo} from './hooks/HookUseMemo';
import { HookUseCallback } from './hooks/UseCallback/HookUseCallback';
import { HookUseContext } from './hooks/UseContext/HookUseContext';
import { HookUseInput } from './hooks/customsHooks/HookUseInput';
import { HookUseTheme } from './hooks/customsHooks/HookUseTheme';

import './App.css';
import MyReactMemo from './HOCs/ReactMemo';

function App() {
  console.log('rer')
  return (
    <div className="App">
{/*    
      <HookUseState/>
      <hr/>
      <HookUseEffect/>
      <hr />
      <HookUseRef/>
      <hr />
      <HookUseMemo/>
      <hr/>
      <HookUseCallback/>
      <hr/>
      <HookUseContext/>
      <hr/>
      <HookUseInput/>
      <hr/>
      <HookUseTheme/>
      <hr/> */}
      <MyReactMemo />
    </div>
  );
}

export default App;
