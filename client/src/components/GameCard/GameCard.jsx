import React from 'react';
import './GameCard.css'
const GameCard = (props) => {
    
    return (
        <div className="GameCard">
          <img className='cardimage' src={props.image} alt="" />
          {/* <p>ID: {props.id}</p> */}
          
          <h1 className='namegame'> {props.name} </h1><br />
          <p className='genregame'> Genres: {props.genres.map((genre,i)=>{return(
              <label key={genre.id}>{genre.name}
              {props.genres.length===i+1?".":","} </label>
          )})} </p>
        </div>
    );
};

export default GameCard;