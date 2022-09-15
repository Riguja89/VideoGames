import React from 'react';

const GameCard = (props) => {
    
    return (
        <div>
          Game Card
          <img src={props.image} alt="" />
          <p>ID: {props.id}</p>
          <p>Name: {props.name}</p>
        </div>
    );
};

export default GameCard;