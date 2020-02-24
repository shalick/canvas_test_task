import React from 'react';
import './App.css';
import Canvas from "./components/Canvas";

const input = {
    c : {
        w: 20,
        h: 4
    },
    l : [[1, 2, 6, 2],
        [6, 3, 6, 4]],
    r : [16, 1, 20, 3],
    b : [10, 3, 'o']
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas input={input}/>
      </header>
    </div>
  );
}

export default App;
