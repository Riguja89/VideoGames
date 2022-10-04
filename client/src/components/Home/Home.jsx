import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllVideoGames,setGamestoShow,setVideogamesOrdered,setCurrentPage,deleteVideoGameId } from '../../redux/actions/index';
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
        console.log("holi")
      },[props.videogames]);

     
      useEffect(() => {
        setItems([...props.gamestoShow].splice((props.currentPage-1)*PERPAGE,PERPAGE));      
      console.log("actualiza items")
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

     const deletegameHandler=(e)=>{
      props.deleteVideoGameId(e.target.id)
      setItems(items=>items.filter(i=>i.id!==e.target.id))
      
     }

    return(
        <div>{props.videogames[0]!=="error" && props.videogames.length>0?
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
            {props.videogames.length!==0 && items.length===0 ?
            <> SORRY !!!, THERE ARE NO VIDEO GAMES TO SHOW BASED ON THAT SEARCH :(</>:
            items.map(game=>{
              return(
                <div className='gamecardcotainer' key={game.id} >
               <Link key={game.id} to={`/videogames/${game.id}`}>
              <GameCard key={game.id}
              image={game.image}
              id={game.id}
              name={game.name}
              genres={game.genres}
              rating={game.rating}>
              </GameCard>
              </Link>
              {game.id.length>9? <button id={game.id} onClick={deletegameHandler} className='btndelete'>Delete</button>:<></>}
        
              </div>
              )
          })
          }
           
            
            </div>
            </div>
            :props.videogames[0]==="error"? 
            <div>Error Server, please contact support</div>:
            <div className='loading'> LOADING...</div> 
            
            }
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
   deleteVideoGameId:(id)=>dispatch(deleteVideoGameId(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);