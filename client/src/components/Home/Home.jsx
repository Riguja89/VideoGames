import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllVideoGames,setGamestoShow } from '../../redux/actions/index';
import GameCard from '../GameCard/GameCard.jsx';
import { Link } from 'react-router-dom';
import FilterCont from '../Filter/Filter';

const Home=(props)=>{
    const PERPAGE=15;
    const [currentPage, setCurrentPage]=useState(1);
    const [items, setItems]=useState([...props.gamestoShow].splice(0,PERPAGE));
  
      useEffect(() => {
        props.getAllVideoGames();
      },[]);

      useEffect(() => {
      props.setGamestoShow(props.videogames)
      
      },[props.videogames]);
     
      useEffect(() => {
        setItems([...props.gamestoShow].splice(0,PERPAGE));
        setCurrentPage(1);
        
      },[props.gamestoShow]);

    const nextHandler=()=>{
        const nextPage=currentPage+1;
        if(props.gamestoShow.length<currentPage*PERPAGE) return;
        setItems([...props.gamestoShow].splice((nextPage-1)*PERPAGE,PERPAGE));
        setCurrentPage(nextPage);

     }

     const prevHandler=()=>{
        const prevPage=currentPage-1;
        if(prevPage<1) return;
        setItems([...props.gamestoShow].splice((prevPage-1)*PERPAGE,PERPAGE));
        setCurrentPage(prevPage);

     }

    return(
        <div>
            <FilterCont />
            <button onClick={prevHandler}>Prev</button>
            <label>{currentPage}</label>
            <button onClick={nextHandler}>Next</button>
            <h1>
                This is the Home Page!!!
            </h1>
            <ul>{items!==undefined ? items.map(game=>{
                return(
                 <Link key={game.id} to={`/videogames/${game.id}`}>
                <GameCard key={game.id}
                image={game.image}
                id={game.id}
                name={game.name}>
                </GameCard>
                </Link>
                )
            }): <>LOADING...</>}
           
            </ul>

        </div>
    );
};

function mapStateToProps(state){ 
    return{
      videogames: state.videogames,
      gamestoShow:state.gamestoShow
    };
    
  };

function mapDispatchToProps(dispatch){
    return{
    getAllVideoGames: ()=>dispatch(getAllVideoGames()),
   setGamestoShow: (games)=>dispatch(setGamestoShow(games)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);