import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllVideoGames,setGamestoShow,setVideogamesOrdered,setCurrentPage } from '../../redux/actions/index';
import GameCard from '../GameCard/GameCard.jsx';
import { Link } from 'react-router-dom';
import FilterCont from '../Filter/Filter';
import OrderCont from '../Order/Order';
import './Home.css'

const Home=(props)=>{
    const PERPAGE=15;
    const [items, setItems]=useState([...props.gamestoShow].splice(0,PERPAGE));
  
      useEffect(() => {
        if(props.videogames.length===0)props.getAllVideoGames();
        if(props.gamestoShow.length===0)props.setGamestoShow(props.videogames);
        if(props.videogamesOrdered.length===0)props.setVideogamesOrdered(props.videogames);
      },[props.videogames]);

     
      useEffect(() => {
        setItems([...props.gamestoShow].splice((props.currentPage-1)*PERPAGE,PERPAGE));      
      },[props.gamestoShow]);

    const nextHandler=()=>{
        const nextPage=props.currentPage+1;
        if(props.gamestoShow.length<props.currentPage*PERPAGE) return;
        setItems([...props.gamestoShow].splice((nextPage-1)*PERPAGE,PERPAGE));
        props.setCurrentPage(nextPage);

     }

     const prevHandler=()=>{
        const prevPage=props.currentPage-1;
        if(prevPage<1) return;
        setItems([...props.gamestoShow].splice((prevPage-1)*PERPAGE,PERPAGE));
        props.setCurrentPage(prevPage);

     }

    return(
        <div>
          <div className='filtersorderscontainer'>
          <FilterCont />
          <OrderCont/>
          </div>
          <div className='paginatedcontainer'>
            <button className='pagbutton' onClick={prevHandler}>Prev</button>
            <label> Pag. {props.currentPage} </label>
            <button className='pagbutton' onClick={nextHandler}>Next</button>
          </div>
            <h1>
                {/* This is the Home Page!!! */}
            </h1>
            <div className='divgames'>
            {items!==undefined ? items.map(game=>{
                return(
                 <Link key={game.id} to={`/videogames/${game.id}`}>
                <GameCard key={game.id}
                image={game.image}
                id={game.id}
                name={game.name}
                genres={game.genres}>
                </GameCard>
                </Link>
                )
            }): <>LOADING...</>}
           
            
            </div>
        </div>
    );
};

function mapStateToProps(state){ 
    return{
      videogames: state.videogames,
      gamestoShow:state.gamestoShow,
      videogamesOrdered: state.videogamesOrdered,
      currentPage:state.currentPage,
    };
    
  };

function mapDispatchToProps(dispatch){
    return{
    getAllVideoGames: ()=>dispatch(getAllVideoGames()),
   setGamestoShow: (games)=>dispatch(setGamestoShow(games)),
   setVideogamesOrdered: (games)=>dispatch(setVideogamesOrdered(games)),
   setCurrentPage: (page)=>dispatch(setCurrentPage(page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);