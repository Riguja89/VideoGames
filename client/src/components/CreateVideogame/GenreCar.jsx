import React from 'react';
//import './GameCard.css'
const GenreCard = (props) => {
    
    return (
        <div className="GenreCard">
            <label>Name: {props.name}</label>
          <button >X</button>
        </div>
    );
};

export default GenreCard;