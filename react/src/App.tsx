import React from 'react';
import Hello from './components/Hello';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello name="siemah" enthusiasmLevel={2} />
    </div>
  );
}

export default App;
