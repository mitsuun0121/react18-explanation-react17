import React, { useEffect } from 'react';

import './App.css';
import { AutoBatchEventHandler } from './components/AutoBachEventHandler';

function App() {
  useEffect(() => {
    console.log('useEffect！！');
   }, []);
  return (
    <div className="App">
      <AutoBatchEventHandler />
    </div>
  );
}

export default App;
