import React from 'react';
import './App.css';

import useAxios from './components/hooks/useAxios';

function App() {
  const [playerData, setUrl] = useAxios(`http://localhost:5000/api/players`);

  return (
    <div className="App">
      Hey
    </div>
  );
}

export default App;
