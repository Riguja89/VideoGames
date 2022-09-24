import React from 'react';
import './GameCard.css'
const GameCard = (props) => {
    
    return (
        <div className="GameCard">
          <img src={props.image} alt="" />
          {/* <p>ID: {props.id}</p> */}
          <label> Name: {props.name} </label>
          <label> Genres: {props.genres.map((genre)=>{return(
              <p key={genre.id}>{genre.name}, </p>
          )})} </label>
        </div>
    );
};

export default GameCard;