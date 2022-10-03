import React from 'react';
import './GameCard.css'
const GameCard = (props) => {
    let start=[]
    for(var i=1;i<=Math.round(props.rating);i++){start.push("✰")}
    return (
    
        <div className="GameCard">
          <img className='cardimage' src={props.image} alt="" />
          {/* <p>ID: {props.id}</p> */}
          
          <h1 className='namegame'> {props.name} </h1>
          <p className='genregame'>{props.genres.map((genre,i)=>{return(
              <label key={genre.id}>{genre.name}
              {props.genres.length===i+1?".":","} </label>
          )})} </p>
          <div className='rating' >
         {start.map((s,i)=>(<label key={i}>{s}</label>))}
         </div>
        </div>
    );
};

export default GameCard;