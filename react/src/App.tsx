import React from 'react';
import Hello from './components/Hello';
import UseState from './components/UseState';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <UseState />
      <br />
      <br />
      <br/>
      <Hello name="siemah" enthusiasmLevel={2} />
    </div>
  );
}

export default App;
