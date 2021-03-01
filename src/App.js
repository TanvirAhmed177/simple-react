import "./App.css";
import React, { useEffect, useState } from "react";
import Player from "./components/Player/Player";
import Selected from "./components/Selected/Selected";
import fakeData from "./fakeData/fakeData";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    setPlayers(fakeData);
  }, []);
  const handleAddPlayer = (player) => {
    const newSelected = [...selected, player];
    setSelected(newSelected);
  };
  return (
    <div className="App">
      <h1>Total Player: {players.length}</h1>
      <h1>Players Added: {selected.length}</h1>
      <Selected selected={selected}></Selected>
      <>
        {players.map((player) => (
          <Player
            player={player}
            key={player.id}
            handleAddPlayer={handleAddPlayer}
          ></Player>
        ))}
      </>
    </div>
  );
}

export default App;
