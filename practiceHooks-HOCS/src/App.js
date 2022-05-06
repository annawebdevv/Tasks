
import HookUseEffect from './hooks/HookUseEffect';
import HookUseRef from './hooks/HookUseRef';
import HookUseState from './hooks/HookUseState';
import {HookUseMemo} from './hooks/HookUseMemo';
import { HookUseCallback } from './hooks/UseCallback/HookUseCallback';
import { HookUseContext } from './hooks/UseContext/HookUseContext';
import { HookUseInput } from './hooks/customsHooks/HookUseInput';
import { HookUseTheme } from './hooks/customsHooks/HookUseTheme';

import './App.css';

function App() {
  console.log('rer')
  return (
    <div className="App">
   
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
    </div>
  );
}

export default App;
