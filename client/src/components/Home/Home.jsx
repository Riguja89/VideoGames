import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllVideoGames } from '../../redux/actions/index';
import GameCard from '../GameCard/GameCard.jsx';
//import { Link } from 'react-router-dom';

const Home=(props)=>{
    //const [videogames, setVideogames]=useState()

    useEffect(() => {
        props.getAllVideoGames();
      },[]);
     // console.log(props.videogames);

    return(
        <div>
            <h1>
                This is the Home Page!!!
            </h1>
            <ul>{props.videogames.map(game=>{
                return(
                <GameCard key={game.id}
                image={game.image}
                id={game.id}
                name={game.name}>
                </GameCard>
                )
            })}
            <h1>hola</h1>
            </ul>

        </div>
    );
};

function mapStateToProps(state){
    return{
      videogames: state.videogames,
    };
    
  };

function mapDispatchToProps(dispatch){
    return{
    getAllVideoGames: ()=>dispatch(getAllVideoGames()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);