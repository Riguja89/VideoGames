import React from 'react';
//import './GameCard.css'

const GenreCard = (props) => {

    const deletegenre=()=>{
        props.deleteGenre(props.id);
    }
    
    return (
        <div className="GenreCard">
            <label>-{props.name}</label>
          <label onClick={deletegenre}> X</label>
        </div>
    );
};

export default GenreCard;