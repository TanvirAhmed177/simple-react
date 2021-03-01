import React from "react";
import "./Selected.css";

const Selected = (props) => {
  console.log(props);
  const selected = props.selected;

  const totalPlayers = selected.reduce(
    (sum, player) => sum + player.market_value,
    0
  );

  return (
    <div className="selected-container">
      <h2>Selected Players:</h2>
      <ol>
        {selected.map((select) => (
          <li>
            <b>{select.name}</b>-<b>${select.market_value}m</b>
          </li>
        ))}
      </ol>
      <h2>Total Cost: ${totalPlayers}m </h2>
    </div>
  );
};

export default Selected;
