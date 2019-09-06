import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import useAxios from './components/hooks/useAxios';
import PlayerCard from './components/PlayerCard';
import Chart from './components/Chart';
import ClassComponent from './components/ClassComponent';

function App() {
  const [playerData] = useAxios(`http://localhost:5000/api/players`);
  const barInput = playerData.map(player => [player.name, player.searches]);
  return (
    <div className="App">
      <h1>Women's World Cup Player Search Interest June-July 2019</h1>
      <Chart barInput={barInput} />
      <div className="card-grid">
        {!playerData ? <h2 className="loading">Loading</h2> : playerData.map(player => <PlayerCard player={player} />)}
        {/* <ClassComponent /> */}
      </div>
    </div>
  );
}

export default App;
