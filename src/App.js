import logo from './logo.svg';
import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import HookContainer from './components/HookContainer';
import IntervalHook from './components/IntervalHook';
import DataFetching from './components/DataFetching';
import ComponentF from './components/ComponentF';
import ComponentC from './components/ComponentC';
import ComponentE from './components/ComponentE';
import CounterOne from './components/CounterOne';

 export const UserContext=  React.createContext()
 export const ChannelContext=React.createContext()

function App() {
  return (
    <div className="App">
      <CounterTwo/>
      {/* <CounterOne/> */}
      {/* <UserContext.Provider value={'reactjstutorial'}>
        <ChannelContext.Provider value={'codeevlouation'}>
             <ComponentC/>
        </ChannelContext.Provider>
        
      </UserContext.Provider> */}
      {/* <DataFetching/> */}
      {/* <IntervalHook/> */}
      {/* <HookContainer/> */}
      {/* <HookMouse/> */} 
      {/* <HookCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}

    </div>
  );
}

export default App;
