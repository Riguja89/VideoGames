import React from 'react';
import { useDispatch } from 'react-redux';
import { getGenres,setGamestoShow } from '../../redux/actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

const FilterCont = (props) => {

    const dispatch=useDispatch();
    const [filteredbyGenre, setfilteredbyGenre]=useState([]);
    const [filteredbyDB, setfilteredbyDB]=useState([]);

useEffect(()=>{
    if(props.genres.length===0) dispatch(getGenres()); //caga generos desde la db si no esta lleno 
    setfilteredbyGenre(props.videogames);
    setfilteredbyDB(props.videogames);
},[props.videogames])

function handleFilterGenre(e){
    let filtered=[]
    if (e.target.value!=="All" ){

        filteredbyDB.forEach((game)=>{
            if(game.genres.filter((gen)=>(gen.id===parseInt(e.target.value))).length>0){
               filtered=[...filtered,game]
            }
                })
        dispatch(setGamestoShow(filtered));
        filtered=[];
        props.videogames.forEach((game)=>{
            if(game.genres.filter((gen)=>(gen.id===parseInt(e.target.value))).length>0){
             filtered=[...filtered,game]
            }
                })
        setfilteredbyGenre(filtered);
    }else{
        setfilteredbyGenre(props.videogames)
        dispatch(setGamestoShow(filteredbyDB));
    }
}

function handleFilterDB(e){
    let filtered=[]

    switch(e.target.value){
        case "All":
                filtered=filteredbyGenre;
                setfilteredbyDB(props.videogames);
            break;
        case "db":
                filtered= filteredbyGenre.filter(game=>(game.id.length>9));
                setfilteredbyDB(props.videogames.filter(game=>(game.id.length>9)));
            break;
        case "rawg":
                filtered= filteredbyGenre.filter(game=>(typeof(game.id)!=="string"));
                setfilteredbyDB(props.videogames.filter(game=>typeof(game.id)!=="string"));
             break;    

        default:
            break;
    }
    dispatch(setGamestoShow(filtered));
    
}


    return (
        <div>
                <label>Genres: </label>
                <select id="genreselect" name="genres" onChangeCapture={handleFilterGenre}> {props.genres!==undefined ?props.genres.map(genre=>{
                   
                   return(
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    )
                }):<></>}
                <option value="All" selected>All</option>
                </select>
                <label>Where: </label>
                <select id="whereselect" name="where" onChangeCapture={handleFilterDB }> 
                <option value="All" selected>All</option>
                <option value="db">My DB</option>
                <option value="rawg">RAWG</option>
                </select>      
        </div>
    );
};

function mapStateToProps(state){ 
    return{
      genres: state.genres,
      videogames:state.videogames,
      gamestoShow: state.gamestoShow,
    };
    
  };

export default connect(mapStateToProps,null)(FilterCont);