import React from 'react';
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
            <Screen />
            <Operators />
            <Numbers />
            <ResultButton />
          </div>
          <div className="canvas canvas_empty">
            <ImageIcon />
            <p>
              <span>Перетащите сюда</span>любой элемент
              <br />
              из левой панели
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
