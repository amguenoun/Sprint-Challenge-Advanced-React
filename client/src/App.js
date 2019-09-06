import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import useAxios from './components/hooks/useAxios';
import PlayerCard from './components/PlayerCard';

function App() {
  const [playerData, setUrl] = useAxios(`http://localhost:5000/api/players`);

  return (
    <div className="App">
      <h1>Women's World Cup Player Search Interest June-July 2019</h1>
      <div className="card-grid">
        {!playerData ? <h2 className="loading">Loading</h2> : playerData.map(player => <PlayerCard player={player} />)}
      </div>
    </div>
  );
}

export default App;
