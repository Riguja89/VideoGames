import React from 'react';
import './GameCard.css'
const GameCard = (props) => {
    
    return (
        <div className="GameCard">
          <img src={props.image} alt="" />
          <p>ID: {props.id}</p>
          <p>Name: {props.name}</p>
        </div>
    );
};

export default GameCard;