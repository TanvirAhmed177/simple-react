import React from "react";
import "./Player.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  const {
    name,
    country,
    jersey_no,
    position,
    img,
    market_value,
  } = props.player;
  const handleAddPlayer = props.handleAddPlayer;
  return (
    <div className="player-container">
      <img src={img} alt="" />
      <h3>Name: {name}</h3>
      <p>Nationality: {country}</p>
      <p>Jersey No: {jersey_no}</p>
      <p>Position: {position}</p>
      <p>Price: ${market_value}m</p>
      <Button
        variant="info"
        className="add-btn"
        onClick={() => handleAddPlayer(props.player)}
      >
        <FontAwesomeIcon className="icon" icon={faUserPlus} />
        Add Player
      </Button>
    </div>
  );
};

export default Player;
