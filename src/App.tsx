import React from 'react';
import Canvas from './components/Canvas';
import Mode from './components/Mode';
import Numbers from './components/Numbers';
import Operators from './components/Operators';
import ResultButton from './components/ResultButton';
import Screen from './components/Screen';
import { ImageIcon } from './svg';

function App() {
  return (
    <>
      <div className="app">
        <Mode />
        <div className="main">
          <div className="sidebar">
            <Screen type="sidebar-type" />
            <Operators type="sidebar-type" />
            <Numbers type="sidebar-type" />
            <ResultButton type="sidebar-type" />
          </div>
          <Canvas />
        </div>
      </div>
    </>
  );
}

export default App;
