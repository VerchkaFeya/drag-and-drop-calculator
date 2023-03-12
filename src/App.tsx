import React from 'react';
import Canvas from './components/Canvas';
import Mode from './components/Mode';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className="app">
        <Mode />
        <div className="main">
          <Sidebar />
          <Canvas />
        </div>
      </div>
    </>
  );
}

export default App;
